import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PageTransition from './components/PageTransition'

export default function App() {
  useReveal()

  return (
    <>
      <PageTransition />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-bark text-cream/40 text-xs text-center py-6 tracking-wide font-sans">
        © {new Date().getFullYear()} Dev Anna · Crafted with React + Tailwind 🌿
      </footer>
    </>
  )
}