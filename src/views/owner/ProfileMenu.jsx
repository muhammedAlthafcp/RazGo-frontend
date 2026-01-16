import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* AVATAR */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-green-600 text-white
                   flex items-center justify-center font-bold"
      >
        B
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-64 bg-white border
                     rounded-xl shadow-lg z-50"
        >
          {/* BUSINESS INFO */}
          <div className="p-4 border-b">
            <p className="font-semibold">RazGO Store</p>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
              <Phone size={14} /> +91 98765 43210
            </p>
          </div>

          {/* ACTIONS */}
          <div className="p-2">
            <Link
              to="/business/profile"
              className="flex items-center gap-3 px-3 py-2
                         rounded-lg hover:bg-gray-100"
            >
              <Settings size={16} />
              Edit Profile
            </Link>

            <button
              className="w-full flex items-center gap-3 px-3 py-2
                         rounded-lg hover:bg-red-50 text-red-600"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
