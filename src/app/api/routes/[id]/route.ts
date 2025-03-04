import { NextResponse } from "next/server";
import { db } from "@/db";
import { transportRoutes } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { routeName, routeLength, status, fleetCount } = await req.json();
    const id = Number(params.id);

    if (!routeName || !routeLength || !status || !fleetCount) {
      return NextResponse.json({ error: "Semua field harus diisi" }, { status: 400 });
    }

    await db.update(transportRoutes)
      .set({ routeName, routeLength, status, fleetCount })
      .where(eq(transportRoutes.id, id));

    return NextResponse.json({ message: "Trayek berhasil diperbarui" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal memperbarui trayek" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    await db.delete(transportRoutes).where(eq(transportRoutes.id, id));

    return NextResponse.json({ message: "Trayek berhasil dihapus" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menghapus trayek" }, { status: 500 });
  }
}
