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
 <div className="w-30 h-30 flex-shrink-0">
  <Image
    src="/images/Mactech.png"
    alt="Mactech Automation Solutions"
    width={200}
    height={200}
    className="rounded-lg object-contain"
  />
</div>

  {/* TEXT */}
  <div>

    <h3 className="text-4xl font-semibold text-slate-900">
      Automation Engineering Intern
    </h3>

    <p className="text-2xl text-slate-500 mt-2">
      Mactech Automation Solutions
    </p>

    <p className="text-xl text-slate-400 mt-1">
      Jeddah, Saudi Arabia | 07/2026 – 08/2026
    </p>

    <p className="text-slate-600 text-3xl leading-10 mt-6">
      Gained hands-on experience in industrial automation using Siemens TIA Portal,
      programming S7-1500 PLCs and configuring ET 200SP distributed I/O systems.
      Developed and simulated PLC control logic using PLCSIM with LAD and Function
      Block programming, working with both digital and analog I/O. Developed HMI
      applications, configured PROFINET communication and hardware, and implemented
      PID control for process automation applications. Used TIA Portal monitoring
      and diagnostic tools to test, troubleshoot, and validate PLC programs.
    </p>

  </div>
</div>

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