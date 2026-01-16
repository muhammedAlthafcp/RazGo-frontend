import {
  CheckCircle,
  XCircle,
  Clock,
  Phone,
  User,
} from "lucide-react";

/* TEMP DATA – replace with API later */
const notifications = [
  {
    id: 1,
    type: "shortlist",
    userName: "Nada Shoe",
    jobTitle: "Sales Assistant",
    status: "Waiting",
    phone: "9876543210",
  },
  {
    id: 2,
    type: "response",
    userName: "Rahul K",
    jobTitle: "Cashier – Evening Shift",
    status: "Accepted",
    phone: "9876501234",
  },
  {
    id: 3,
    type: "response",
    userName: "Ameen P",
    jobTitle: "Delivery Partner",
    status: "Rejected",
    phone: "9876511122",
  },
];

export default function BusinessNotifications() {
  const shortlisted = notifications.filter(
    (n) => n.type === "shortlist"
  );

  const responses = notifications.filter(
    (n) => n.type === "response"
  );

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-green-600 mb-8">
        Notifications
      </h1>

      {/* ================= SHORTLISTED USERS ================= */}
      <h2 className="text-lg font-semibold mb-4">
        Shortlisted Users
      </h2>

      <div className="bg-white border rounded-xl shadow-sm mb-10">
        {shortlisted.length === 0 && (
          <p className="p-6 text-gray-500">
            No shortlisted users waiting for response.
          </p>
        )}

        {shortlisted.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between
                       border-b p-6"
          >
            <div>
              <p className="font-semibold flex items-center gap-2">
                <User size={16} />
                {item.userName}
              </p>

              <p className="text-gray-600 text-sm">
                Job: {item.jobTitle}
              </p>

              <span className="inline-flex items-center gap-1 mt-2
                               text-yellow-700 bg-yellow-100
                               px-3 py-1 rounded-full text-sm">
                <Clock size={14} />
                Waiting for response
              </span>
            </div>

            <div className="mt-4 md:mt-0">
              <a
                href={`tel:${item.phone}`}
                className="flex items-center gap-2
                           border px-4 py-2 rounded-lg
                           hover:bg-gray-100"
              >
                <Phone size={16} />
                Call User
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ================= USER RESPONSES ================= */}
      <h2 className="text-lg font-semibold mb-4">
        User Responses
      </h2>

      <div className="bg-white border rounded-xl shadow-sm">
        {responses.length === 0 && (
          <p className="p-6 text-gray-500">
            No user responses yet.
          </p>
        )}

        {responses.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between
                       border-b p-6"
          >
            <div>
              <p className="font-semibold flex items-center gap-2">
                <User size={16} />
                {item.userName}
              </p>

              <p className="text-gray-600 text-sm">
                Job: {item.jobTitle}
              </p>

              {item.status === "Accepted" ? (
                <span className="inline-flex items-center gap-1 mt-2
                                 text-green-700 bg-green-100
                                 px-3 py-1 rounded-full text-sm">
                  <CheckCircle size={14} />
                  Accepted
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 mt-2
                                 text-red-700 bg-red-100
                                 px-3 py-1 rounded-full text-sm">
                  <XCircle size={14} />
                  Rejected
                </span>
              )}
            </div>

            {item.status === "Accepted" && (
              <div className="mt-4 md:mt-0">
                <a
                  href={`tel:${item.phone}`}
                  className="flex items-center gap-2
                             bg-green-600 hover:bg-green-700
                             text-white px-4 py-2 rounded-lg"
                >
                  <Phone size={16} />
                  Call User
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
