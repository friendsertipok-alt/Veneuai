import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { saveClick } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { buttonId, pagePath, details } = await req.json();
    const headersList = await headers();
    
    const ip = headersList.get("x-nf-client-connection-ip") || 
               headersList.get("x-real-ip") || 
               headersList.get("x-forwarded-for")?.split(",")[0].trim() || 
               "127.0.0.1";
               
    await saveClick({
      ip,
      button_id: buttonId,
      page_path: pagePath || "/",
      details: details || null
    });
    
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Track click error:", e);
    return NextResponse.json({ success: false, error: String(e) }, { status: 500 });
  }
}
