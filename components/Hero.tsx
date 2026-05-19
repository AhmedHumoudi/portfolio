"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-6">

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* PROFILE IMAGE */}
        <div className="w-70 h-70 md:w-90 md:h-90 rounded-full overflow-hidden border border-slate-400/60 mb-10">

          <Image
            src="/images/me.jpeg"
            alt="Ahmed Humoudi"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />

        </div>

        {/* NAME */}
        <h1 className="text-6xl md:text-8xl font-bold mb-5 text-slate-900">
          Ahmed Humoudi
        </h1>

        {/* TITLE */}
        <p className="text-3xl md:text-4xl font-bold mb-5 text-slate-600 mb-6">
          Robotics & Automation Systems Engineer
        </p>
        <p className="text-2xl md:text-3xl text-slate-600 mb-4">
  This portfolio expands on my CV, providing a more detailed view of my work, including projects, education, experience, and coursework, supported by photos and documents.
</p>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 items-center">

          <a
            href="/Ahmed Humoudi CV.pdf"
            download
            className="px-7 py-3 text-xl border border-slate-400 rounded-xl bg-white/60 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition"
          >
            Download CV
          </a>

          <a
            href="#projects"
            className="px-7 py-3 text-xl border border-slate-400 rounded-xl bg-slate-900 text-white hover:bg-slate-700 transition"
          >
            View Projects
          </a>

        </div>

      </div>
    </section>
  );
}