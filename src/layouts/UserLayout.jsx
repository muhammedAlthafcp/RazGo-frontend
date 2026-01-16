// src/layouts/UserLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../views/common/Navbar";
import PremiumFooter from "../views/common/PremiumFooter";

export default function UserLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <PremiumFooter />
    </div>
  );
}
