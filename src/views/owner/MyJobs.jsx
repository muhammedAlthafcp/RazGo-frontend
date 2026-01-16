import { Link } from "react-router-dom";
import { useState } from "react";
import {
  PauseCircle,
  PlayCircle,
  Edit,
  Trash2,
} from "lucide-react";

/* TEMP DATA (replace with API later) */
const initialJobs = [
  {
    id: 1,
    title: "Cashier – Evening Shift",
    location: "Kozhikode",
    applicants: 12,
    status: "Active",
  },
  {
    id: 2,
    title: "Delivery Partner",
    location: "Bengaluru",
    applicants: 5,
    status: "Paused",
  },
];

export default function MyJobs() {
  const [jobs, setJobs] = useState(initialJobs);

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

  const deleteJob = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (!confirm) return;

    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-green-600 mb-6">
        My Jobs
      </h1>

      <div className="bg-white border rounded-xl shadow-sm">
        {jobs.length === 0 && (
          <p className="p-6 text-gray-500">No jobs posted yet.</p>
        )}

        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between
                       border-b p-6"
          >
            {/* JOB INFO */}
            <div>
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-gray-500 text-sm">{job.location}</p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-600">
                Applicants: <b>{job.applicants}</b>
              </span>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  job.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {job.status}
              </span>

              {/* VIEW APPLICANTS */}
              <Link
                to={`/business/jobs/${job.id}/applicants`}
                className="text-blue-600 hover:underline font-medium"
              >
                View Applicants
              </Link>

              {/* PAUSE / RESUME */}
              <button
                onClick={() => toggleStatus(job.id)}
                className="flex items-center gap-1 text-gray-600 hover:text-black"
              >
                {job.status === "Active" ? (
                  <>
                    <PauseCircle size={18} /> Pause
                  </>
                ) : (
                  <>
                    <PlayCircle size={18} /> Resume
                  </>
                )}
              </button>

              {/* EDIT */}
              <Link
                to={`/business/jobs/${job.id}/edit`}
                className="flex items-center gap-1 text-green-600 hover:underline"
              >
                <Edit size={16} /> Edit
              </Link>

              {/* DELETE */}
              <button
                onClick={() => deleteJob(job.id)}
                className="flex items-center gap-1 text-red-600 hover:underline"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
