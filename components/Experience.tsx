import Image from "next/image";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white text-black py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          Professional Experience
        </h2>

        <div className="space-y-10">

          {/* INTERN */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 transition flex gap-6">

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

              <h3 className="text-3xl font-semibold">
                Mechatronics Engineer Intern
              </h3>

              <p className="text-xl text-gray-500 mt-2">
                Hiryo
              </p>

              <p className="text-gray-400 mt-1">
                Cairo, Egypt | 02/2026 – 07/2026
              </p>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                Designed and developed a Bluetooth-based alarm and tracking device
                with real-time alert and location features, integrating embedded
                hardware, firmware, and mobile connectivity to deliver a reliable
                end-to-end system.
              </p>

            </div>
          </div>

          {/* LAB ASSISTANT */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 transition flex gap-6">

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

              <h3 className="text-3xl font-semibold">
                Physics Lab Assistant
              </h3>

              <p className="text-xl text-gray-500 mt-2">
                German International University
              </p>

              <p className="text-gray-400 mt-1">
                Cairo, Egypt | 02/2024 – 06/2024
              </p>

              <p className="text-gray-600 text-lg leading-8 mt-6">
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