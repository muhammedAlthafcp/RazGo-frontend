import { Link } from "react-router-dom";
import { User, CheckCircle, Star } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="mt-20">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-500 mt-2">
          Start earning or hiring in just 3 simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid gap-6 md:grid-cols-3">

        {/* STEP 1 */}
        <Link to="/userprofile" className="group">
          <div className="bg-white p-8 rounded-xl border shadow-sm text-center 
                          hover:shadow-lg hover:border-green-600 transition">
            <User
              size={42}
              className="mx-auto mb-5 text-blue-600 group-hover:scale-110 transition"
            />
            <h3 className="font-semibold text-lg">
              Create Your Profile
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Tell us about your skills and availability
            </p>
          </div>
        </Link>

        {/* STEP 2 */}
        <Link to="/students/match" className="group">
          <div className="bg-white p-8 rounded-xl border shadow-sm text-center 
                          hover:shadow-lg hover:border-green-600 transition">
            <CheckCircle
              size={42}
              className="mx-auto mb-5 text-green-600 group-hover:scale-110 transition"
            />
            <h3 className="font-semibold text-lg">
              Get Matched
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              We connect you with nearby job opportunities
            </p>
          </div>
        </Link>

        {/* STEP 3 */}
        <Link to="/students/start" className="group">
          <div className="bg-white p-8 rounded-xl border shadow-sm text-center 
                          hover:shadow-lg hover:border-green-600 transition">
            <Star
              size={42}
              className="mx-auto mb-5 text-yellow-500 group-hover:scale-110 transition"
            />
            <h3 className="font-semibold text-lg">
              Start Working
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Get paid for your work and build experience
            </p>
          </div>
        </Link>

      </div>
    </section>
  );
}
