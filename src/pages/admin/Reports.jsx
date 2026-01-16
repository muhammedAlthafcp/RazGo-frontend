const reports = [
  {
    id: 1,
    type: "Fake Job",
    reportedBy: "Rahul K",
    target: "Delivery Partner – Fresh Mart",
  },
  {
    id: 2,
    type: "Spam User",
    reportedBy: "Business Owner",
    target: "Ameen P",
  },
];

export default function AdminReports() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Reports</h1>

      <div className="bg-white border rounded-xl">
        {reports.map((r) => (
          <div
            key={r.id}
            className="p-4 border-b"
          >
            <p className="font-semibold text-red-600">
              {r.type}
            </p>
            <p className="text-sm text-gray-600">
              Reported by: {r.reportedBy}
            </p>
            <p className="text-sm text-gray-500">
              Target: {r.target}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
