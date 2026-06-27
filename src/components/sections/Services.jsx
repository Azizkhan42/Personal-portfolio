import { useInView } from '../../hooks/useInView'
import {
FaReact,
FaWordpress,
FaCode,
FaServer,
FaRocket,
FaDatabase,
} from 'react-icons/fa'

const SERVICES = [
{
icon: FaCode,
title: 'Frontend Development',
desc: 'Responsive and modern websites built using HTML, CSS, JavaScript and Tailwind CSS.',
},
{
icon: FaReact,
title: 'React Development',
desc: 'Fast, scalable and interactive React applications with reusable components.',
},
{
icon: FaWordpress,
title: 'WordPress Development',
desc: 'Custom WordPress websites with optimized performance and SEO.',
},
{
icon: FaServer,
title: 'API Integration',
desc: 'REST API integration and dynamic data management for web applications.',
},
{
icon: FaRocket,
title: 'Landing Pages',
desc: 'High-converting landing pages focused on performance and user experience.',
},
{
icon: FaDatabase,
title: 'Firebase & Supabase',
desc: 'Authentication, databases and backend solutions using modern BaaS platforms.',
},
]

export default function Services() {
const [ref, isInView] = useInView()

return ( <section
   id="services"
   ref={ref}
   className="py-24 lg:py-32 bg-[#121212]"
 > <div className="max-w-7xl mx-auto px-6 lg:px-10">
{/* Header */}
<div
className={`text-center mb-16 transition-all duration-700 ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
> <span className="text-orange-500 font-medium">
What I Do </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
        Services
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
        I build modern, responsive and high-performance web
        applications that help businesses and individuals
        establish a strong online presence.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((service, index) => {
        const Icon = service.icon

        return (
          <div
            key={service.title}
            className={`group bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-500 ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition">
              <Icon className="text-2xl text-orange-500" />
            </div>

            <h3 className="text-white text-xl font-semibold mb-4">
              {service.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {service.desc}
            </p>
          </div>
        )
      })}
    </div>
  </div>
</section>
)
}
