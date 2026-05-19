const skills = [

  {
    category: "AI & Robotics",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "Control Systems",
      "Path Planning",
      "ROS 2",
      "MATLAB",
      "Simulink",
      "Gazebo"
      
    ],
  },
  {
    category: "Programming",
    items: [
      "PLC Programming",
      "MATLAB",
      "ROS",
      "Python",
      "Embedded C",
      "C++",
      "JavaScript",
      "React Native",
      
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
      className="text-slate-900 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-6xl font-bold mb-12 text-slate-900">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {skills.map((group) => (
            <div
              key={group.category}
              className="border border-slate-400/60 rounded-2xl p-8 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition"
            >

              <h3 className="text-3xl font-semibold mb-6 text-slate-900">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 text-xl rounded-xl border border-slate-400 text-slate-600 bg-white/60 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition"
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