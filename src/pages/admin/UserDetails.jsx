import { useParams } from "react-router-dom";
import { User, Phone, MapPin, Briefcase } from "lucide-react";

/* TEMP DATA */
const users = [
  {
    id: 1,
    name: "Rahul K",
    phone: "9876543210",
    place: "Kozhikode",
    job: "Cashier",
    status: "Active",
  },
  {
    id: 2,
    name: "Ameen P",
    phone: "9876501234",
    place: "Malappuram",
    job: "Delivery Partner",
    status: "Blocked",
  },
];

export default function AdminUserDetails() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <p>User not found.</p>;

  return (
    <div className="bg-white border rounded-xl p-6 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">
        User Details
      </h1>

      <div className="space-y-3 text-gray-700">
        <p className="flex items-center gap-2">
          <User size={18} /> {user.name}
        </p>
        <p className="flex items-center gap-2">
          <Phone size={18} /> {user.phone}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={18} /> {user.place}
        </p>
        <p className="flex items-center gap-2">
          <Briefcase size={18} /> {user.job}
        </p>
        <p>
          Status:{" "}
          <b className={user.status === "Active" ? "text-green-600" : "text-red-600"}>
            {user.status}
          </b>
        </p>
      </div>
    </div>
  );
}
