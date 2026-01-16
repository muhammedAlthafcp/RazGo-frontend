import { Link } from "react-router-dom";

export default function JobList({ jobs }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4">Your Job Posts</h3>

      {jobs.length === 0 && (
        <p className="text-gray-500">No jobs posted yet.</p>
      )}

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-500">
                {job.place} • {job.type}
              </p>
            </div>

            <div className="flex gap-3 mt-3 md:mt-0">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  job.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {job.status}
              </span>

              <Link
                to={`/business/jobs/${job.id}`}
                className="text-green-600 font-medium hover:underline"
              >
                View Applicants
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
