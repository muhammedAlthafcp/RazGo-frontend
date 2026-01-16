import { useState } from "react";
import { Search, Eye, CheckCircle, Ban } from "lucide-react";
import { Link } from "react-router-dom";

/* TEMP DATA – replace with API later */
const initialBusinesses = [
  {
    id: 1,
    name: "Nada Shoe",
    location: "Kozhikode",
    owner: "Nihal",
    phone: "9876543210",
    status: "Verified", // Verified | Pending | Blocked
  },
  {
    id: 2,
    name: "Fresh Mart",
    location: "Malappuram",
    owner: "Rahul",
    phone: "9876501234",
    status: "Pending",
  },
];

export default function AdminBusinesses() {
  const [businesses, setBusinesses] = useState(initialBusinesses);
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setBusinesses((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              status:
                b.status === "Verified"
                  ? "Blocked"
                  : "Verified",
            }
          : b
      )
    );
  };

  const filteredBusinesses = businesses.filter((b) => {
    const q = search.toLowerCase();
    return (
      b.name.toLowerCase().includes(q) ||
      b.location.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Businesses</h1>

      {/* SEARCH */}
      <div className="flex items-center gap-3 bg-white border p-3 rounded-xl mb-6">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search business name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* BUSINESS LIST */}
      <div className="bg-white border rounded-xl overflow-hidden">
        {filteredBusinesses.length === 0 && (
          <p className="p-6 text-gray-500">
            No businesses found.
          </p>
        )}

        {filteredBusinesses.map((b) => (
          <div
            key={b.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between
                       p-4 border-b gap-4"
          >
            {/* INFO */}
            <div>
              <p className="font-semibold">{b.name}</p>
              <p className="text-sm text-gray-500">
                {b.location} • Owner: {b.owner}
              </p>
              <p className="text-sm text-gray-500">{b.phone}</p>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              {/* STATUS */}
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  b.status === "Verified"
                    ? "bg-green-100 text-green-700"
                    : b.status === "Blocked"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {b.status}
              </span>

              {/* VIEW DETAILS */}
              <Link
                to={`/admin/businesses/${b.id}`}
                className="p-2 border rounded-lg hover:bg-gray-100"
                title="View Details"
              >
                <Eye size={18} />
              </Link>

              {/* VERIFY / BLOCK */}
              <button
                onClick={() => toggleStatus(b.id)}
                className={`p-2 rounded-lg text-white ${
                  b.status === "Verified"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                title={
                  b.status === "Verified"
                    ? "Block Business"
                    : "Verify Business"
                }
              >
                {b.status === "Verified" ? (
                  <Ban size={18} />
                ) : (
                  <CheckCircle size={18} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
