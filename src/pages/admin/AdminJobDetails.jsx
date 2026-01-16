import { useParams } from "react-router-dom";
import { Briefcase, MapPin, Building2 } from "lucide-react";

/* TEMP DATA */
const jobs = [
  {
    id: 1,
    title: "Cashier – Evening Shift",
    business: "Nada Shoe",
    location: "Kozhikode",
    status: "Active",
    description:
      "Looking for a cashier for evening shift (4 PM – 9 PM).",
  },
  {
    id: 2,
    title: "Delivery Partner",
    business: "Fresh Mart",
    location: "Malappuram",
    status: "Paused",
    description:
      "Bike delivery partner needed for grocery delivery.",
  },
];

export default function AdminJobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="bg-white border rounded-xl p-6 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Job Details</h1>

      <div className="space-y-3 text-gray-700">
        <p className="flex items-center gap-2">
          <Briefcase size={18} /> {job.title}
        </p>
        <p className="flex items-center gap-2">
          <Building2 size={18} /> {job.business}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={18} /> {job.location}
        </p>
        <p>
          Status:{" "}
          <b
            className={
              job.status === "Active"
                ? "text-green-600"
                : "text-gray-600"
            }
          >
            {job.status}
          </b>
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Description</h3>
        <p className="text-gray-600">{job.description}</p>
      </div>
    </div>
  );
}
