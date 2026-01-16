import JobCard from "./JobCard";
import { liveJobs } from "../../models/services/liveJobsData";

export default function LiveJobs() {
  return (
    <section className="mt-20">
      
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Live Jobs
          </h2>
          <p className="text-gray-500 mt-1">
            Latest opportunities near you
          </p>
        </div>

        <a
          href="/jobs"
          className="text-green-600 font-medium hover:underline"
        >
          View all →
        </a>
      </div>

      {/* Job Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {liveJobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            salary={job.salary}
            status={job.status}
            location={job.location}
            type={job.type}
          />
        ))}
      </div>
    </section>
  );
}
