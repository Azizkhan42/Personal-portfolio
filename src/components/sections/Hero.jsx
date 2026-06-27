import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";

import AzizPhoto from "../../assets/images/hero.png";
import Resume from "../../assets/resume/Aziz-Ur-Rehman-CV.pdf";

export default function Hero() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#121212] pt-28 mt-18 lg:pt-32"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* LEFT CONTENT */}
          <div
            className={`max-w-2xl transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>

              <span className="text-sm text-orange-400">
                Available For Freelance
              </span>
            </div>

            {/* Intro */}
            <p className="text-gray-400 text-lg mb-3">Hi, I'm</p>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Aziz Ur Rehman
            </h1>

            {/* Skills Tags */}
            <div className="flex gap-3 mt-5 flex-wrap">
              <span className="px-3 py-1 text-sm bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                React.js
              </span>

              <span className="px-3 py-1 text-sm bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                Tailwind CSS
              </span>

              <span className="px-3 py-1 text-sm bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                JavaScript
              </span>
            </div>

            {/* Typewriter */}
            <div className="mt-6 min-h-[80px]">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  <Typewriter
                    words={[
                      "Front-End Developer",
                      "React.JS Developer",
                      "Web Developer",
                      "MERN Stack Developer",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
              I build modern, responsive, and user-friendly web applications
              using React, JavaScript, Tailwind CSS, and modern frontend
              technologies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/Azizkhan42"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-xl text-gray-300 hover:text-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aziz-ur-rehman-52500830a/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-xl text-gray-300 hover:text-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:azizkhan43025@gmail.com"
                className="w-12 h-12 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-xl text-gray-300 hover:text-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#portfolio"
                className="px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>

              <a
                href={Resume}
                download
                className="px-7 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-orange-500 hover:text-white transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative animate-float -mt-4 lg:-mt-10">
              {/* Orange Glow */}
              <div className="absolute inset-0 bg-orange-500/25 blur-[90px] rounded-full"></div>

              {/* Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-orange-500/20 scale-110"></div>

              {/* Image */}
              <img
                src={AzizPhoto}
                alt="Aziz Ur Rehman"
                className="relative z-10 w-[300px] sm:w-[420px] lg:w-[500px] rounded-full border-4 border-orange-500 object-cover shadow-[0_0_60px_rgba(249,115,22,0.35)]"
                style={{
                  aspectRatio: "1/1",
                  objectPosition: "center top",
                }}
              />

              {/* Top Badge */}
              <div className="absolute top-8 -right-4 bg-[#1a1a1a] border border-orange-500/30 px-4 py-2 rounded-xl shadow-lg z-20">
                <span className="text-orange-500 font-semibold text-sm">
                  React Developer
                </span>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-6 -left-4 bg-[#1a1a1a] border border-orange-500/30 px-4 py-3 rounded-xl shadow-lg z-20">
                <h4 className="text-white font-bold text-sm">Open To Work</h4>

                <p className="text-gray-400 text-xs">Freelance & Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
