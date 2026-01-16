import { CheckCircle, XCircle, Briefcase } from "lucide-react";
import { useState } from "react";

/* TEMP DATA – replace with API later */
const notificationsData = [
  {
    id: 1,
    business: "Nada Shoe",
    jobTitle: "Sales Assistant",
    status: "pending", // pending | accepted | rejected
  },
  {
    id: 2,
    business: "Fresh Mart",
    jobTitle: "Cashier",
    status: "accepted",
  },
  {
    id: 3,
    business: "City Mart",
    jobTitle: "Delivery Partner",
    status: "rejected",
  },
];

export default function UserNotifications() {
  const [notifications, setNotifications] = useState(notificationsData);

  const handleResponse = (id, response) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, status: response } : n
      )
    );
  };

  return (
    <section className="max-w-4xl mx-auto mt-8 px-4">
      <div className="space-y-4">
        {notifications.length === 0 && (
          <p className="text-gray-500 text-center">
            No notifications
          </p>
        )}

        {notifications.map((n) => (
          <div
            key={n.id}
            className="bg-white border rounded-xl p-5 shadow-sm"
          >
            <p className="flex items-center gap-2 font-medium">
              <Briefcase size={18} />
              <span>
                <b>{n.business}</b> shortlisted you for{" "}
                <span className="text-green-600">
                  {n.jobTitle}
                </span>
              </span>
            </p>

            {/* ACTION BUTTONS */}
            {n.status === "pending" && (
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() =>
                    handleResponse(n.id, "accepted")
                  }
                  className="flex items-center gap-2
                             bg-green-600 hover:bg-green-700
                             text-white px-4 py-2 rounded-lg"
                >
                  <CheckCircle size={16} />
                  Accept
                </button>

                <button
                  onClick={() =>
                    handleResponse(n.id, "rejected")
                  }
                  className="flex items-center gap-2
                             bg-red-600 hover:bg-red-700
                             text-white px-4 py-2 rounded-lg"
                >
                  <XCircle size={16} />
                  Reject
                </button>
              </div>
            )}

            {/* STATUS TEXT */}
            {n.status !== "pending" && (
              <p
                className={`mt-3 font-semibold ${
                  n.status === "accepted"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                You {n.status} this job
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
