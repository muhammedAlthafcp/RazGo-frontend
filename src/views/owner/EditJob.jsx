import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

/* TEMP JOB DATA (same source as MyJobs / JobApplications) */
const jobsData = [
  {
    id: 1,
    title: "Cashier – Evening Shift",
    location: "Kozhikode",
    salary: "8000",
    salaryType: "month",
    type: "Part-time",
    description:
      "Looking for a cashier for evening shift. Basic billing knowledge required.",
  },
  {
    id: 2,
    title: "Delivery Partner",
    location: "Bengaluru",
    salary: "800",
    salaryType: "day",
    type: "Flexible",
    description: "Need delivery partner with bike.",
  },
];

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobsData.find((j) => j.id === Number(id));

  const [form, setForm] = useState({
    title: job?.title || "",
    location: job?.location || "",
    salary: job?.salary || "",
    salaryType: job?.salaryType || "",
    type: job?.type || "",
    description: job?.description || "",
  });

  if (!job) {
    return (
      <div className="p-6 text-gray-500">
        Job not found.
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Job Data:", form);

    // later → API call here

    alert("Job updated successfully");
    navigate("/business/jobs");
  };

  return (
    <section className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-green-600 mb-6">
        Edit Job
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl shadow-sm p-6 space-y-6"
      >
        {/* JOB TITLE */}
        <div>
          <label className="font-semibold">Job Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border rounded-lg p-3 mt-1 w-full"
            required
          />
        </div>

        {/* LOCATION */}
        <div>
          <label className="font-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="border rounded-lg p-3 mt-1 w-full"
            required
          />
        </div>

        {/* SALARY */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Salary</label>
            <input
              type="number"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              className="border rounded-lg p-3 mt-1 w-full"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Salary Type</label>
            <select
              name="salaryType"
              value={form.salaryType}
              onChange={handleChange}
              className="border rounded-lg p-3 mt-1 w-full"
              required
            >
              <option value="">Select</option>
              <option value="day">Per Day</option>
              <option value="week">Per Week</option>
              <option value="month">Per Month</option>
            </select>
          </div>
        </div>

        {/* JOB TYPE */}
        <div>
          <label className="font-semibold">Job Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border rounded-lg p-3 mt-1 w-full"
            required
          >
            <option value="">Select</option>
            <option>Part-time</option>
            <option>Flexible</option>
            <option>Daily Payment</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="font-semibold">Job Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border rounded-lg p-3 mt-1 w-full h-32"
            required
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700
                       text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Update Job
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
