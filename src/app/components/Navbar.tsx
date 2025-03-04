export default function Navbar() {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Logout</button>
      </header>
    );
  }
  