const stats = [
    { number: "120+", label: "Trayek Terdaftar" },
    { number: "3000+", label: "Armada Terdata" },
    { number: "99.9%", label: "Uptime Sistem" },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-blue-50 py-12">
        <div className="max-w-5xl mx-auto text-center grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  