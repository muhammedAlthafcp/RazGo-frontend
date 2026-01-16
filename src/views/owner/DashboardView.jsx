import StatsCard from "./StatsCard";
import JobList from "./JobList";
import { Link } from "react-router-dom";
import ProfileMenu from "../../views/owner/ProfileMenu";

/* TEMP DATA (replace with API later) */
const stats = {
  totalJobs: 4,
  activeJobs: 3,
  totalApplicants: 27,
  newApplicants: 5,
};

const jobs = [
  {
    id: 1,
    title: "Cashier – Evening Shift",
    place: "Kozhikode",
    type: "Part-time",
    status: "Active",
  },
  {
    id: 2,
    title: "Delivery Partner",
    place: "Bengaluru",
    type: "Flexible",
    status: "Active",
  },
  {
    id: 3,
    title: "Store Helper",
    place: "Ernakulam",
    type: "Part-time",
    status: "Closed",
  },
];

export default function DashboardView() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-14">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-green-600">
            Business Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your jobs and applicants
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/business/new-job"
            className="bg-green-600 hover:bg-green-700
                       text-white px-6 py-3 rounded-lg
                       font-semibold transition"
          >
            + Post New Job
          </Link>

          {/* PROFILE MENU */}
          <ProfileMenu />
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <StatsCard title="Total Jobs" value={stats.totalJobs} />
        <StatsCard title="Active Jobs" value={stats.activeJobs} />
        <StatsCard title="Total Applicants" value={stats.totalApplicants} />
        <StatsCard title="New Applicants" value={stats.newApplicants} />
      </div>

      {/* JOB LIST */}
      <JobList jobs={jobs} />
    </section>
  );
}
