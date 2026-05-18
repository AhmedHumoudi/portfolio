import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white text-black py-16 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-12">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* EMAIL */}
          <a
            href="mailto:ahmed_aku@hotmail.com"
            className="flex flex-col items-center justify-center gap-3 p-8 border border-gray-200 rounded-2xl hover:bg-gray-100 transition"
          >
            <Mail className="w-7 h-7 text-gray-700" />

            <span className="text-lg text-gray-700">
              ahmed_aku@hotmail.com
            </span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+966597166553"
            className="flex flex-col items-center justify-center gap-3 p-8 border border-gray-200 rounded-2xl hover:bg-gray-100 transition"
          >
            <Phone className="w-7 h-7 text-gray-700" />

            <span className="text-lg text-gray-700">
              +966 597166553
            </span>
          </a>

          {/* LOCATION */}
          <div className="flex flex-col items-center justify-center gap-3 p-8 border border-gray-200 rounded-2xl hover:bg-gray-100 transition">
            <MapPin className="w-7 h-7 text-gray-700" />

            <span className="text-lg text-gray-700">
              Jeddah, Saudi Arabia
            </span>
          </div>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/ahmed-humoudi-904127317"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-8 border border-gray-200 rounded-2xl hover:bg-gray-100 transition"
          >
            <span className="text-lg text-gray-700">
              LinkedIn Profile
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}