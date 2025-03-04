import Link from "next/link";
import { Home, Bus, TrafficCone } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-600 text-white h-full p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link href="/dashboard" className="flex items-center gap-2 hover:bg-blue-500 p-2 rounded">
              <Home size={20} /> Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/angkutan" className="flex items-center gap-2 hover:bg-blue-500 p-2 rounded">
              <Bus size={20} /> Angkutan
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/laluLintas" className="flex items-center gap-2 hover:bg-blue-500 p-2 rounded">
              <TrafficCone size={20} /> Lalu Lintas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
