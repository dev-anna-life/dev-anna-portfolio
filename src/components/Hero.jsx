import profileImg from '../assets/profile1.jpg'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJsSquare } from 'react-icons/fa'
import MagneticButton from './MagneticButton'

const codeBlock = `const engineer = {
  name: "Annastesia Amarachi",
  alias: "Dev Anna",
  role: "Full-Stack Software Engineer",
  location: "Nigeria",
  skills: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
  status: "Available for work",
  passion: "Building high-performance web apps"
}`

const techIcons = [FaReact, FaNodeJs, FaJsSquare, FaDatabase, FaCss3Alt]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">

        <div className="flex-1 fade-in-up">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-green mb-4">
            Full-Stack Software Engineer
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-cream mb-6">
            Building scalable, <br />
            <span className="italic font-normal text-cream/90">elegant web applications.</span>
          </h1>

          <div className="glass rounded-2xl p-6 mb-6 overflow-x-auto shadow-2xl border border-cream/15 bg-forest-surface/85">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-cream/20" />
              <span className="w-3 h-3 rounded-full bg-cream/30" />
              <span className="w-3 h-3 rounded-full bg-brand-green" />
              <span className="text-cream/50 text-xs ml-2 font-mono">engineer.js</span>
            </div>
            <pre className="text-sm font-mono text-cream leading-relaxed whitespace-pre-wrap">
              <code>{codeBlock}</code>
            </pre>
            <div className="flex items-center gap-2 mt-3 text-xs text-brand-green font-mono">
              <span className="animate-codeFlicker">▌</span>
              <span className="text-cream/60">// Production-ready web & mobile solutions</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-8 flex-wrap">
            {techIcons.map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-lg bg-forest-surface border border-cream/15 flex items-center justify-center text-cream text-base hover:border-brand-green hover:text-brand-green shadow-sm transition-all duration-200">
                <Icon />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton as="button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3.5 bg-brand-green text-forest-deep font-bold rounded-md hover:bg-brand-greenDark hover:text-white transition-all duration-200 shadow-btn-glow flex items-center gap-2 text-sm cursor-pointer">
              View Projects
            </MagneticButton>
            <MagneticButton as="a" href="/resume.pdf" download
              className="px-6 py-3.5 border border-cream/30 bg-transparent text-cream font-medium rounded-md hover:bg-cream/10 hover:border-cream transition-all duration-200 shadow-sm flex items-center gap-2 text-sm cursor-pointer">
              Download CV
            </MagneticButton>
            <div className="flex items-center gap-2.5">
              {[
                { href: 'https://github.com/dev-anna-life', icon: <FaGithub /> },
                { href: 'https://www.linkedin.com/in/annastesia-amarachi-ugwuanyi-3318a3390/', icon: <FaLinkedinIn /> },
                { href: 'mailto:annastesiaugwuanyi@gmail.com', icon: <FaEnvelope /> },
              ].map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-cream/20 bg-forest-surface flex items-center justify-center text-cream/75 hover:border-brand-green hover:text-brand-green shadow-sm transition-all duration-200 text-sm">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 max-w-full">
            <div className="absolute inset-0 bg-brand-green/15 blur-3xl animate-pulse" />
            <div className="absolute inset-0 bg-brand-green/10 animate-morph" style={{ borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%' }} />
            <div className="absolute inset-3 bg-forest-800/30 animate-morph" style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 55% 45%', animationDelay: '1.5s' }} />
            <img src={profileImg} alt="Annastesia Full-Stack Software Engineer"
              className="w-full h-full object-cover object-top rounded-full photo-glow relative z-10 border-4 border-cream/20 shadow-2xl" />
          </div>
        </div>

      </div>
    </section>
  )
}
