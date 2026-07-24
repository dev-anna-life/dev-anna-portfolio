import { lazy, Suspense, useState, useEffect } from 'react'
import { useReveal } from './hooks/useReveal'
import useSmoothScroll from './hooks/useSmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import BackgroundEffects from './components/BackgroundEffects'
import PageTransition from './components/PageTransition'
import { ExperienceSkeleton, ProjectsSkeleton, ContactSkeleton } from './components/Skeleton'

const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

export default function Home() {
  useReveal()
  useSmoothScroll()

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className="bg-dark-bg text-text-body font-sans min-h-screen transition-colors duration-300">
      <BackgroundEffects />
      <PageTransition />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Suspense fallback={<ExperienceSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
    </main>
  )
}
