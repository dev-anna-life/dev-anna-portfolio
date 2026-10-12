import { lazy, Suspense, useState, useEffect } from 'react'
import { useReveal } from './hooks/useReveal'
import useSmoothScroll from './hooks/useSmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import BackgroundEffects from './components/BackgroundEffects'
import PageTransition from './components/PageTransition'
import { ExperienceSkeleton, ProjectsSkeleton, ContactSkeleton } from './components/Skeleton'

const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))

export default function Home() {
  useReveal()
  useSmoothScroll()

  return (
    <main className="font-body min-h-screen antialiased selection:bg-brand-green selection:text-white">
      <BackgroundEffects />
      <PageTransition />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<ExperienceSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
    </main>
  )
}
