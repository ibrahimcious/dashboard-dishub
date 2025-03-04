import { NextResponse } from "next/server";
import { db } from "@/db";
import { transportRoutes } from "@/db/schema";

export async function GET() {
  try {
    const routes = await db.select().from(transportRoutes);
    console.log("Data dari Database:", routes); // Debugging
    return NextResponse.json({ routes }, { status: 200 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil data trayek" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { routeCode, routeName, routeLength, status, fleetCount } = await req.json();

    if (!routeCode || !routeName || !routeLength || !status || !fleetCount) {
      return NextResponse.json({ error: "Semua field harus diisi" }, { status: 400 });
    }

    const result = await db.insert(transportRoutes).values({
      routeCode,
      routeName,
      routeLength,
      status,
      fleetCount,
    }).returning();

    return NextResponse.json({ message: "Trayek berhasil ditambahkan", data: result }, { status: 201 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Gagal menambahkan trayek" }, { status: 500 });
  }
}
