import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react";

/* TEMP DATA – replace with API later */
const candidates = [
  {
    id: 1,
    name: "Nada Shoe",
    phone: "9876543210",
    skill: "Sales Assistant",
    state: "Kerala",
    district: "Kozhikode",
    area: "Nadapuram",
    age: 22,
    education: "B.Com (Final Year)",
    experience: "6 months retail shop experience",
    availability: "Evening (4 PM – 9 PM)",
    about:
      "Hardworking and friendly sales assistant with basic billing knowledge.",
    status: "Pending",
  },
  {
    id: 2,
    name: "Rahul K",
    phone: "9876501234",
    skill: "Cashier",
    state: "Kerala",
    district: "Kozhikode",
    area: "Mananchira",
    age: 21,
    education: "Plus Two",
    experience: "1 year supermarket cashier",
    availability: "Morning (8 AM – 2 PM)",
    about:
      "Experienced cashier with good customer handling skills.",
    status: "Approved",
  },
];

export default function CandidateDetails() {
  const { id } = useParams();
  const candidate = candidates.find(c => c.id === Number(id));

  const [status, setStatus] = useState(candidate?.status || "Pending");

  if (!candidate) {
    return <div className="p-6 text-gray-500">Candidate not found</div>;
  }

  return (
    <section className="max-w-4xl mx-auto mt-10 px-4">
      <div className="bg-white border rounded-xl shadow-sm p-6">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-green-600 text-white
                          flex items-center justify-center text-2xl font-bold">
            {candidate.name.charAt(0)}
          </div>

          <div>
            <h1 className="text-2xl font-bold">{candidate.name}</h1>
            <p className="text-gray-600">{candidate.skill}</p>

            {/* STATUS */}
            <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm
              ${status === "Approved"
                ? "bg-green-100 text-green-700"
                : status === "Rejected"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"}`}>
              {status}
            </span>
          </div>
        </div>

        {/* DETAILS */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="flex gap-2"><Phone size={16} /> {candidate.phone}</p>
            <p className="flex gap-2">
              <MapPin size={16} />
              {candidate.area}, {candidate.district}, {candidate.state}
            </p>
            <p className="flex gap-2"><Calendar size={16} /> Age: {candidate.age}</p>
            <p className="flex gap-2">
              <GraduationCap size={16} /> {candidate.education}
            </p>
          </div>

          <div className="space-y-3">
            <p className="flex gap-2">
              <Briefcase size={16} /> {candidate.experience}
            </p>
            <p className="flex gap-2">
              <Calendar size={16} /> {candidate.availability}
            </p>
          </div>
        </div>

        {/* ABOUT */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-gray-600">{candidate.about}</p>
        </div>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => setStatus("Approved")}
            disabled={status === "Approved"}
            className="flex items-center gap-2 bg-green-600 text-white
                       px-6 py-3 rounded-lg disabled:opacity-50"
          >
            <CheckCircle size={18} /> Approve
          </button>

          <button
            onClick={() => setStatus("Rejected")}
            disabled={status === "Rejected"}
            className="flex items-center gap-2 bg-red-600 text-white
                       px-6 py-3 rounded-lg disabled:opacity-50"
          >
            <XCircle size={18} /> Reject
          </button>

          <button
            onClick={() => setStatus("Pending")}
            className="flex items-center gap-2 border
                       px-6 py-3 rounded-lg"
          >
            <RotateCcw size={18} /> Cancel Decision
          </button>

          <a
            href={`tel:${candidate.phone}`}
            className="flex items-center gap-2 border
                       px-6 py-3 rounded-lg"
          >
            <Phone size={18} /> Call
          </a>
        </div>
      </div>
    </section>
  );
}
