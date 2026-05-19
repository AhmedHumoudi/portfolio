import Image from "next/image";

export default function Experience() {
  return (
    <section
      id="experience"
      className="text-slate-900 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-6xl font-bold mb-12 text-slate-900">
          Professional Experience
        </h2>

        <div className="space-y-6">

          {/* INTERN */}
          <div className="border border-slate-400/60 rounded-2xl p-8 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition flex gap-6">

            {/* LOGO */}
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src="/images/hiryo.jpg"
                alt="Hiryo"
                width={64}
                height={64}
                className="rounded-lg object-contain"
              />
            </div>

            {/* TEXT */}
            <div>

              <h3 className="text-4xl font-semibold text-slate-900">
                Mechatronics Engineer Intern
              </h3>

              <p className="text-2xl text-slate-500 mt-2">
                Hiryo
              </p>

              <p className="text-xl text-slate-400 mt-1">
                Cairo, Egypt | 02/2026 – 07/2026
              </p>

              <p className="text-slate-600 text-3xl leading-10 mt-6">
                Designed and developed a Bluetooth-based alarm and tracking device
                with real-time alert and location features, integrating embedded
                hardware, firmware, and mobile connectivity to deliver a reliable
                end-to-end system.
              </p>

            </div>
          </div>

          {/* LAB ASSISTANT */}
          <div className="border border-slate-400/60 rounded-2xl p-8 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition flex gap-6">

            {/* LOGO */}
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src="/images/giu.png"
                alt="GIU"
                width={64}
                height={64}
                className="rounded-lg object-contain"
              />
            </div>

            {/* TEXT */}
            <div>

              <h3 className="text-4xl font-semibold text-slate-900">
                Physics Lab Assistant
              </h3>

              <p className="text-2xl text-slate-500 mt-2">
                German International University
              </p>

              <p className="text-xl text-slate-400 mt-1">
                Cairo, Egypt | 02/2024 – 06/2024
              </p>

              <p className="text-slate-600 text-3xl leading-10 mt-6">
                Conducted hands-on laboratory supervision and technical guidance,
                assisting students in experimental procedures and the practical
                application of theoretical physics concepts.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}