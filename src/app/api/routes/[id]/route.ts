import { NextResponse } from "next/server";
import { db } from "@/db";
import { transportRoutes } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(request: Request, { params } : {params:any} ) {
  try {
    const { routeName, routeLength, status, fleetCount } = await request.json();
    const id = Number(params.id);

    if (!routeName || !routeLength || !status || !fleetCount) {
      return NextResponse.json({ error: "Semua field harus diisi" }, { status: 400 });
    }

    await db.update(transportRoutes)
      .set({ routeName, routeLength, status, fleetCount })
      .where(eq(transportRoutes.id, id));

    return NextResponse.json({ message: "Trayek berhasil diperbarui" }, { status: 200 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Gagal memperbarui trayek" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }:{params:any}) {
  try {
    const id = Number(params.id);
    await db.delete(transportRoutes).where(eq(transportRoutes.id, id));

    return NextResponse.json({ message: "Trayek berhasil dihapus" }, { status: 200 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Gagal menghapus trayek" }, { status: 500 });
  }
}
