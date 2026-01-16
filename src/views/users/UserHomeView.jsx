import { Link } from "react-router-dom";

export default function UserHomeView() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden rounded-xl shadow-sm">
      
      {/* Background Image */}
      <img
        src="/Gemini_Generated_Image_3tt4w43tt4w43tt4.png"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        alt="Hero Banner"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white">
        
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight">
          The Easiest Way to Find Part-Time Work & Local Staff
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-xl">
          Connecting ambitious students with trusted local businesses in seconds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link
            to="/Alljobs"
            className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg text-lg font-semibold text-center"
          >
            I am a Student (Find Work)
          </Link>

          <Link
            to="/businessmanprofile"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold text-center"
          >
            I Own a Shop (Hire Staff)
          </Link>
        </div>
      </div>
    </section>
  );
}
