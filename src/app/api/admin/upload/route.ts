import { NextResponse } from "next/server";
import { getAdminClient } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const { supabase, isAdmin } = await getAdminClient();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const table = formData.get("table") as string | null;

  if (!file || !table) {
    return NextResponse.json({ error: "Missing file or table" }, { status: 400 });
  }

  const extension = file.name.split(".").pop() || "png";
  const id = crypto.randomUUID();
  const path = `xdtech/${table}/${id}.${extension}`;

  const { error } = await supabase.storage
    .from("xdtech-media")
    .upload(path, file, { upsert: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const { data } = supabase.storage.from("xdtech-media").getPublicUrl(path);

  return NextResponse.json({ url: data.publicUrl });
}
