import { useState } from "react";
import { data } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { MdSort } from "react-icons/md";

const Table = () => {
  const [projects, setProjects] = useState(data);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filterVisible, setFiltersVisible] = useState(false);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

  const [filters, setFilters] = useState({
    name: "",
    country: "",
    email: "",
    project: "",
    status: "",
  });

  const [searchQuery] = useState("");

  // Sorting logic
  const sortProjects = (key: string) => {
    const sortedProjects = [...projects];

    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      sortedProjects.sort((a, b) => (a[key as keyof typeof a] > b[key as keyof typeof b] ? -1 : 1));
      setSortConfig({ key, direction: "descending" });
    } else {
      sortedProjects.sort((a, b) => (a[key as keyof typeof a] > b[key as keyof typeof b] ? 1 : -1));
      setSortConfig({ key, direction: "ascending" });
    }

    setProjects(sortedProjects);
  };

  const handleSortOptionClick = (key: string) => {
    sortProjects(key);
    setDropdownVisible(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredProjects = projects.filter((project) => {
    return (
      (filters.name === "" || project.client.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.country === "" || project.country.toLowerCase().includes(filters.country.toLowerCase())) &&
      (filters.email === "" || project.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.project === "" || project.project.toLowerCase().includes(filters.project.toLowerCase())) &&
      (filters.status === "" || project.status.toLowerCase().includes(filters.status.toLowerCase())) &&
      (searchQuery === "" ||
        Object.values(project).some((value) => String(value).toLowerCase().includes(searchQuery.toLowerCase())))
    );
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="table-container p-6 bg-gray-950 rounded-xl shadow-lg overflow-x-auto w-full">
      {/* Sorting & Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-5">
        {/* Sort */}
        <div className="relative">
          <button
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="flex items-center gap-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md hover:bg-cyan-500 hover:text-gray-950 transition"
          >
            <BiSort /> Sort <AiOutlineDown />
          </button>
          {dropdownVisible && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-20">
              {["client", "country", "date"].map((key) => (
                <button
                  key={key}
                  onClick={() => handleSortOptionClick(key)}
                  className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="relative">
          <button
            onClick={() => setFiltersVisible(!filterVisible)}
            className="flex items-center gap-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md hover:bg-cyan-500 hover:text-gray-950 transition"
          >
            <MdSort /> Filters <AiOutlineDown />
          </button>
          {filterVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 z-20 w-64">
              {Object.keys(filters).map((key) => (
                <div key={key} className="mb-3">
                  <label className="block text-sm font-semibold text-white mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={filters[key as keyof typeof filters]}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full text-white table-auto rounded-lg border border-gray-700">
        <thead className="bg-gray-800">
          <tr>
            {["Image", "Name", "Country", "Email", "Project", "Task Progress", "Status", "Date", "Actions"].map((head) => (
              <th
                key={head}
                className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b border-gray-700"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((proj, idx) => (
            <tr key={idx} className="even:bg-gray-900/30 hover:bg-cyan-500/10 transition">
              <td className="px-4 py-2">
                <img
                  src={proj.image}
                  alt={proj.client}
                  className="w-10 h-10 rounded-full border-2 border-cyan-500 object-cover"
                />
              </td>
              <td className="px-4 py-2">{proj.client}</td>
              <td className="px-4 py-2">{proj.country}</td>
              <td className="px-4 py-2">{proj.email}</td>
              <td className="px-4 py-2">{proj.project}</td>
              <td className="px-4 py-2">{proj.progress}</td>
              <td className="px-4 py-2">{proj.status}</td>
              <td className="px-4 py-2">{proj.date}</td>
              <td className="px-4 py-2">
                <button className="px-3 py-1 bg-gray-700 rounded-md hover:bg-cyan-500 hover:text-gray-950 transition">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-3 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-800 rounded-md hover:bg-cyan-500 hover:text-gray-950 disabled:opacity-50 transition"
        >
          Previous
        </button>
        <span className="text-sm font-medium text-gray-400">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-800 rounded-md hover:bg-cyan-500 hover:text-gray-950 disabled:opacity-50 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
