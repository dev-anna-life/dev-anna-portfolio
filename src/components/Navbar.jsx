import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 transition-all duration-300
      ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-forest/10 shadow-sm' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center">

        <a href="#hero" className="font-display font-black text-xl text-forest tracking-tight">
          Dev Anna<span className="text-sage">.</span>
        </a>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                className="text-forest/70 text-sm font-medium hover:text-forest transition-colors duration-200 relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="/resume.html" target="_blank"
            className="hidden md:inline-flex border border-forest text-forest px-5 py-2 rounded-full text-sm font-medium hover:bg-forest hover:text-cream transition-all duration-200">
            Download CV ↓
          </a>
          <a href="#contact"
            className="hidden md:inline-block bg-forest text-cream text-sm font-medium px-5 py-2 rounded-full hover:bg-canopy transition-colors duration-200">
            Let's Talk →
          </a>
          <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden text-forest text-2xl focus:outline-none">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden
        ${open ? 'max-h-[500px] py-6' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center gap-6">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}
                className="text-forest text-lg font-medium hover:text-canopy transition-colors">
                {link}
              </a>
            </li>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="bg-forest text-cream px-6 py-2 rounded-full text-sm font-medium hover:bg-canopy transition-colors">
            Let's Talk →
          </a>
          <a href="/resume.html" target="_blank" onClick={() => setOpen(false)}
            className="border border-forest text-forest px-6 py-2 rounded-full text-sm font-medium hover:bg-forest hover:text-cream transition-all duration-200">
            Download CV ↓
          </a>
        </ul>
      </div>
    </nav>
  )
}