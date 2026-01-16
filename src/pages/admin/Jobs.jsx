import { useState } from "react";
import { Search, Eye, PauseCircle, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

/* TEMP DATA – replace with API later */
const initialJobs = [
  {
    id: 1,
    title: "Cashier – Evening Shift",
    business: "Nada Shoe",
    location: "Kozhikode",
    status: "Active", // Active | Paused
  },
  {
    id: 2,
    title: "Delivery Partner",
    business: "Fresh Mart",
    location: "Malappuram",
    status: "Paused",
  },
];

export default function AdminJobs() {
  const [jobs, setJobs] = useState(initialJobs);
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
              ...job,
              status: job.status === "Active" ? "Paused" : "Active",
            }
          : job
      )
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const q = search.toLowerCase();
    return (
      job.title.toLowerCase().includes(q) ||
      job.business.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Jobs</h1>

      {/* SEARCH */}
      <div className="flex items-center gap-3 bg-white border p-3 rounded-xl mb-6">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search job title or business..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* JOB LIST */}
      <div className="bg-white border rounded-xl overflow-hidden">
        {filteredJobs.length === 0 && (
          <p className="p-6 text-gray-500">No jobs found.</p>
        )}

        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between
                       p-4 border-b gap-4"
          >
            {/* INFO */}
            <div>
              <p className="font-semibold">{job.title}</p>
              <p className="text-sm text-gray-500">
                {job.business} • {job.location}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              {/* STATUS */}
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  job.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {job.status}
              </span>

              {/* VIEW DETAILS */}
              <Link
                to={`/admin/jobs/${job.id}`}
                className="p-2 border rounded-lg hover:bg-gray-100"
                title="View Job"
              >
                <Eye size={18} />
              </Link>

              {/* PAUSE / RESUME */}
              <button
                onClick={() => toggleStatus(job.id)}
                className={`p-2 rounded-lg text-white ${
                  job.status === "Active"
                    ? "bg-yellow-600 hover:bg-yellow-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                title={
                  job.status === "Active" ? "Pause Job" : "Resume Job"
                }
              >
                {job.status === "Active" ? (
                  <PauseCircle size={18} />
                ) : (
                  <PlayCircle size={18} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
