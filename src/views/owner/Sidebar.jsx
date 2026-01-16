import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Briefcase,
  Users,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

export default function Sidebar() {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition";

  const activeClass =
    "bg-green-100 text-green-700 font-semibold";

  const navClass = ({ isActive }) =>
    isActive ? `${linkClass} ${activeClass}` : linkClass;

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="text-2xl font-bold text-green-600 mb-8">
        RazGO Business
      </h2>

      <nav className="space-y-2">
        {/* DASHBOARD */}
        <NavLink to="/business" className={navClass}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        {/* POST JOB */}
        <NavLink to="/createpost" className={navClass}>
          <PlusCircle size={20} />
          Post Job
        </NavLink>

        {/* MY JOBS */}
        <NavLink to="/business/jobs" className={navClass}>
          <Briefcase size={20} />
          My Jobs
        </NavLink>

        {/* NEW MATCHES */}
        <NavLink to="/business/new-matches" className={navClass}>
          <Users size={20} />
          New Matches
        </NavLink>

        {/* NOTIFICATIONS */}
        <NavLink to="/business/notifications" className={navClass}>
          <Bell size={20} />
          Notifications
        </NavLink>

        {/* SETTINGS */}
        <NavLink to="/business/profile" className={navClass}>
          <Settings size={20} />
          Settings
        </NavLink>

        {/* LOGOUT */}
        <button
          type="button"
          className="w-full flex items-center gap-3 px-4 py-3
                     rounded-lg text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
