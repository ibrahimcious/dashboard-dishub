import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 bg-gray-100 h-full">{children}</main>
      </div>
    </div>
  );
}
