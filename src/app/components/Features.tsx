import { BarChart, FileText, ShieldCheck } from "lucide-react";

const features = [
  { icon: <FileText size={40} />, title: "Upload Mudah", desc: "Unggah file dengan format sederhana dan kelola data dengan cepat." },
  { icon: <BarChart size={40} />, title: "Visualisasi Data", desc: "Tampilkan statistik trayek dengan grafik yang mudah dipahami." },
  { icon: <ShieldCheck size={40} />, title: "Keamanan Terjamin", desc: "Autentikasi pengguna untuk akses yang lebih aman." },
];

export default function Features() {
  return (
    <section className="py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Fitur Unggulan</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg text-center">
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
