const certificates = [
  {
    title: "Robotics Certificate",
    description:
      "Covers ROS 2, mobile robotics, navigation, and practical system integration.",
    file: "/images/rob.pdf",
  },
  {
    title: "Artificial Intelligence Certificate",
    description:
      "Machine learning, neural networks, and reinforcement learning fundamentals.",
    file: "/images/ai.pdf",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-white text-black py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          Courses & Certificates
        </h2>

        <div className="space-y-10">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 transition"
            >

              <h3 className="text-3xl font-semibold">
                {cert.title}
              </h3>

             <p className="text-gray-600 text-lg leading-8 mt-4">
                {cert.description}
              </p>

              <a
                href={cert.file}
                target="_blank"
               className="inline-block mt-6 px-6 py-3 border border-gray-400 rounded-xl hover:bg-black hover:text-white transition"
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