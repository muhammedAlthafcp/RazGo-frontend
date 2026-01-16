import {
  User,
  Phone,
  Mail,
  Building2,
  MapPin,
  Home,
  ImageIcon,
  FileText,
} from "lucide-react";
import { useState, useRef } from "react";

/* LOCATION DATA */
const locationData = {
  Kerala: {
    Ernakulam: ["Kakkanad", "Edappally", "Aluva", "Vytilla", "Fort Kochi"],
    Kozhikode: ["Nadakkavu", "Mankavu", "Beypore"],
    Thrissur: ["Guruvayoor", "Kodungallur", "Irinjalakuda"],
  },
  Bengaluru: {
    Bengaluru: [
      "Whitefield",
      "Koramangala",
      "Indiranagar",
      "Electronic City",
      "HSR Layout",
      "BTM Layout",
    ],
  },
};

export default function BusinessProfile() {
  const logoRef = useRef(null);
  const docRef = useRef(null);

  /* OWNER INFO */
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  /* BUSINESS INFO */
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [employees, setEmployees] = useState("");

  /* LOCATION */
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [place, setPlace] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  /* FILES */
  const [logo, setLogo] = useState(null);
  const [license, setLicense] = useState(null);

  const businessTypes = [
    "Shop / Retail Store",
    "Supermarket",
    "Restaurant / Cafe",
    "Hotel",
    "Warehouse",
    "Office",
    "Service Center",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const businessProfileData = {
      ownerName,
      email,
      phone,
      businessName,
      businessType,
      employees,
      state,
      district,
      place,
      address,
      pincode,
      logo,
      license,
    };

    console.log("BUSINESS PROFILE DATA:", businessProfileData);
  };

  return (
    <section className="max-w-3xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-xl border">
      <h2 className="text-2xl font-bold mb-6 text-green-600">
        Business Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* OWNER NAME */}
        <div>
          <label className="font-semibold">Owner Name</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <User className="text-gray-500" />
            <input
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="Owner full name"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="font-semibold">Email</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <Mail className="text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="business@email.com"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* PHONE */}
        <div>
          <label className="font-semibold">Phone Number</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <Phone className="text-gray-500" />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9876543210"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* BUSINESS NAME */}
        <div>
          <label className="font-semibold">Business Name</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <Building2 className="text-gray-500" />
            <input
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Shop / Company name"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* BUSINESS TYPE */}
        <div>
          <label className="font-semibold">Business Type</label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            required
          >
            <option value="">Select Business Type</option>
            {businessTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* EMPLOYEES */}
        <div>
          <label className="font-semibold">Number of Employees</label>
          <select
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
          >
            <option value="">Select</option>
            <option>1–5</option>
            <option>6–10</option>
            <option>11–25</option>
            <option>25+</option>
          </select>
        </div>

        {/* STATE */}
        <div>
          <label className="font-semibold">State</label>
          <select
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setDistrict("");
              setPlace("");
            }}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            required
          >
            <option value="">Select State</option>
            {Object.keys(locationData).map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* DISTRICT */}
        <div>
          <label className="font-semibold">District</label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            disabled={!state}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            required
          >
            <option value="">Select District</option>
            {state &&
              Object.keys(locationData[state]).map((d) => (
                <option key={d}>{d}</option>
              ))}
          </select>
        </div>

        {/* PLACE */}
        <div>
          <label className="font-semibold">Place</label>
          <select
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            disabled={!district}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            required
          >
            <option value="">Select Place</option>
            {district &&
              locationData[state][district].map((p) => (
                <option key={p}>{p}</option>
              ))}
          </select>
        </div>

        {/* ADDRESS */}
        <div>
          <label className="font-semibold">Full Address</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <Home className="text-gray-500" />
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Building, street, area"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* PINCODE */}
        <div>
          <label className="font-semibold">Pincode</label>
          <input
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            placeholder="680001"
            required
          />
        </div>

        {/* BUSINESS LOGO */}
        <div>
          <label className="font-semibold">Business Logo</label>
          <div
            onClick={() => logoRef.current.click()}
            className="border rounded-lg p-4 mt-2 bg-gray-50 cursor-pointer text-center hover:bg-gray-100"
          >
            {logo ? (
              <img
                src={URL.createObjectURL(logo)}
                className="w-24 h-24 mx-auto rounded-lg object-cover"
                alt="Logo"
              />
            ) : (
              <>
                <ImageIcon className="mx-auto text-gray-500" size={36} />
                <p className="text-gray-500 mt-1">Click to upload logo</p>
              </>
            )}
          </div>
          <input
            ref={logoRef}
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
          />
        </div>

        {/* LICENSE / ID */}
        <div>
          <label className="font-semibold">Business License / ID</label>
          <div
            onClick={() => docRef.current.click()}
            className="border rounded-lg p-4 mt-2 bg-gray-50 cursor-pointer text-center hover:bg-gray-100"
          >
            <FileText className="mx-auto text-gray-500" size={36} />
            <p className="text-gray-500 mt-1">
              {license ? license.name : "Upload document"}
            </p>
          </div>
          <input
            ref={docRef}
            type="file"
            hidden
            onChange={(e) => setLicense(e.target.files[0])}
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold"
        >
          Save Business Profile
        </button>
      </form>
    </section>
  );
}
