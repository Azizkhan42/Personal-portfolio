import { useInView } from '../../hooks/useInView'
import AzizPhoto from '../../assets/images/aziz.png'
import Resume from '../../assets/resume/Aziz-Ur-Rehman-CV.pdf'

const SKILLS = [
'Next.js',
'JavaScript',
'Tailwind CSS',
'WordPress',
'REST APIs',
'Firebase',
'Supabase',
'Git & GitHub',
]

export default function About() {
const [ref, isInView] = useInView()

return ( <section
   id="about-me"
   ref={ref}
   className="py-24 lg:py-32 bg-[#121212]"
 > <div className="max-w-7xl mx-auto px-6 lg:px-10"> <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div
        className={`transition-all duration-700 ${
          isInView
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>

          <img
            src={AzizPhoto}
            alt="Aziz Ur Rehman"
            className="relative z-10 w-full max-w-md mx-auto object-contain"
          />
        </div>
      </div>

      <div
        className={`transition-all duration-700 ${
          isInView
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-8'
        }`}
      >
        <span className="text-orange-500 font-medium">
          About Me
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
          Full-Stack Developer &
          <span className="text-orange-500">
            {' '}Next.js Specialist
          </span>
        </h2>

        <p className="text-gray-400 leading-relaxed mt-6">
          I am a Full-Stack Web Developer passionate about building
          modern, responsive, and user-friendly websites. My focus
          is creating fast, clean, and engaging web experiences
          using Next.js, React, JavaScript, and Tailwind CSS.
        </p>

        <p className="text-gray-400 leading-relaxed mt-4">
          Currently pursuing BS Software Engineering at City
          University of Science & Information Technology,
          Peshawar while continuously improving my frontend,
          backend, and full-stack development skills.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-3"
            >
              <span className="text-orange-500">✓</span>

              <span className="text-gray-300">
                {skill}
              </span>
            </div>
          ))}
        </div>

        <a
          href={Resume}
          download
          className="inline-block mt-10 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
        >
          Download CV
        </a>
      </div>

    </div>
  </div>
</section>
)
}
