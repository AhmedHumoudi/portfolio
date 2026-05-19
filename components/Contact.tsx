import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="text-slate-900 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-6xl font-bold mb-12 text-slate-900">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* EMAIL */}
          <a
            href="mailto:ahmed_aku@hotmail.com"
            className="flex flex-col items-center justify-center gap-4 p-8 border border-slate-400/60 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition"
          >
            <Mail className="w-10 h-10 text-slate-600" />
            <span className="text-3xl text-slate-600 leading-9">
              ahmed_aku@hotmail.com
            </span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+966597166553"
            className="flex flex-col items-center justify-center gap-4 p-8 border border-slate-400/60 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition"
          >
            <Phone className="w-10 h-10 text-slate-600" />
            <span className="text-3xl text-slate-600">
              +966 597166553
            </span>
          </a>

          {/* LOCATION */}
          <div className="flex flex-col items-center justify-center gap-4 p-8 border border-slate-400/60 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition">
            <MapPin className="w-10 h-10 text-slate-600" />
            <span className="text-3xl text-slate-600">
              Jeddah, Saudi Arabia
            </span>
          </div>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/ahmed-humoudi-904127317"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-4 p-8 border border-slate-400/60 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition"
          >
            <span className="text-3xl text-slate-600">
              LinkedIn Profile
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}