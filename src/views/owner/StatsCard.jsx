export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold text-green-600 mt-2">
        {value}
      </h2>
    </div>
  );
}
