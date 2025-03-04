import { NextResponse } from "next/server";
import { db } from "@/db";
import { uploadedFiles } from "@/db/schema";

export async function GET() {
    try {
      const files = await db.select().from(uploadedFiles);
      return NextResponse.json({ files }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
    }
  }
  