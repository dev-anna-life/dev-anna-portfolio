import { lazy, Suspense } from 'react'
import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PageTransition from './components/PageTransition'
import { ExperienceSkeleton, SkillsSkeleton, ProjectsSkeleton, ContactSkeleton } from './components/Skeleton'

const Experience = lazy(() => import('./components/Experience'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

export default function App() {
  useReveal()

  return (
    <>
      <PageTransition />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<ExperienceSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SkillsSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <footer className="bg-bark text-cream/40 text-xs text-center py-6 tracking-wide font-sans">
        &copy; {new Date().getFullYear()} Dev Anna &middot; Crafted with React + Tailwind
      </footer>
    </>
  )
}