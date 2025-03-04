import AngkutanChart from "@/app/components/AngkutanChart";
import { db } from "@/db";
import { transportRoutes } from "@/db/schema";

export const fetchCache = "force-no-store";

async function getTransportRoutes() {
  try {
    const routes = await db.select().from(transportRoutes);
    return routes;
  } catch (error) {
    console.error("Failed to fetch transport routes:", error);
    return []; // Jika gagal, kembalikan array kosong agar tidak error di map()
  }
}

export default async function Angkutan() {
  const routes = await getTransportRoutes();

  // Hitung jumlah trayek & jumlah armada
  const totalTrayek = routes.length;
  const totalArmada = routes.reduce((acc, route) => acc + (route.fleetCount || 0), 0);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Data Angkutan</h2>

      {routes.length === 0 ? (
        <p className="text-red-500">Tidak ada data angkutan yang tersedia.</p>
      ) : (
        <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Kode Trayek</th>
                <th className="border p-2">Trayek</th>
                <th className="border p-2">Panjang (km)</th>
                <th className="border p-2">Kondisi</th>
                <th className="border p-2">Jumlah Armada</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route.id} className="text-center">
                  <td className="border p-2">{route.routeCode}</td>
                  <td className="border p-2">{route.routeName}</td>
                  <td className="border p-2">{route.routeLength}</td>
                  <td className="border p-2">{route.status}</td>
                  <td className="border p-2">{route.fleetCount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Chart Component */}
          <AngkutanChart totalTrayek={totalTrayek} totalArmada={totalArmada} />
        </>
      )}
    </section>
  );
}
