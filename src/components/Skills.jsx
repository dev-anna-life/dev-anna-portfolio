import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { MdDevices } from 'react-icons/md'

const skills = [
  { name: 'HTML5',             icon: FaHtml5,       color: '#E34F26', desc: 'Structures and defines web content with semantic, accessible markup.' },
  { name: 'CSS3',              icon: FaCss3Alt,     color: '#1572B6', desc: 'Styles layouts, colors, fonts, animations across all screen sizes.' },
  { name: 'JavaScript',        icon: FaJs,          color: '#F7DF1E', desc: 'Adds interactivity, logic, and dynamic behavior to web pages.' },
  { name: 'React',             icon: FaReact,       color: '#61DAFB', desc: 'Component-based library for building fast, scalable user interfaces.' },
  { name: 'Tailwind CSS',      icon: SiTailwindcss, color: '#38BDF8', desc: 'Utility-first CSS for rapid, consistent, fully responsive styling.' },
  { name: 'Responsive Design', icon: MdDevices,     color: '#a8c5a0', desc: 'Fluid layouts that look perfect on every device and screen size.' },
  { name: 'Git',               icon: FaGitAlt,      color: '#F05032', desc: 'Version control — tracks changes and keeps project history clean.' },
  { name: 'GitHub',            icon: FaGithub,      color: '#f5f0e8', desc: 'Hosts repositories, showcases work and enables team collaboration.' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-16 bg-forest">
      <div className="max-w-5xl mx-auto">

        <div className="reveal mb-16">
          <p className="text-sage text-xs font-bold uppercase tracking-widest mb-3">Skills</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-cream leading-tight">
            Tools I bring to every project
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 reveal">
          {[['1+', 'Year Experience'], ['3', 'Projects Deployed'], ['8', 'Technologies'], ['100%', 'Dedication']].map(([num, label]) => (
            <div key={label} className="border border-cream/20 rounded-2xl p-5 text-center hover:border-sage transition-all duration-300">
              <div className="font-display font-black text-3xl text-cream mb-1">{num}</div>
              <div className="text-xs mt-2 text-cream/50 font-medium">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <div key={skill.name}
                className={`group relative border border-cream/10 p-6 overflow-hidden rounded-xl reveal stagger-${i + 1} hover:-translate-y-1 transition-all duration-300`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                  style={{ background: skill.color }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                  style={{ boxShadow: `inset 0 0 0 1px ${skill.color}` }} />
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 relative z-10"
                  style={{ color: skill.color }}>
                  <Icon />
                </div>
                <h3 className="font-display font-bold text-base mb-2 relative z-10" style={{ color: skill.color }}>
                  {skill.name}
                </h3>
                <p className="text-cream/60 text-xs leading-relaxed relative z-10 hidden md:block">
                  {skill.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}