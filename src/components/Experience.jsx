const experiences = [
  {
    role: 'Frontend Developer (Self-Employed)',
    company: 'Freelance',
    period: '2024 - Present',
    location: 'Nigeria',
    type: 'Remote',
    desc: 'Building and delivering custom websites and web apps for clients across different niches - e-commerce, beauty brands, and business landing pages.',
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    current: true,
  },
  {
    role: 'Frontend Development Trainee',
    company: 'Nanocodes Programming Limited',
    period: '2023 - 2024',
    location: 'Nsukka, Nigeria',
    type: 'On-site',
    desc: 'Completed an intensive frontend development program at Nanocodes, Nsukka. Built real-world projects covering HTML, CSS, JavaScript and responsive design principles.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    current: false,
  },
  {
    role: 'Self-Taught: React & Tailwind CSS',
    company: 'Independent Learning',
    period: '2024',
    location: 'Remote',
    type: 'Self-paced',
    desc: 'Independently mastered React and Tailwind CSS through documentation, project-based learning and building personal projects deployed on Vercel and GitHub Pages.',
    stack: ['React', 'Tailwind CSS', 'Git', 'GitHub'],
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="reveal mb-16">
          <p className="text-canopy text-xs font-bold uppercase tracking-widest mb-3">Experience</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-forest leading-tight">
            My journey so far
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-forest/15" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={exp.role}
                className={`relative pl-16 md:pl-24 ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} stagger-${i + 1}`}>

                <div className={`absolute left-4 md:left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${exp.current ? 'bg-forest border-forest' : 'bg-white border-forest/40'}`}>
                  {exp.current && <span className="w-2 h-2 bg-cream rounded-full animate-pulse" />}
                </div>

                <div className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-md
                  ${exp.current ? 'bg-forest border-forest' : 'bg-white border-forest/10'}`}>

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className={`font-display font-bold text-lg leading-tight ${exp.current ? 'text-cream' : 'text-forest'}`}>
                        {exp.role}
                      </h3>
                      <p className={`text-sm font-medium mt-0.5 ${exp.current ? 'text-sage' : 'text-canopy'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-semibold px-3 py-1 rounded-full
                        ${exp.current ? 'bg-cream/20 text-cream' : 'bg-forest/5 text-forest'}`}>
                        {exp.period}
                      </div>
                      <div className={`text-xs mt-1.5 ${exp.current ? 'text-sage' : 'text-forest/50'}`}>
                        {exp.location} · {exp.type}
                      </div>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${exp.current ? 'text-cream/80' : 'text-forest/70'}`}>
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(s => (
                      <span key={s}
                        className={`text-xs px-3 py-1 rounded-full font-medium
                          ${exp.current ? 'bg-cream/15 text-cream' : 'bg-forest/8 text-forest border border-forest/15'}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}