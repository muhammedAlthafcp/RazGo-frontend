export default function JobCard({
  title,
  salary,
  status,
  location,
  type,
}) {
  return (
    <div className="group bg-white border rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full whitespace-nowrap">
          {status}
        </span>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-500 mt-2">
        📍 {location}
      </p>

      {/* Salary */}
      <p className="text-xl font-bold text-gray-900 mt-4">
        {salary}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">
          {type}
        </span>

        <button className="px-4 py-2 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}
