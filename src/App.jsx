import { lazy, Suspense } from 'react'
import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import PageTransition from './components/PageTransition'
import { ExperienceSkeleton, ProjectsSkeleton, ContactSkeleton } from './components/Skeleton'

const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

export default function Home() {
  useReveal()

  return (
    <main className="bg-dark-bg min-h-screen">
      <PageTransition />
      <Navbar />
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
