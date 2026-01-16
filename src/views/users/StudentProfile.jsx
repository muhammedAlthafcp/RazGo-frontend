import { User, Phone, Home, ImageIcon, Mail, GraduationCap, Briefcase } from "lucide-react";
import { useState, useRef } from "react";

/* FULL LOCATION DATA (KERALA + BENGALURU) */
const locationData = {
  Kerala: {
    Thiruvananthapuram: ["Kazhakoottam", "Pattom", "Karamana", "Technopark", "Sreekaryam"],
    Kollam: ["Kannanalloor", "Chinnakada", "Kundara", "Paravur", "Karunagappally"],
    Pathanamthitta: ["Adoor", "Ranni", "Thiruvalla", "Konni", "Kozhencherry"],
    Alappuzha: ["Ambalappuzha", "Cherthala", "Kayamkulam", "Haripad", "Mavelikara"],
    Kottayam: ["Pala", "Changanassery", "Ettumanoor", "Vaikom", "Kaduthuruthy"],
    Idukki: ["Thodupuzha", "Munnar", "Adimali", "Nedumkandam", "Painavu"],
    Ernakulam: ["Kakkanad", "Edappally", "Aluva", "Vytilla", "Fort Kochi", "Kaloor"],
    Thrissur: ["Guruvayoor", "Kodungallur", "Irinjalakuda", "Chalakudy", "Koratty"],
    Palakkad: ["Ottapalam", "Cherpulassery", "Chittur", "Mannarkkad", "Shoranur"],
    Malappuram: ["Manjeri", "Kottakkal", "Perinthalmanna", "Ponnani", "Tirur"],
    Kozhikode: ["Nadakkavu", "Mankavu", "Beypore", "Kottooli", "Pantheerankavu"],
    Wayanad: ["Kalpetta", "Mananthavady", "Sulthan Bathery"],
    Kannur: ["Thavakkara", "Talap", "Payyannur", "Thalassery", "Chirakkal"],
    Kasaragod: ["Kanhangad", "Nileshwar", "Uppala", "Cheruvathur"],
  },
  Bengaluru: {
    Bengaluru: [
      "Whitefield",
      "Koramangala",
      "Indiranagar",
      "Electronic City",
      "HSR Layout",
      "BTM Layout",
      "Marathahalli",
      "Hebbal",
      "Yelahanka",
      "Jayanagar",
      "JP Nagar",
      "Rajajinagar",
      "Malleshwaram",
      "Banashankari",
      "KR Puram",
      "Peenya",
      "RT Nagar",
      "MG Road",
      "Brigade Road",
      "Shivaji Nagar",
    ],
  },
};

export default function StudentProfile() {
  const fileRef = useRef(null);

  /* BASIC INFO */
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  /* LOCATION */
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [place, setPlace] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  /* EDUCATION & EXPERIENCE */
  const [education, setEducation] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [experienceDetails, setExperienceDetails] = useState("");

  /* JOB */
  const [jobType, setJobType] = useState("");

  /* PHOTO */
  const [photo, setPhoto] = useState(null);

  const jobOptions = [
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
    "Advertising Flyer Boy",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const profileData = {
      fullName,
      email,
      phone,
      age,
      gender,
      state,
      district,
      place,
      address,
      pincode,
      education,
      experienceYears,
      experienceDetails,
      jobType,
      photo,
    };

    console.log("PROFILE DATA:", profileData);
  };

  return (
    <section className="max-w-3xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-xl border">
      <h2 className="text-2xl font-bold mb-6 text-green-600">
        Create Your Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* FULL NAME */}
        <div>
          <label className="font-semibold">Full Name</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <User className="text-gray-500" />
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
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
              placeholder="you@example.com"
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

        {/* AGE */}
        <div>
          <label className="font-semibold">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            min="16"
            max="40"
            required
          />
        </div>

        {/* GENDER */}
        <div>
          <label className="font-semibold">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border rounded-lg p-3 mt-1 w-full outline-none"
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* EDUCATION */}
        <div>
          <label className="font-semibold">Education</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <GraduationCap className="text-gray-500" />
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full outline-none"
              required
            >
              <option value="">Select Education</option>
              <option>10th Pass</option>
              <option>12th Pass</option>
              <option>Diploma</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <label className="font-semibold">Experience</label>
          <div className="flex items-center gap-3 border rounded-lg p-3 mt-1">
            <Briefcase className="text-gray-500" />
            <select
              value={experienceYears}
              onChange={(e) => setExperienceYears(e.target.value)}
              className="w-full outline-none"
            >
              <option value="">Fresher</option>
              <option>0–1 Year</option>
              <option>1–2 Years</option>
              <option>2–3 Years</option>
              <option>3+ Years</option>
            </select>
          </div>
        </div>

        {/* EXPERIENCE DETAILS */}
        <textarea
          value={experienceDetails}
          onChange={(e) => setExperienceDetails(e.target.value)}
          className="border rounded-lg p-3 w-full h-24 outline-none"
          placeholder="Describe your experience (optional)"
        />

        {/* PROFILE PHOTO */}
        <div>
          <label className="font-semibold">Profile Photo</label>
          <div
            onClick={() => fileRef.current.click()}
            className="border rounded-lg p-4 mt-2 text-center bg-gray-50 cursor-pointer hover:bg-gray-100"
          >
            {photo ? (
              <img
                src={URL.createObjectURL(photo)}
                alt="Preview"
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
            ) : (
              <div className="flex flex-col items-center">
                <ImageIcon size={36} className="text-gray-500" />
                <p className="text-gray-500 mt-1">Click to upload</p>
              </div>
            )}
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold"
        >
          Create Profile
        </button>
      </form>
    </section>
  );
}
