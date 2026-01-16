import StatsCard from "../admin/StatsCard";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: 1240 },
    { title: "Businesses", value: 320 },
    { title: "Active Jobs", value: 540 },
    { title: "Reports", value: 12 },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <StatsCard key={s.title} {...s} />
        ))}
      </div>
    </>
  );
}
