import { NextRequest, NextResponse } from "next/server";
import { setSession } from "@/lib/session";

// Global login attempts tracker in serverless memory (works for typical usage)
const loginAttempts: Record<string, { count: number; blockedUntil: number }> = {};

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "lizalegends228";
    
    const ip = req.headers.get("x-nf-client-connection-ip") || 
               req.headers.get("x-real-ip") || 
               req.headers.get("x-forwarded-for")?.split(",")[0].trim() || 
               "127.0.0.1";
               
    const now = Date.now();
    const attempt = loginAttempts[ip] || { count: 0, blockedUntil: 0 };
    
    if (attempt.blockedUntil > now) {
      const waitMin = Math.ceil((attempt.blockedUntil - now) / 60000);
      return NextResponse.json(
        { success: false, error: `Слишком много попыток. Пожалуйста, подождите ${waitMin} мин.` },
        { status: 429 }
      );
    }
    
    // Constant time comparison (to avoid timing attacks)
    const encoder = new TextEncoder();
    const p1 = encoder.encode(password);
    const p2 = encoder.encode(adminPassword);
    
    let isValid = p1.byteLength === p2.byteLength;
    const len = Math.max(p1.byteLength, p2.byteLength);
    for (let i = 0; i < len; i++) {
      if ((p1[i] || 0) !== (p2[i] || 0)) {
        isValid = false;
      }
    }
    
    if (!isValid) {
      attempt.count += 1;
      if (attempt.count >= 5) {
        attempt.blockedUntil = now + 5 * 60 * 1000; // 5 min block
        loginAttempts[ip] = attempt;
        return NextResponse.json(
          { success: false, error: "Слишком много неверных попыток входа. Доступ заблокирован на 5 минут." },
          { status: 429 }
        );
      }
      loginAttempts[ip] = attempt;
      return NextResponse.json(
        { success: false, error: `Неверный пароль. Осталось попыток: ${5 - attempt.count}` },
        { status: 400 }
      );
    }
    
    // Reset attempts on success
    delete loginAttempts[ip];
    
    await setSession({ loggedIn: true });
    
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Login API error:", e);
    return NextResponse.json({ success: false, error: "Системная ошибка авторизации." }, { status: 500 });
  }
}
