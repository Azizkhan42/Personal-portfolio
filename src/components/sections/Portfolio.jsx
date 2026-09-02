import { useState } from "react";
import { useInView } from "../../hooks/useInView";

import Project1 from "../../assets/images/project1.png";
import Project2 from "../../assets/images/project2.png";
import Project3 from "../../assets/images/project3.png";
import Project4 from "../../assets/images/project4.png";
import Project5 from "../../assets/images/project5.png";

const FILTERS = ["All", "React", "PHP", "Full Stack"];

const PROJECTS = [
  {
    id: 1,
    title: "ABS TOURS",
    category: "Full Stack",
    image: Project1,
    technologies: "NextJs • MongoDB • JavaScript",
    link: "https://abstours.com/",
  },
  {
    id: 2,
    title: "Personal Budget Dashboard",
    category: "PHP",
    image: Project2,
    technologies: "PHP • MySql • JavaScript",
    link: "https://github.com/Azizkhan42/Personal-budget-dashboard.git",
  },
  {
    id: 3,
    title: "Clinic Appointment System",
    category: "React",
    image: Project3,
    technologies: "React • Tailwind CSS",
    link: "https://github.com/Azizkhan42/Appointment-System.git",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "React",
    image: Project4,
    technologies: "React • Tailwind CSS",
    link: "https://azizurrehman-web.vercel.app/",
  },
  {
    id: 5,
    title: "GitHub Finder",
    category: "PHP",
    image: Project5,
    technologies: "PHP • MS-SQL Server • JavaScript",
    link: "https://github.com/Azizkhan42/School-Funfair.git",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [ref, isInView] = useInView();

  const filteredProjects =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === active);

  return (
    <section id="portfolio" ref={ref} className="py-24 lg:py-32 bg-[#121212]">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-orange-500 font-medium">My Work</span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A collection of projects showcasing my frontend, React, and
            full-stack development skills.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-lg transition ${
                active === filter
                  ? "bg-orange-500 text-white"
                  : "bg-[#1d1d1d] text-gray-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <span className="text-orange-500 text-sm">
                  {project.category}
                </span>

                <h3 className="text-white text-xl font-semibold mt-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm">
                  {project.technologies}
                </p>

                <div className="mt-5 text-orange-500 font-medium">
                  View Project →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
