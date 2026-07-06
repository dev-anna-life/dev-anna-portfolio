import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Testimonials', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setActive(id)
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-nav/90 backdrop-blur-md border-b border-dark-box">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="text-xl font-display font-bold text-text-main">
          <span className="text-primary">D</span>ev Anna
        </button>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link === 'Home' ? 'hero' : link.toLowerCase()
              return (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${
                      active === link
                        ? 'text-primary'
                        : 'text-text-body hover:text-text-main'
                    }`}
                  >
                    {link}
                    {active === link && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
          <a href="/resume.pdf" download
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-primary text-primary text-sm font-medium rounded-md hover:bg-primary hover:text-white transition-all duration-200">
            ↓ Download CV
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-text-main text-xl p-1">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-dark-card border-t border-dark-box px-4 py-4 space-y-3">
          {navLinks.map((link) => {
            const id = link === 'Home' ? 'hero' : link.toLowerCase()
            return (
              <button key={link} onClick={() => scrollTo(id)}
                className={`block w-full text-left text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                  active === link
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-body hover:bg-dark-box'
                }`}>
                {link}
              </button>
            )
          })}
          <a href="/resume.pdf" download
            className="flex items-center justify-center gap-2 mt-3 px-4 py-2.5 border border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-200">
            ↓ Download CV
          </a>
        </div>
      )}
    </nav>
  )
}
