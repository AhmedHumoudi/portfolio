export default function Education() {
  return (
    <section
      id="education"
      className="bg-white text-black py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          Education
        </h2>

        <div className="space-y-10">

          {/* UNIVERSITY */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 transition">

            <h3 className="text-3xl font-semibold">
              German International University (GIU)
            </h3>

            <p className="text-gray-600 mt-3 text-xl">
              Bachelor of Science – Robotics and Automation
            </p>

            <p className="text-gray-500 text-base mt-2">
              Cairo, Egypt | 09/2022 – Present
            </p>

            <div className="mt-6 space-y-4 text-gray-600 text-lg leading-8">

              <p>
                GPA:{" "}
                <span className="text-black font-semibold">
                  0.87 (German system)
                </span>{" "}
                — equivalent to{" "}
                <span className="text-black font-semibold">
                  3.85 / 4.0 (US scale)
                </span>
              </p>

              <p>
                Consistently ranked in the{" "}
                <span className="text-black font-semibold">
                  Top 20 Engineering students
                </span>{" "}
                every semester.
              </p>

              <p>
                Consistently ranked in the{" "}
                <span className="text-black font-semibold">
                  Top 5 Robotics students
                </span>{" "}
                every semester.
              </p>

              <p>
                Recipient of the{" "}
                <span className="text-black font-semibold">
                  DAAD Excellence Award
                </span>.
              </p>

            </div>
          </div>

          {/* HIGH SCHOOL */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 transition">

            <h3 className="text-3xl font-semibold">
              Global International School (Al-Kon)
            </h3>

            <p className="text-gray-600 mt-3 text-xl">
              IGCSE High School Diploma
            </p>

            <p className="text-gray-500 text-base mt-2">
              Jeddah, Saudi Arabia | 09/2019 – 06/2022
            </p>

            <div className="mt-6 space-y-4 text-gray-600 text-lg leading-8">

              <p>
                Final IGCSE Score:{" "}
                <span className="text-black font-semibold">
                  120%
                </span>
              </p>

              <p className="font-medium text-black">
                Advanced Level Subjects:
              </p>

              <ul className="list-disc list-inside text-gray-600 ml-2 space-y-1">
                <li>Mathematics (A+)</li>
                <li>Physics (A+)</li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}