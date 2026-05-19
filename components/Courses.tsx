const certificates = [
  {
    title: "Modern Robotics Foundations of Robot Motion",
    description:
      "Northwestern University, Coursera Online",
    file: "/images/rob.pdf",
  },
  {
    title: "Introduction to Artificial Intelligence",
    description:
      "IBM, Coursera Online",
    file: "/images/ai.pdf",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="text-slate-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-6xl font-bold mb-12 text-slate-900">
          Courses & Certificates
        </h2>

        <div className="space-y-6">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border border-slate-400/60 rounded-2xl p-8 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition"
            >

              <h3 className="text-4xl font-semibold text-slate-900">
                {cert.title}
              </h3>

              <p className="text-slate-600 text-3xl leading-10 mt-4">
                {cert.description}
              </p>

              <a
                href={cert.file}
                target="_blank"
                className="inline-block mt-6 px-6 py-3 text-xl border border-slate-400 rounded-xl bg-white/60 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition"
              >
                View Certificate (PDF)
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}