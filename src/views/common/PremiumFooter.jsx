import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function PremiumFooter() {
  return (
    <footer className="mt-20 bg-white border-t pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">

        {/* BRAND / ABOUT */}
        <div>
          <h2 className="text-2xl font-extrabold">
            <span className="text-blue-600">Raz</span>
            <span className="text-green-600">GO</span>
          </h2>

          <p className="text-gray-600 mt-3">
            Find part-time work or hire trusted staff quickly. RazGO connects
            students and shops within minutes.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <Facebook
                size={22}
                className="text-green-600 hover:text-green-700 hover:scale-110 transition"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram
                size={22}
                className="text-green-600 hover:text-green-700 hover:scale-110 transition"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin
                size={22}
                className="text-green-600 hover:text-green-700 hover:scale-110 transition"
              />
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            ⭐ Trusted by 50+ Local Shops
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-green-600">Quick Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/students" className="hover:text-green-600">Student Register</Link></li>
            <li><Link to="/jobs" className="hover:text-green-600">Browse Jobs</Link></li>
            <li><Link to="/business" className="hover:text-green-600">Post a Job</Link></li>
            <li><Link to="/success-stories" className="hover:text-green-600">Success Stories</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-green-600">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/help" className="hover:text-green-600">Help Center</Link></li>
            <li><Link to="/terms" className="hover:text-green-600">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-green-600">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:text-green-600">Contact Support</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-green-600">Stay Updated</h4>
          <p className="text-gray-600">Get alerts for new jobs and features.</p>

          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-green-300 rounded-l-lg outline-none focus:border-green-600"
            />
            <button
              type="button"
              className="bg-green-600 px-4 py-2 rounded-r-lg text-white flex items-center gap-2 hover:bg-green-700 transition"
            >
              <Mail size={18} />
              Subscribe
            </button>
          </div>

          <div className="mt-6 flex gap-4">
            <img
              src="/icons/googleplay.png"
              alt="Google Play"
              className="h-10 cursor-pointer hover:scale-105 transition"
            />
            <img
              src="/icons/appstore.png"
              alt="App Store"
              className="h-10 cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} RazGO. All rights reserved.
      </div>
    </footer>
  );
}
