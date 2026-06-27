import { useState, useEffect } from 'react'

const NAV_LINKS = [
'Home',
'Services',
'About me',
'Skills',
'Experience',
'Portfolio',
'Contact me',
]

export default function Navbar() {
const [open, setOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)
const [active, setActive] = useState('Home')

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 20)
}

window.addEventListener('scroll', handleScroll)

return () => {
  window.removeEventListener('scroll', handleScroll)
}

}, [])

const scrollToSection = (label) => {
setOpen(false)
setActive(label)

const id = label.toLowerCase().replace(/ /g, '-')

document.getElementById(id)?.scrollIntoView({
  behavior: 'smooth',
})

}

return (
<header
className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121212]/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
> <div className="max-w-7xl mx-auto px-6 lg:px-10"> <div className="flex items-center justify-between h-20">

      {/* Logo */}
      <button
        onClick={() => scrollToSection('Home')}
        className="text-white text-2xl lg:text-3xl font-extrabold tracking-wide"
      >
        Aziz
        <span className="text-orange-500">.</span>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`transition font-medium ${
              active === item
                ? 'text-orange-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Desktop CTA */}
      <button
        onClick={() => scrollToSection('Contact me')}
        className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition duration-300"
      >
        Let's Work Together
      </button>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? '✕' : '☰'}
      </button>

    </div>
  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="lg:hidden bg-[#1a1a1a] border-t border-white/10">
      <div className="flex flex-col p-5 gap-5">

        {NAV_LINKS.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`text-left transition ${
              active === item
                ? 'text-orange-500'
                : 'text-gray-300 hover:text-orange-500'
            }`}
          >
            {item}
          </button>
        ))}

        <button
          onClick={() => scrollToSection('Contact me')}
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg mt-2 transition"
        >
          Let's Work Together
        </button>

      </div>
    </div>
  )}
</header>
)
}
