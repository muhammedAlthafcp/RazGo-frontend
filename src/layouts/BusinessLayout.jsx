import { Outlet } from "react-router-dom";
import Sidebar from "../views/owner/Sidebar";

export default function BusinessLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
}
