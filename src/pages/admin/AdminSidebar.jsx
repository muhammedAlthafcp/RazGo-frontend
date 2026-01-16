import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Building2,
  AlertTriangle,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const base =
    "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-50 transition";
  const active = "bg-green-100 text-green-700 font-semibold";

  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-2xl font-bold text-green-600 mb-8">
        RazGO Admin
      </h2>

      <nav className="space-y-2">
        <NavLink to="/admin" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>

        <NavLink to="/admin/users" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
          <Users size={20} /> Users
        </NavLink>

        <NavLink to="/admin/businesses" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
          <Building2 size={20} /> Businesses
        </NavLink>

        <NavLink to="/admin/jobs" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
          <Briefcase size={20} /> Jobs
        </NavLink>

        <NavLink to="/admin/reports" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
          <AlertTriangle size={20} /> Reports
        </NavLink>

        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg">
          <LogOut size={20} /> Logout
        </button>
      </nav>
    </aside>
  );
}
