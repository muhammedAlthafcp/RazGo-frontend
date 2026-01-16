import { Link } from "react-router-dom";
import { MapPin, Briefcase, Search } from "lucide-react";
import { useState } from "react";

const jobsData = [
  {
    id: 1,
    title: "Cashier - Supermarket",
    state: "Kerala",
    place: "Kozhikode",
    district: "Kozhikode",
    salary: "₹10,000/month",
    salaryType: "month",
    date: "2025-12-05",
    type: "Part-time",
  },
  {
    id: 2,
    title: "Delivery Partner - Food App",
    state: "Karnataka",
    place: "Bengaluru",
    district: "Bengaluru Urban",
    salary: "₹800/day",
    salaryType: "day",
    date: "2025-12-06",
    type: "Flexible Hours",
  },
  {
    id: 3,
    title: "Store Helper - Clothing Shop",
    state: "Kerala",
    place: "Ernakulam",
    district: "Ernakulam",
    salary: "₹2,500/week",
    salaryType: "week",
    date: "2025-12-04",
    type: "Part-time",
  },
  {
    id: 4,
    title: "Packing Staff - Warehouse",
    state: "Kerala",
    place: "Malappuram",
    district: "Malappuram",
    salary: "₹9,000/month",
    salaryType: "month",
    date: "2025-12-02",
    type: "Daily Payment",
  },
];

const districts = {
  Kerala: [
    "Kozhikode",
    "Ernakulam",
    "Malappuram",
    "Kannur",
    "Palakkad",
    "Wayanad",
    "Thrissur",
    "Kottayam",
    "Idukki",
    "Alappuzha",
    "Kollam",
    "Pathanamthitta",
    "Kasargod",
  ],
  Karnataka: [
    "Bengaluru Urban",
    "Bengaluru Rural",
    "Mysuru",
    "Udupi",
    "Hubballi",
    "Mangaluru",
  ],
};

export default function JobsPage() {
  const [filters, setFilters] = useState({
    state: "",
    district: "",
    salaryType: "",
    jobType: "",
    sort: "",
  });

  const [search, setSearch] = useState("");

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredJobs = jobsData
    .filter((job) => {
      const query = search.toLowerCase();

      return (
        (job.title.toLowerCase().includes(query) ||
          job.place.toLowerCase().includes(query) ||
          job.district.toLowerCase().includes(query) ||
          job.state.toLowerCase().includes(query)) &&
        (!filters.state || job.state === filters.state) &&
        (!filters.district || job.district === filters.district) &&
        (!filters.salaryType || job.salaryType === filters.salaryType) &&
        (!filters.jobType || job.type === filters.jobType)
      );
    })
    .sort((a, b) => {
      if (filters.sort === "latest") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

  return (
    <section className="max-w-7xl mx-auto mt-14 px-6">
      <h1 className="text-3xl font-bold text-green-600">Find Jobs</h1>
      <p className="text-gray-600 mt-1">
        Filter jobs by location, salary & more.
      </p>

      {/* 2 COLUMN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 mt-10">

        {/* LEFT — JOB LIST */}
        <div>
          <div className="flex items-center gap-3 border p-3 rounded-xl bg-white shadow-sm mb-6">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search job, place, district, state..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          <h2 className="font-semibold text-xl mb-4">
            {filteredJobs.length} Jobs Found
          </h2>

          <div className="grid gap-6">
            {filteredJobs.length === 0 && (
              <p className="text-gray-500 text-lg mt-4">No jobs found.</p>
            )}

            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-white border rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3">
                  <Briefcase size={26} className="text-green-600" />
                  <h3 className="font-semibold text-xl">{job.title}</h3>
                </div>

                <p className="flex items-center gap-2 text-gray-600 mt-2">
                  <MapPin size={18} />
                  {job.place}, {job.state}
                </p>

                <p className="mt-2 font-semibold">{job.salary}</p>
                <p className="text-sm text-green-600">{job.type}</p>

                <Link
                  to={`/jobs/${job.id}`}
                  className="mt-4 inline-block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — FILTERS */}
        <div className="p-6 bg-white border rounded-xl shadow-lg h-fit sticky top-24">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          <div className="mb-5">
            <label className="font-semibold">State</label>
            <select
              className="border p-3 rounded-lg mt-1 w-full"
              onChange={(e) => handleFilter("state", e.target.value)}
            >
              <option value="">All States</option>
              <option value="Kerala">Kerala</option>
              <option value="Karnataka">Karnataka</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="font-semibold">District</label>
            <select
              className="border p-3 rounded-lg mt-1 w-full"
              onChange={(e) => handleFilter("district", e.target.value)}
            >
              <option value="">All Districts</option>
              {filters.state &&
                districts[filters.state].map((d) => (
                  <option key={d}>{d}</option>
                ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="font-semibold">Salary Type</label>
            <select
              className="border p-3 rounded-lg mt-1 w-full"
              onChange={(e) => handleFilter("salaryType", e.target.value)}
            >
              <option value="">Any</option>
              <option value="day">Per Day</option>
              <option value="week">Per Week</option>
              <option value="month">Per Month</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="font-semibold">Job Type</label>
            <select
              className="border p-3 rounded-lg mt-1 w-full"
              onChange={(e) => handleFilter("jobType", e.target.value)}
            >
              <option value="">Any</option>
              <option>Part-time</option>
              <option>Flexible Hours</option>
              <option>Daily Payment</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="font-semibold">Sort By</label>
            <select
              className="border p-3 rounded-lg mt-1 w-full"
              onChange={(e) => handleFilter("sort", e.target.value)}
            >
              <option value="">Default</option>
              <option value="latest">Latest First</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
