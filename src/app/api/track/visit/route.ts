import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { saveVisit } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { path, referrer } = await req.json();
    const headersList = await headers();
    
    const ip = headersList.get("x-nf-client-connection-ip") || 
               headersList.get("x-real-ip") || 
               headersList.get("x-forwarded-for")?.split(",")[0].trim() || 
               "127.0.0.1";
               
    const userAgent = headersList.get("user-agent") || "Unknown";
    const city = headersList.get("x-city") || "Москва";
    const country = headersList.get("x-country") || "RU";
    
    let device = "Desktop";
    const ua = userAgent.toLowerCase();
    if (ua.includes("mobi") || ua.includes("android") || ua.includes("iphone")) {
      device = "Mobile";
    } else if (ua.includes("tablet") || ua.includes("ipad")) {
      device = "Tablet";
    }
    
    await saveVisit({
      ip,
      user_agent: userAgent,
      path: path || "/",
      referrer: referrer || "direct",
      city,
      country,
      device
    });
    
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Track visit error:", e);
    return NextResponse.json({ success: false, error: String(e) }, { status: 500 });
  }
}
