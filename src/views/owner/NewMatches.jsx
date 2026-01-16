import { MapPin, User, Briefcase, Phone, Search, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

/* TEMP CANDIDATE DATA (replace with API later) */
const candidates = [
  {
    id: 1,
    name: "Nada Shoe",
    skill: "Sales Assistant",
    state: "Kerala",
    district: "Kozhikode",
    area: "Nadapuram",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Rahul K",
    skill: "Cashier",
    state: "Kerala",
    district: "Kozhikode",
    area: "Mananchira",
    phone: "9876501234",
  },
  {
    id: 3,
    name: "Ameen P",
    skill: "Delivery Partner",
    state: "Kerala",
    district: "Malappuram",
    area: "Kuttichira",
    phone: "9876511122",
  },
  {
    id: 4,
    name: "Sneha R",
    skill: "Cafe Staff",
    state: "Karnataka",
    district: "Bengaluru",
    area: "Indiranagar",
    phone: "9876512345",
  },
];

export default function NewMatches() {
  const [filters, setFilters] = useState({
    state: "",
    district: "",
    area: "",
    skill: "",
  });

  const [search, setSearch] = useState("");

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredCandidates = candidates.filter((c) => {
    const query = search.toLowerCase();

    const matchesSearch =
      !query ||
      c.name.toLowerCase().includes(query) ||
      c.skill.toLowerCase().includes(query) ||
      c.area.toLowerCase().includes(query) ||
      c.district.toLowerCase().includes(query) ||
      c.state.toLowerCase().includes(query);

    return (
      matchesSearch &&
      (!filters.state || c.state === filters.state) &&
      (!filters.district || c.district === filters.district) &&
      (!filters.area || c.area === filters.area) &&
      (!filters.skill || c.skill === filters.skill)
    );
  });

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-green-600 mb-2">
        New Matches
      </h1>
      <p className="text-gray-600 mb-6">
        Search and filter candidates by location, skills, or name.
      </p>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-3 border p-3 rounded-xl bg-white shadow-sm mb-6">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Search name, skill, area, district, state..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* FILTERS */}
      <div className="bg-white border rounded-xl p-4 mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <select className="border p-3 rounded-lg" onChange={(e) => handleFilter("state", e.target.value)}>
          <option value="">All States</option>
          <option>Kerala</option>
          <option>Karnataka</option>
        </select>

        <select className="border p-3 rounded-lg" onChange={(e) => handleFilter("district", e.target.value)}>
          <option value="">All Districts</option>
          <option>Kozhikode</option>
          <option>Malappuram</option>
          <option>Bengaluru</option>
        </select>

        <select className="border p-3 rounded-lg" onChange={(e) => handleFilter("area", e.target.value)}>
          <option value="">All Areas</option>
          <option>Nadapuram</option>
          <option>Mananchira</option>
          <option>Kuttichira</option>
          <option>Indiranagar</option>
        </select>

        <select className="border p-3 rounded-lg" onChange={(e) => handleFilter("skill", e.target.value)}>
          <option value="">All Skills</option>
          <option>Cashier</option>
          <option>Delivery Partner</option>
          <option>Cafe Staff</option>
          <option>Sales Assistant</option>
        </select>
      </div>

      {/* CANDIDATE LIST */}
      <div className="grid gap-6">
        {filteredCandidates.length === 0 && (
          <p className="text-gray-500">No candidates found.</p>
        )}

        {filteredCandidates.map((user) => (
          <div
            key={user.id}
            className="bg-white border rounded-xl p-6 shadow-sm
                       flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User size={18} />
                {user.name}
              </h3>

              <p className="text-gray-600 mt-1 flex items-center gap-2">
                <Briefcase size={16} />
                {user.skill}
              </p>

              <p className="text-gray-500 mt-1 flex items-center gap-2">
                <MapPin size={16} />
                {user.area}, {user.district}, {user.state}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-4 md:mt-0 flex gap-3">
              <Link
                to={`/business/candidates/${user.id}`}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700
                           text-white rounded-lg flex items-center gap-2"
              >
                <Eye size={16} />
                View Details
              </Link>

              <a
                href={`tel:${user.phone}`}
                className="px-4 py-2 border rounded-lg
                           hover:bg-gray-100 flex items-center gap-2"
              >
                <Phone size={16} />
                Call
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
