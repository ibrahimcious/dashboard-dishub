import { NextResponse } from "next/server";
import { db } from "@/db";
import { uploadedFiles } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const { filename, fileUrl } = await req.json();

    if (!filename || !fileUrl) {
      return NextResponse.json({ error: "Filename dan File URL wajib diisi" }, { status: 400 });
    }

    const result = await db.insert(uploadedFiles).values({ filename, fileUrl }).returning();

    return NextResponse.json({ message: "File berhasil diunggah", data: result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan saat upload" }, { status: 500 });
  }
}
