"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Reinforcement Learning-Based Path Planning for Warehouse Robots",
    description:
      "RL-based navigation system for autonomous warehouse robots operating in dynamic environments with obstacle avoidance and adaptive path planning.",
    images: [
      "/images/please3.png",
      "/images/RLreal.png",
      "/images/RLtraining.png",
      "/images/Rlmap.png",
    ],
    details: "Implemented a Soft Actor-Critic (SAC) reinforcement learning algorithm with a complex reward system and deep neural networks. The robot platform is a mecanum-wheeled robot capable of omnidirectional movement, operating inside a simulated warehouse environment populated with moving, unknown obstacles. The system achieves real-time path planning and dynamic obstacle avoidance without prior knowledge of these obstacles. The system was further tested successfully using a real-world robot and environment implementation.",
    keywords: ["Soft Actor-Critic (SAC)", "Reinforcement Learning", "Neural Networks", "Mecanum Robot", "Omnidirectional Movement", "Warehouse Simulation and Real World Implementation", "Real-Time Path Planning", "Dynamic Obstacle Avoidance"]
  },
{
  title: "Multi-Robot Task Formation",
  description:
    "Centralized ROS 2 swarm robotics system for cooperative box pick-and-place operations using mecanum-wheeled robots with integrated forklifts.",
  images: [
    "/images/mechaflyer.jpeg",
    "/images/realrobot.png",
    "/images/robots.jpg",
    "/images/3robot.png"
  ],
  details:
    "Developed a centralized ROS 2 multi-robot coordination system enabling autonomous swarm robots to collaboratively transport and place boxes in a shared environment. The system implemented formation control, obstacle avoidance, and real-time navigation while maintaining synchronized robot movement and task execution. Micro-ROS on ESP32 modules was used for communication between the robots and the central ROS 2 system. The robots utilized mecanum wheels for omnidirectional mobility and custom forklift mechanisms for pick-and-place functionality. The system was further tested successfully using a real-world robot and environment implementation.",
  keywords: [
    "ROS 2 multi-robot coordination",
    "Formation control",
    "Obstacle avoidance",
    "Real-time navigation",
    "Micro-ROS",
    "ESP32 communication",
    "Mecanum wheeled robots",
    "Autonomous forklifts",
  ],
  special: true,
},
 {
    title: "UR5e Pick and Place",
    description:
      "ROS 2 and MATLAB-based robotic manipulation system featuring trajectory planning, object sorting, and autonomous pick-and-place operations.",
    images: ["/images/ur5e.png"],
    details:
      "Developed a ROS 2 robotic manipulation system integrating MoveIt 2 and RViz for UR5e trajectory planning, motion execution, and visualization in simulated environments. The project focused on autonomous pick-and-place operations, inverse kinematics, and smooth robotic motion planning using ROS 2 tools and motion planning pipelines.\n\nAdditionally, a separate MATLAB implementation was developed. The MATLAB system utilized inverse kinematics, trajectory planning, object classification, and autonomous sorting behaviors for different object types and colors. The robot dynamically generated smooth trajectories between grasping, scanning, weighing, and sorting positions while maintaining safe motion transitions. The implementation also included scale-based object handling, bin selection logic, and real-time pose targeting for the UR5e robotic arm.",
    keywords: [
      "ROS 2",
      "MoveIt 2",
      "RViz visualization",
      "UR5e trajectory planning",
      "MATLAB Robotics Toolbox",
      "Simulink",
      "Inverse kinematics",
      "Autonomous pick and place",
      "Object sorting system",
    ],
  },
    {
  title: "PLC-Based Stepper Motor Motion Control",
  description:
    "Developed a motion control system using a Siemens S7-1200 PLC to control a stepper motor for precise speed, direction, and position control.",
  images: ["/images/PLC.png", "/images/motor.png"],
  details:
    "Implemented a PLC-based motion control system using a Siemens S7-1200 to manage a stepper motor. The system enables precise control of speed, direction, and position through structured PLC programming and motion control function blocks. It supports both continuous motion (jogging) and accurate positional moves, demonstrating core industrial automation and motion control principles.",
  keywords: [
    "PLC Programming",
    "Siemens S7-1200",
    "Motion Control",
    "Function Blocks",
    "Stepper Motor Control",
    "Position Control",
    "Speed Control",
    "Direction Control",
    "Industrial Automation"
  ],
},
  {
    title: "Embedded Systems Project: Oven Control System",
    description:
      "ATmega32-based embedded system for temperature monitoring, fan control, and safety lock system.",
    images: [],
    details:
      "Designed and implemented a full oven control system on an ATmega32 microcontroller. The system continuously monitors internal temperature via a sensor and automatically activates a fan when a set threshold is exceeded. A safety lock mechanism prevents the oven from operating under unsafe conditions. The project involved low-level embedded C programming, interrupt handling, and peripheral interfacing including ADC for temperature reading and GPIO for actuator control.",
    keywords: [
      "Microcontroller",
      "ATmega32",
      "Embedded C",
    ],
  },
 {
    title: "Ball and Beam Control System",
    description:
      "Classic control systems challenge: stabilizing a rolling ball at a target position on a beam using real-time feedback control.",
    images: [],
    details:
      "Designed and tuned a PID controller to maintain a ball at a desired position on a freely rotating beam. The system reads the ball's position in real time and continuously adjusts the beam angle to correct any deviation from the setpoint. The project involved mathematical modeling of the system dynamics, transfer function derivation, and iterative PID tuning to achieve stable and responsive control with minimal steady-state error and overshoot.",
    keywords: [
      "PID Control",
      "Feedback Control",
      "System Modeling",
      "Transfer Function",
    ],
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [imageIndex, setImageIndex] = useState<number[]>(() =>
    projects.map(() => 0)
  );

  const nextImage = (i: number, len: number) => {
    setImageIndex((prev) => {
      const copy = [...prev];
      copy[i] = (copy[i] + 1) % len;
      return copy;
    });
  };

  const prevImage = (i: number, len: number) => {
    setImageIndex((prev) => {
      const copy = [...prev];
      copy[i] = (copy[i] - 1 + len) % len;
      return copy;
    });
  };

  const ImageSlider = ({
    project,
    index,
  }: {
    project: (typeof projects)[0];
    index: number;
  }) => {
    const imgIdx = imageIndex[index] ?? 0;

    if (!project.images || project.images.length === 0) return null;

    const hasMultiple = project.images.length > 1;

    return (
      <div className="relative w-full">
      <div className="relative w-full h-[200px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-300">
          <Image
            src={project.images[imgIdx]}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          />
        </div>

        {hasMultiple && (
          <div className="flex justify-between mt-4">
            <button
              onClick={() => prevImage(index, project.images.length)}
              className="px-6 py-2.5 text-xl border border-slate-400 rounded-xl bg-white/60 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition"
            >
              ←
            </button>

            <button
              onClick={() => nextImage(index, project.images.length)}
              className="px-6 py-2.5 text-xl border border-slate-400 rounded-xl bg-white/60 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition"
            >
              →
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="text-slate-900 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-6xl font-bold mb-12 text-slate-900">
          Projects
        </h2>

        <div className="space-y-6">

          {projects.map((project, index) => {
            const isOpen = openIndex === index;
            const hasImages = project.images && project.images.length > 0;

            return (
              <div
                key={project.title}
                className="border border-slate-400/60 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm hover:bg-white/90 transition"
              >

                {/* HEADER */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-4xl font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <span
                      className="text-3xl text-slate-400 mt-1 flex-shrink-0 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      ↓
                    </span>
                  </div>

                  <p className="text-slate-600 text-3xl mt-4 leading-10">
                    {project.description}
                  </p>

                  <p className="text-slate-400 mt-4 text-xl">
                    {isOpen ? "Hide details" : "Click to view details"}
                  </p>
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <div className="px-8 pb-8 border-t border-slate-300">
                    <div className="space-y-8 mt-8">

                      {/* IN-DEPTH TEXT */}
                      <p className="text-slate-600 text-3xl leading-10">
                        {project.details}
                      </p>

                      {/* KEYWORD PILLS */}
                      <div className="flex flex-wrap gap-3">
                        {project.keywords.map((k, i) => (
                          <span
                            key={i}
                            className="text-lg px-4 py-2 rounded-full bg-slate-200/80 text-slate-600 border border-slate-300"
                          >
                            {k}
                          </span>
                        ))}
                      </div>

                      {/* IMAGES */}
                      {hasImages && (
                        <ImageSlider project={project} index={index} />
                      )}

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}