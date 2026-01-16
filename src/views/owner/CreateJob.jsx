import {
  Briefcase,
  IndianRupee,
  Clock,
  MapPin,
  FileText,
  Users,
} from "lucide-react";
import { useState } from "react";

/* JOB OPTIONS */
const jobRoles = [
  "Cashier",
  "Retail Assistant",
  "Delivery Partner",
  "Store Helper",
  "Cafe Staff",
  "Waiter / Service Staff",
  "Office Assistant",
  "Packing & Sorting",
  "Warehouse Helper",
  "Cleaning Staff",
  "Receptionist",
  "Sales Promoter",
  "Kitchen Helper",
  "Bike Delivery",
  "Data Entry",
  "Security Assistant",
  "Event Helper",
  "Billing Staff",
  "Customer Support",
];

const jobTypes = ["Part-Time", "Full-Time", "Shift-Based", "Daily Wage"];
const workShifts = ["Morning", "Evening", "Night", "Flexible"];

export default function CreateJob() {
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [shift, setShift] = useState("");
  const [salary, setSalary] = useState("");
  const [vacancies, setVacancies] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      title,
      role,
      jobType,
      shift,
      salary,
      vacancies,
      location,
      description,
      requirements,
    };

    console.log("NEW JOB POST:", jobData);
  };

  return (
    <section className="max-w-3xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-xl border">
      <h2 className="text-2xl font-bold mb-6 text-green-600">
        Create New Job Post
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* JOB TITLE */}
        <div>
          <label className="font-semibold">Job Title</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <Briefcase className="text-gray-500" />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Cashier – Evening Shift"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* JOB ROLE */}
        <div>
          <label className="font-semibold">Job Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            required
          >
            <option value="">Select Role</option>
            {jobRoles.map((job) => (
              <option key={job}>{job}</option>
            ))}
          </select>
        </div>

        {/* JOB TYPE */}
        <div>
          <label className="font-semibold">Job Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            required
          >
            <option value="">Select Job Type</option>
            {jobTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* SHIFT */}
        <div>
          <label className="font-semibold">Work Shift</label>
          <select
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            required
          >
            <option value="">Select Shift</option>
            {workShifts.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* SALARY */}
        <div>
          <label className="font-semibold">Salary (₹)</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <IndianRupee className="text-gray-500" />
            <input
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="e.g. 8000 / month"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* VACANCIES */}
        <div>
          <label className="font-semibold">Number of Vacancies</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <Users className="text-gray-500" />
            <input
              type="number"
              min="1"
              value={vacancies}
              onChange={(e) => setVacancies(e.target.value)}
              placeholder="1"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <label className="font-semibold">Job Location</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <MapPin className="text-gray-500" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Area / City"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="font-semibold">Job Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full h-28 outline-none"
            placeholder="Explain job responsibilities..."
            required
          />
        </div>

        {/* REQUIREMENTS */}
        <div>
          <label className="font-semibold">Requirements (Optional)</label>
          <textarea
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full h-24 outline-none"
            placeholder="Experience, skills, age limit, etc."
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold"
        >
          Post Job
        </button>
      </form>
    </section>
  );
}
