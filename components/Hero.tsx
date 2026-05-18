"use client";

import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white text-black pt-28 pb-20 px-6">

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* PROFILE IMAGE */}
        <div className="w-70 h-70 md:w-90 md:h-90 rounded-full overflow-hidden border border-gray-200 mb-10 shadow-sm">

          <Image
            src="/images/me.jpeg"
            alt="Ahmed Humoudi"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />

        </div>

        {/* NAME */}
        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          Ahmed Humoudi
        </h1>

        {/* TITLE */}
        <p className="text-2xl md:text-3xl text-gray-600 mb-6">
          Robotics & Embedded Systems Engineer
        </p>

        {/* DESCRIPTION */}
        <p className="max-w-3xl text-lg md:text-xl text-gray-600 leading-9 mb-10">
          Passionate about robotics, ROS 2, embedded systems,
          control systems, and intelligent automation.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">

          <button
            onClick={() => scrollTo("projects")}
            className="px-7 py-3 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition text-lg"
          >
            Projects
          </button>

          <a
            href="/Ahmed Humoudi CV.pdf"
            download
            className="px-7 py-3 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition text-lg"
          >
            Download CV
          </a>

        </div>

      </div>
    </section>
  );
}