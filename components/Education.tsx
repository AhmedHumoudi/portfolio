export default function Education() {
  return (
    <section
      id="education"
      className="text-slate-900 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-6xl font-bold mb-12 text-slate-900">
          Education
        </h2>

        <div className="space-y-6">

          {/* UNIVERSITY */}
          <div className="border border-slate-400/60 rounded-2xl p-8 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition">

            <h3 className="text-4xl font-semibold text-slate-900">
              German International University (GIU)
            </h3>

            <p className="text-slate-600 mt-3 text-2xl">
              Bachelor of Science – Robotics and Automation
            </p>

            <p className="text-slate-400 text-xl mt-2">
              Cairo, Egypt | 09/2022 – Present
            </p>

            <div className="mt-6 space-y-4 text-slate-600 text-3xl leading-10">

              <p>
                GPA:{" "}
                <span className="text-slate-900 font-semibold">
                  0.87 (German system)
                </span>{" "}
                — equivalent to{" "}
                <span className="text-slate-900 font-semibold">
                  3.85 / 4.0 (US scale)
                </span>
              </p>

              <p>
                Consistently ranked in the{" "}
                <span className="text-slate-900 font-semibold">
                  Top 20 Engineering students
                </span>{" "}
                every semester.
              </p>

              <p>
                Consistently ranked in the{" "}
                <span className="text-slate-900 font-semibold">
                  Top 5 Robotics students
                </span>{" "}
                every semester.
              </p>

              <p>
                Recipient of the{" "}
                <span className="text-slate-900 font-semibold">
                  DAAD Excellence Award
                </span>.
              </p>

            </div>
          </div>

          {/* HIGH SCHOOL */}
          <div className="border border-slate-400/60 rounded-2xl p-8 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition">

            <h3 className="text-4xl font-semibold text-slate-900">
              Global International School (Al-Kon)
            </h3>

            <p className="text-slate-600 mt-3 text-2xl">
              IGCSE High School Diploma
            </p>

            <p className="text-slate-400 text-xl mt-2">
              Jeddah, Saudi Arabia | 09/2019 – 06/2022
            </p>

            <div className="mt-6 space-y-4 text-slate-600 text-3xl leading-10">

              <p>
                Final IGCSE Score:{" "}
                <span className="text-slate-900 font-semibold">
                  120%
                </span>
              </p>

              <p className="font-semibold text-slate-900">
                Advanced Level Subjects:
              </p>

              <ul className="list-disc list-inside text-slate-600 ml-2 space-y-2">
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