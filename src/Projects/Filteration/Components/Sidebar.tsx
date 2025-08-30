import { FaHome, FaUserAlt, FaCog, FaFolderOpen } from "react-icons/fa";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <div
      className={`h-screen bg-gray-950 border-r border-gray-800 flex flex-col justify-between py-6 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className={`text-cyan-400 text-2xl font-bold text-center ${collapsed ? "" : "mb-6"}`}>⚡</div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-6 px-2">
        <button className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition w-full">
          <FaHome size={24} />
          {!collapsed && <span>Home</span>}
        </button>
        <button className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition w-full">
          <FaFolderOpen size={24} />
          {!collapsed && <span>Projects</span>}
        </button>
        <button className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition w-full">
          <FaUserAlt size={24} />
          {!collapsed && <span>Users</span>}
        </button>
        <button className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition w-full">
          <FaCog size={24} />
          {!collapsed && <span>Settings</span>}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
