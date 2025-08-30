import { useState } from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-64"}`}>
        {/* Top Navbar */}
        <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6 flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="text-white text-2xl md:hidden">
              <FaBars />
            </button>
            <h1 className="text-xl font-semibold tracking-wide">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
            />
            <img src="https://placehold.co/40x40" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-cyan-500" />
          </div>
        </header>

        {/* Main Table Section */}
        <main className="flex-1 overflow-y-auto p-6">
          <Table />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
