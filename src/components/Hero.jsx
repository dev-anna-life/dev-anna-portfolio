import profileImg from '../assets/profile1.jpg'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJsSquare } from 'react-icons/fa'

const codeBlock = `const developer = {
  name: "Annastesia Amarachi",
  alias: "Dev Anna",
  role: "Fullstack Developer",
  location: "Nigeria",
  skills: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JavaScript"],
  status: "Available for work",
  passion: "Building high performance web apps"
}`

const techIcons = [FaReact, FaNodeJs, FaJsSquare, FaDatabase, FaCss3Alt]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">

        <div className="flex-1 fade-in-up">
          <div className="bg-dark-card border border-dark-box rounded-2xl p-6 mb-6 overflow-x-auto shadow-lg">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-text-muted text-xs ml-2 font-mono">developer.js</span>
            </div>
            <pre className="text-sm font-mono text-text-body leading-relaxed whitespace-pre-wrap">
              <code>{codeBlock}</code>
            </pre>
            <div className="flex items-center gap-2 mt-3 text-xs text-primary-accent font-mono">
              <span className="animate-codeFlicker">▌</span>
              <span className="text-text-muted">// Welcome to my portfolio</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {techIcons.map((Icon, i) => (
              <div key={i} className="w-8 h-8 rounded-lg bg-dark-box border border-dark-box flex items-center justify-center text-primary text-sm hover:border-primary transition-all duration-200">
                <Icon />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-light transition-all duration-200 shadow-btn-glow flex items-center gap-2">
              View Projects
            </button>
            <a href="/resume.pdf" download
              className="px-6 py-3 border border-dark-box text-text-main font-medium rounded-md hover:border-primary-light transition-all duration-200 flex items-center gap-2">
              Download CV
            </a>
            <div className="flex items-center gap-2 ml-2">
              {[
                { href: 'https://github.com/dev-anna-life', icon: <FaGithub /> },
                { href: 'https://www.linkedin.com/in/annastesia-amarachi-ugwuanyi-3318a3390/', icon: <FaLinkedinIn /> },
                { href: 'mailto:annastesiaugwuanyi@gmail.com', icon: <FaEnvelope /> },
              ].map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-dark-box flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-all duration-200 text-sm">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-primary opacity-20 blur-3xl animate-pulse" />
            <div className="absolute inset-0 bg-primary/10 animate-morph" style={{ borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%' }} />
            <div className="absolute inset-3 bg-primary/10 animate-morph" style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 55% 45%', animationDelay: '1.5s' }} />
            <img src={profileImg} alt="Annastesia Fullstack Developer"
              className="w-full h-full object-cover object-top rounded-full photo-glow relative z-10" />
          </div>
        </div>

      </div>
    </section>
  )
}
