import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.name || !body?.email || !body?.subject || !body?.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
