import { useState } from "react";
import { Search, Eye, Ban, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

/* TEMP DATA – replace with API later */
const initialUsers = [
  {
    id: 1,
    name: "Rahul K",
    phone: "9876543210",
    place: "Kozhikode",
    job: "Cashier",
    status: "Active",
  },
  {
    id: 2,
    name: "Ameen P",
    phone: "9876501234",
    place: "Malappuram",
    job: "Delivery Partner",
    status: "Blocked",
  },
];

export default function AdminUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" }
          : u
      )
    );
  };

  const filteredUsers = users.filter((u) => {
    const q = search.toLowerCase();
    return (
      u.name.toLowerCase().includes(q) ||
      u.place.toLowerCase().includes(q) ||
      u.job.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      {/* SEARCH */}
      <div className="flex items-center gap-3 bg-white border p-3 rounded-xl mb-6">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search name, place, job..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* USERS LIST */}
      <div className="bg-white border rounded-xl overflow-hidden">
        {filteredUsers.length === 0 && (
          <p className="p-6 text-gray-500">No users found.</p>
        )}

        {filteredUsers.map((u) => (
          <div
            key={u.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between
                       p-4 border-b gap-4"
          >
            {/* USER INFO */}
            <div>
              <p className="font-semibold">{u.name}</p>
              <p className="text-sm text-gray-500">{u.phone}</p>
              <p className="text-sm text-gray-500">
                {u.place} • {u.job}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              {/* STATUS */}
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  u.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {u.status}
              </span>

              {/* VIEW DETAILS */}
              <Link
                to={`/admin/users/${u.id}`}
                className="p-2 border rounded-lg hover:bg-gray-100"
                title="View Details"
              >
                <Eye size={18} />
              </Link>

              {/* BLOCK / UNBLOCK */}
              <button
                onClick={() => toggleStatus(u.id)}
                className={`p-2 rounded-lg ${
                  u.status === "Active"
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
                title={u.status === "Active" ? "Block User" : "Unblock User"}
              >
                {u.status === "Active" ? (
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
