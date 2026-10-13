import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/dev-anna-logo-transparent.png'

const navLinks = ['Home', 'About', 'Skills', 'Certifications', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setActive(id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1))
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-forest-deep/95 backdrop-blur-md border-b border-cream/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
          aria-label="Dev Anna Home"
        >
          <img
            src={logo}
            alt="Dev Anna Emblem"
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="flex flex-col">
            <span className="font-extrabold tracking-wider leading-none text-cream text-[15px] sm:text-[16px]">
              DEV ANNA
            </span>
            <small className="text-[7.5px] font-mono tracking-[0.22em] text-brand-green uppercase font-bold mt-0.5">
              SOFTWARE ENGINEER
            </small>
          </span>
        </button>

        <div className="flex items-center gap-6">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-cream text-xl p-1 cursor-pointer" aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const id = link === 'Home' ? 'hero' : link.toLowerCase()
              return (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`text-sm font-medium transition-colors duration-200 relative pb-1 cursor-pointer ${
                      active === link
                        ? 'text-cream font-semibold'
                        : 'text-cream/70 hover:text-cream'
                    }`}
                  >
                    {link}
                    {active === link && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green rounded-full" />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          <a
            href="/resume.pdf"
            download
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-green text-forest-deep text-sm font-bold rounded-md hover:bg-brand-greenDark hover:text-white transition-all duration-200 shadow-btn-glow"
          >
            ↓ Download CV
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-forest-deep/98 backdrop-blur-md border-t border-cream/10 shadow-2xl">
          <div className="flex flex-col items-center gap-4 px-6 py-6">
            {navLinks.map((link) => {
              const id = link === 'Home' ? 'hero' : link.toLowerCase()
              return (
                <button key={link} onClick={() => scrollTo(id)}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    active === link ? 'text-brand-green font-bold' : 'text-cream/70 hover:text-cream'
                  }`}>
                  {link}
                </button>
              )
            })}
            <a href="/resume.pdf" download
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-green text-forest-deep text-sm font-bold rounded-md hover:bg-brand-greenDark hover:text-white transition-all duration-200 shadow-btn-glow">
              ↓ Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
