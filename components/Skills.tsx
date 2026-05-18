const skills = [
  {
    category: "Programming",
    items: [
      "Embedded C",
      "C++",
      "JavaScript",
      "Python",
      "MATLAB",
      "ROS",
      "React Native",
      "PLC Programming",
    ],
  },
  {
    category: "Design / Simulation",
    items: [
      "AutoCAD",
      "SolidWorks",
      "Fusion 360",
      "Proteus",
      "SimulIDE",
    ],
  },
  {
    category: "Electronics & Hardware",
    items: [
      "Arduino",
      "Raspberry Pi",
      "ATmega32",
      "ESP32",
    ],
  },
  {
    category: "AI & Robotics",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "Control Systems",
      "ROS 2",
      "MoveIt 2",
      "Gazebo",
      "RViz",
    ],
  },
  {
    category: "Microsoft / Documentation",
    items: ["Microsoft Word", "Excel", "PowerPoint"],
  },
  {
    category: "Languages",
    items: [
      "Arabic (Native)",
      "English (C1)",
      "German (A2)",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white text-black py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((group) => (
            <div
              key={group.category}
              className="border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 transition"
            >

              <h3 className="text-3xl font-semibold mb-6">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-4">

                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 text-base rounded-xl border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}