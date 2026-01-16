import { useParams, Link } from "react-router-dom";
import { MapPin, Briefcase, IndianRupee, Clock } from "lucide-react";

/* SAME DATA SOURCE (later replace with API) */
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
    description:
      "Looking for a cashier to handle billing and customer support.",
    requirements:
      "Basic math knowledge, friendly communication, age 18+",
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
    description:
      "Pick up and deliver food orders using bike.",
    requirements:
      "Bike, driving license, smartphone required",
  },
];

export default function JobDetails() {
  const { id } = useParams();

  const job = jobsData.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="text-center mt-20 text-gray-600">
        Job not found
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto mt-16 px-6">
      <div className="bg-white border rounded-xl shadow-lg p-8">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-green-600">
          {job.title}
        </h1>

        {/* META */}
        <div className="flex flex-wrap gap-6 mt-4 text-gray-600">
          <p className="flex items-center gap-2">
            <MapPin size={18} />
            {job.place}, {job.state}
          </p>

          <p className="flex items-center gap-2">
            <Briefcase size={18} />
            {job.type}
          </p>

          <p className="flex items-center gap-2">
            <IndianRupee size={18} />
            {job.salary}
          </p>

          <p className="flex items-center gap-2">
            <Clock size={18} />
            Posted on {job.date}
          </p>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">
            Job Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* REQUIREMENTS */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Requirements
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {job.requirements}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <button
            className="w-full md:w-auto bg-green-600 hover:bg-green-700
                       text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Apply Now
          </button>

          <Link
            to="/jobs"
            className="w-full md:w-auto border border-gray-300
                       px-8 py-3 rounded-lg text-center hover:bg-gray-100 transition"
          >
            Back to Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}
