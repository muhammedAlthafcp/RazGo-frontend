import { Link, useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import { useState } from "react";

/* TEMP NOTIFICATIONS (replace with API later) */
const notifications = [
  {
    id: 1,
    text: "Nada Shoe accepted your shortlist",
    time: "2 min ago",
  },
  {
    id: 2,
    text: "Rahul K rejected Cashier job",
    time: "1 hour ago",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between relative">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <img
          src="/RazGologo.png"
          width={50}
          height={50}
          alt="RazGo logo"
          className="object-contain ml-3 md:ml-9 cursor-pointer"
        />
      </Link>

      {/* LINKS */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/how-it-works" className="hover:text-green-600">
          How it Works
        </Link>
        <Link to="/Alljobs" className="hover:text-green-600">
          Browse Jobs
        </Link>
        <Link to="/success-stories" className="hover:text-green-600">
          Success Stories
        </Link>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-4 relative">
        
        {/* 🔔 NOTIFICATION ICON */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative p-2 rounded-full hover:bg-gray-100"
        >
          <Bell size={22} />

          {/* Badge */}
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white
                             text-xs w-5 h-5 flex items-center justify-center
                             rounded-full">
              {notifications.length}
            </span>
          )}
        </button>

        {/* 🔽 DROPDOWN + OUTSIDE CLICK HANDLER */}
        {open && (
          <>
            {/* Outside click backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />

            {/* Dropdown */}
            <div className="absolute right-0 top-12 w-80 bg-white
                            border rounded-xl shadow-lg z-50">
              <div className="p-4 border-b font-semibold">
                Notifications
              </div>

              {notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => {
                    setOpen(false);
                    navigate("/user/notifications");
                  }}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                >
                  <p className="text-sm text-gray-800">{n.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{n.time}</p>
                </div>
              ))}

              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/user/notifications");
                }}
                className="w-full text-center py-3 text-green-600
                           font-medium hover:bg-gray-50 border-t"
              >
                View all notifications
              </button>
            </div>
          </>
        )}

        {/* LOGIN */}
        <Link
          to="/login"
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
        >
          Login
        </Link>

        {/* POST JOB */}
        <Link
          to="/createpost"
          className="px-4 py-2 bg-green-500 hover:bg-green-600
                     text-white rounded-lg transition"
        >
          Post a Job (Free)
        </Link>
      </div>
    </nav>
  );
}
