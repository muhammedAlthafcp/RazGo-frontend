import { Building2, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function BusinessProfileEdit() {
  const [businessName, setBusinessName] = useState("RazGO Store");
  const [email, setEmail] = useState("business@razgo.in");
  const [phone, setPhone] = useState("+91 9876543210");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ businessName, email, phone });
  };

  return (
    <section className="max-w-3xl mx-auto mt-12 bg-white p-6 rounded-xl shadow border">
      <h2 className="text-2xl font-bold text-green-600 mb-6">
        Business Settings
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-semibold">Business Name</label>
          <div className="flex items-center gap-3 border p-3 rounded-lg mt-1">
            <Building2 className="text-gray-500" />
            <input
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="font-semibold">Email</label>
          <div className="flex items-center gap-3 border p-3 rounded-lg mt-1">
            <Mail className="text-gray-500" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="font-semibold">Phone</label>
          <div className="flex items-center gap-3 border p-3 rounded-lg mt-1">
            <Phone className="text-gray-500" />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full outline-none"
            />
          </div>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
          Save Changes
        </button>
      </form>
    </section>
  );
}
