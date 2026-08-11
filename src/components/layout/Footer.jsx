import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaMapMarkerAlt,
FaPhoneAlt,
} from 'react-icons/fa'

export default function Footer() {
const year = new Date().getFullYear()

const scrollToSection = (id) => {
document.getElementById(id)?.scrollIntoView({
behavior: 'smooth',
})
}

return ( <footer className="bg-[#0d0d0d] border-t border-white/10"> <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

    <div className="flex flex-col items-center text-center">

      {/* Logo */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
        Aziz
        <span className="text-orange-500">.</span>
      </h2>

      {/* Tagline */}
      <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
        Building modern, responsive, and user-friendly web applications
        using  Next.js, React, JavaScript, and Tailwind CSS.
      </p>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">

        <button
          onClick={() => scrollToSection('home')}
          className="text-gray-400 hover:text-orange-500 transition"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection('services')}
          className="text-gray-400 hover:text-orange-500 transition"
        >
          Services
        </button>

        <button
          onClick={() => scrollToSection('about-me')}
          className="text-gray-400 hover:text-orange-500 transition"
        >
          About
        </button>

        <button
          onClick={() => scrollToSection('skills')}
          className="text-gray-400 hover:text-orange-500 transition"
        >
          Skills
        </button>

        <button
          onClick={() => scrollToSection('experience')}
          className="text-gray-400 hover:text-orange-500 transition"
        >
          Experience
        </button>

        <button
          onClick={() => scrollToSection('portfolio')}
          className="text-gray-400 hover:text-orange-500 transition"
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection('contact-me')}
          className="text-gray-400 hover:text-orange-500 transition"
        >
          Contact
        </button>

      </div>

      {/* Social Icons */}
      <div className="flex gap-5 mt-10">

        <a
          href="https://github.com/Azizkhan42"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="w-12 h-12 rounded-full border border-white/10 bg-[#161616] flex items-center justify-center text-xl text-gray-400 hover:text-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/aziz-ur-rehman-52500830a/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="w-12 h-12 rounded-full border border-white/10 bg-[#161616] flex items-center justify-center text-xl text-gray-400 hover:text-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:azizkhan43025@gmail.com"
          aria-label="Email"
          className="w-12 h-12 rounded-full border border-white/10 bg-[#161616] flex items-center justify-center text-xl text-gray-400 hover:text-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
        >
          <FaEnvelope />
        </a>

      </div>

      {/* Contact Information */}
      <div className="mt-10 space-y-4">

        <div className="flex items-center justify-center gap-3 text-gray-400">
          <FaEnvelope className="text-orange-500" />
          <span>azizkhan43025@gmail.com</span>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-400">
          <FaPhoneAlt className="text-orange-500" />
          <span>+92 310 9967908</span>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-400">
          <FaMapMarkerAlt className="text-orange-500" />
          <span>Peshawar, Pakistan</span>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-12">

        <h3 className="text-2xl font-semibold text-white">
          Let's Build Something Amazing Together
        </h3>

        <p className="text-gray-400 mt-3">
          Available for freelance projects, internships,
          and long-term collaborations.
        </p>

      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/10 pt-6 w-full">

        <p className="text-center text-gray-500 text-sm">
          © {year} Aziz Ur Rehman • Frontend Developer & React Specialist
        </p>

      </div>

    </div>

  </div>
</footer>
)
}
