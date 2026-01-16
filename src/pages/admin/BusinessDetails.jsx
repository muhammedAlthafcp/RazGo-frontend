import { useParams } from "react-router-dom";
import {
  Building2,
  Phone,
  MapPin,
  User,
} from "lucide-react";

/* TEMP DATA */
const businesses = [
  {
    id: 1,
    name: "Nada Shoe",
    location: "Kozhikode",
    owner: "Nihal",
    phone: "9876543210",
    status: "Verified",
  },
  {
    id: 2,
    name: "Fresh Mart",
    location: "Malappuram",
    owner: "Rahul",
    phone: "9876501234",
    status: "Pending",
  },
];

export default function AdminBusinessDetails() {
  const { id } = useParams();
  const business = businesses.find(
    (b) => b.id === Number(id)
  );

  if (!business) {
    return <p>Business not found.</p>;
  }

  return (
    <div className="bg-white border rounded-xl p-6 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">
        Business Details
      </h1>

      <div className="space-y-3 text-gray-700">
        <p className="flex items-center gap-2">
          <Building2 size={18} /> {business.name}
        </p>
        <p className="flex items-center gap-2">
          <User size={18} /> Owner: {business.owner}
        </p>
        <p className="flex items-center gap-2">
          <Phone size={18} /> {business.phone}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={18} /> {business.location}
        </p>
        <p>
          Status:{" "}
          <b
            className={
              business.status === "Verified"
                ? "text-green-600"
                : business.status === "Blocked"
                ? "text-red-600"
                : "text-yellow-600"
            }
          >
            {business.status}
          </b>
        </p>
      </div>
    </div>
  );
}
