"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title:
      "Reinforcement Learning-Based Path Planning for Warehouse Robots",
    description:
      "RL-based navigation system for robots in dynamic warehouse environments.",
    images: [
      "/images/please3.png",
      "/images/RLreal.png",
      "/images/RLtraining.png",
      "/images/Rlmap.png",
    ],
    details: ["Reinforcement Learning", "Path Planning", "Simulation"],
  },
  {
    title: "Multi-Robot Task Formation",
    description:
      "Centralized ROS 2 system with formation control, path planning, and obstacle avoidance.",
    images: [
      "/images/mechaflyer.jpeg",
      "/images/realrobot.png",
      "/images/robots.jpg",
    ],
    details: [
      "ROS 2 multi-robot coordination",
      "Formation control",
      "Real-time navigation",
    ],
    special: true,
  },
  {
    title: "UR5e Pick and Place",
    description:
      "Integrated ROS 2, MoveIt 2, and RViz for robotic trajectory planning and manipulation.",
    images: ["/images/ur5e.png"],
    details: ["MoveIt 2", "UR5e simulation", "RViz visualization"],
  },
  {
    title: "PLC-Based Stepper Motor Motion Control",
    description:
      "Industrial PLC system controlling stepper motor motion and positioning.",
    images: ["/images/PLC.png", "/images/motor.png"],
    details: ["PLC programming", "Motor control", "Automation"],
  },
  {
    title: "Embedded Systems Project: Oven Control System",
    description:
      "ATmega32-based embedded system for temperature monitoring, fan control, and safety lock system.",
    images: [],
    details: ["ATmega32", "Temperature sensing", "Embedded control"],
  },
  {
    title: "Ball and Beam Control System",
    description:
      "Control system for stabilizing a ball on a beam using feedback control.",
    images: [],
    details: ["PID control", "Feedback system", "Stability analysis"],
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
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-gray-200">
          <Image
            src={project.images[imgIdx]}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={
              project.special ? "object-contain" : "object-cover"
            }
          />
        </div>

        {hasMultiple && (
          <div className="flex justify-between mt-4">
            <button
              onClick={() => prevImage(index, project.images.length)}
              className="px-5 py-2 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition"
            >
              ←
            </button>

            <button
              onClick={() => nextImage(index, project.images.length)}
              className="px-5 py-2 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition"
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
      className="bg-white text-black py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          Projects
        </h2>

        <div className="space-y-10">

          {projects.map((project, index) => {
            const isOpen = openIndex === index;

            const hasImages =
              project.images && project.images.length > 0;

            return (
              <div
                key={project.title}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:bg-gray-100 transition"
              >

                {/* HEADER */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full text-left p-8"
                >
                  <h3 className="text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-lg mt-4 leading-8">
                    {project.description}
                  </p>

                  <p className="text-gray-500 mt-4 text-base">
                    Click to view details
                  </p>
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <div className="px-8 pb-8 border-t border-gray-200">

                    <div className="space-y-8 mt-8">

                      <div>
                        <h4 className="text-2xl font-semibold mb-5">
                          Technical Details
                        </h4>

                        <ul className="space-y-3 text-gray-600 text-lg leading-8">
                          {project.details.map((d, i) => (
                            <li key={i}>• {d}</li>
                          ))}
                        </ul>
                      </div>

                      {/* IMAGES */}
                      {hasImages && (
                        <ImageSlider
                          project={project}
                          index={index}
                        />
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