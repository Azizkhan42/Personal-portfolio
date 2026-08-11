import { useInView } from "../../hooks/useInView";
import { FaReact, FaJs, FaWordpress, FaFire, FaGitAlt } from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss, SiSupabase } from "react-icons/si";

const SKILLS = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "WordPress",
    icon: <FaWordpress />,
  },
  {
    name: "Firebase",
    icon: <FaFire />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
  },
];

export default function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section id="skills" ref={ref} className="py-24 lg:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-orange-500 font-medium">My Skills</span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Technologies and tools I use to build modern, responsive and
            scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.name}
              className={`group bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 hover:-translate-y-2 transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Skill */}
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>

                {/* Name */}
                <div>
                  <span className="text-white font-semibold text-lg">
                    {skill.name}
                  </span>

                  <p className="text-gray-500 text-sm mt-1">Web Development</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-500">15+</h3>
            <p className="text-gray-400 mt-2">Projects Built</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-500">2+</h3>
            <p className="text-gray-400 mt-2">Years Learning</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-500">100%</h3>
            <p className="text-gray-400 mt-2">Dedication</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
            <p className="text-gray-400 mt-2">Learning Mindset</p>
          </div>
        </div>
      </div>
    </section>
  );
}
