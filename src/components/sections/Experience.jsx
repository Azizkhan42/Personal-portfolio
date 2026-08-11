import { useInView } from '../../hooks/useInView'

const EXPERIENCES = [
  {
    year: '2023 - Present',
    title: 'BS Software Engineering',
    company: 'City University of Science & Information Technology',
    description:
      'Currently pursuing a Bachelor of Science in Software Engineering while developing strong foundations in programming, databases, software engineering, networking, and web technologies.',
  },
  {
    year: '2024 - Present',
    title: 'Full-Stack Web Development',
    company: 'Self Learning & Freelance Projects',
    description:
      'Building responsive websites and web applications using Next.js, React, JavaScript, and Tailwind CSS.',
  },
  {
    year: '2025 - Present',
    title: 'Next.js Development',
    company: 'Personal & Academic Projects',
    description:
      'Developing modern Next.js applications using reusable components, hooks, API integration, and responsive UI design.',
  },
]

export default function Experience() {
  const [ref, isInView] = useInView()

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 lg:py-32 bg-[#121212]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-orange-500 font-medium">
            My Journey
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
            Experience & Education
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            My academic journey, frontend development experience,
            and continuous learning path.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-orange-500/20"></div>

          {EXPERIENCES.map((item, index) => (
            <div
              key={index}
              className={`relative pl-14 pb-14 transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Circle */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-orange-500 border-4 border-[#121212]"></div>

              {/* Date */}
              <span className="inline-block text-orange-500 font-semibold text-sm mb-3">
                {item.year}
              </span>

              {/* Card */}
              <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1">

                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-orange-400 mt-2 font-medium">
                  {item.company}
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}