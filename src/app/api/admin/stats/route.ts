import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getStats } from "@/lib/db";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const stats = await getStats();
    return NextResponse.json(stats);
  } catch (e) {
    console.error("Fetch stats API error:", e);
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
