import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/lib/session";

const COOKIE_NAME = "venueai_admin_session";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Session Protection for Admin Panel
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const sessionCookie = req.cookies.get(COOKIE_NAME);
    const password = process.env.ADMIN_PASSWORD || "test1234";
    
    let isAuthorized = false;
    if (sessionCookie) {
      const payload = await decrypt(sessionCookie.value, password);
      if (payload && Date.now() < payload.expires) {
        isAuthorized = true;
      }
    }
    
    if (!isAuthorized) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  const res = NextResponse.next();
  const headers = res.headers;
  
  // Content Security Policy
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob: https:;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' https://*.supabase.co;
    frame-ancestors 'none';
    object-src 'none';
    base-uri 'self';
  `.replace(/\s{2,}/g, " ").trim();

  headers.set("Content-Security-Policy", cspHeader);
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set("X-XSS-Protection", "1; mode=block");

  if (process.env.NODE_ENV === "production") {
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - venues/ (extracted image paths)
     */
    "/((?!_next/static|_next/image|favicon.ico|venues/).*)",
  ],
};
