import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  MapPin,
  Briefcase,
  Edit,
  User,
  Phone,
} from "lucide-react";

/* ================= TEMP DATA (REPLACE WITH API LATER) ================= */

/* JOB DATA */
const jobs = [
  {
    id: 1,
    title: "Cashier – Evening Shift",
    location: "Kozhikode",
    salary: "₹8,000 / month",
    type: "Part-time",
    description:
      "Looking for a cashier for evening shift. Basic billing knowledge required.",
  },
  {
    id: 2,
    title: "Delivery Partner",
    location: "Bengaluru",
    salary: "₹800 / day",
    type: "Flexible",
    description: "Need delivery partner with bike.",
  },
];

/* APPLICATION DATA */
const applicationsData = [
  {
    id: 1,
    jobId: 1,
    name: "Rahul K",
    skill: "Cashier",
    location: "Mananchira, Kozhikode",
    phone: "9876543210",
    status: "Pending",
  },
  {
    id: 2,
    jobId: 1,
    name: "Ameen P",
    skill: "Cashier",
    location: "Kuttichira, Kozhikode",
    phone: "9876501234",
    status: "Approved",
  },
  {
    id: 3,
    jobId: 2,
    name: "Sneha R",
    skill: "Delivery Partner",
    location: "Indiranagar, Bengaluru",
    phone: "9876512345",
    status: "Pending",
  },
];

/* ================= COMPONENT ================= */

export default function JobApplications() {
  const { id } = useParams(); // JOB ID FROM URL

  /* FIND SELECTED JOB */
  const job = jobs.find((j) => j.id === Number(id));

  /* FILTER APPLICATIONS FOR THIS JOB */
  const [applications, setApplications] = useState(
    applicationsData.filter((app) => app.jobId === Number(id))
  );

  /* UPDATE APPLICATION STATUS */
  const updateStatus = (appId, newStatus) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === appId ? { ...app, status: newStatus } : app
      )
    );
  };

  if (!job) {
    return (
      <div className="p-6 text-gray-500">
        Job not found.
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">

      {/* ================= JOB DETAILS ================= */}
      <div className="bg-white border rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase size={22} />
              {job.title}
            </h1>

            <p className="text-gray-600 mt-1 flex items-center gap-2">
              <MapPin size={16} />
              {job.location}
            </p>

            <p className="mt-2 font-semibold">{job.salary}</p>
            <p className="text-sm text-green-600">{job.type}</p>
          </div>

          {/* EDIT JOB */}
          <Link
            to={`/business/jobs/${job.id}/edit`}
            className="mt-4 md:mt-0 flex items-center gap-2
                       bg-green-600 hover:bg-green-700
                       text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            <Edit size={16} />
            Edit Job
          </Link>
        </div>

        <p className="mt-4 text-gray-600">
          {job.description}
        </p>
      </div>

      {/* ================= APPLICATIONS ================= */}
      <div className="bg-white border rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold p-6 border-b">
          Applications ({applications.length})
        </h2>

        {applications.length === 0 && (
          <p className="p-6 text-gray-500">
            No applications received yet.
          </p>
        )}

        {applications.map((app) => (
          <div
            key={app.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between
                       border-b p-6"
          >
            {/* LEFT */}
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <User size={18} />
                {app.name}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Skill: {app.skill}
              </p>

              <p className="text-sm text-gray-500">
                {app.location}
              </p>

              {/* STATUS BADGE */}
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                  app.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : app.status === "Rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {app.status}
              </span>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
              <button
                onClick={() => updateStatus(app.id, "Approved")}
                disabled={app.status === "Approved"}
                className="px-4 py-2 bg-green-600 text-white rounded-lg
                           hover:bg-green-700 disabled:opacity-50"
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(app.id, "Rejected")}
                disabled={app.status === "Rejected"}
                className="px-4 py-2 bg-red-600 text-white rounded-lg
                           hover:bg-red-700 disabled:opacity-50"
              >
                Reject
              </button>

              <a
                href={`tel:${app.phone}`}
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
