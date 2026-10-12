const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Self-Employed',
    period: '2024 to Present',
    location: 'Nigeria',
    type: 'Remote',
    desc: 'Building and delivering full stack web applications for clients across ecommerce, beauty brands, business landing pages & more. End to end development from database design to deployment.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vercel'],
    current: true,
  },
  {
    role: 'Frontend Development Trainee',
    company: 'Nanocodes Programming Limited',
    period: '2023 to 2024',
    location: 'Nsukka, Nigeria',
    type: 'On site',
    desc: 'Completed an intensive frontend development program at Nanocodes, Nsukka. Built real world projects covering HTML, CSS, JavaScript and modern frameworks. Laid the foundation for my full stack journey.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative bg-cream text-ink py-20 px-8 md:px-16 border-t border-forest/10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        <div className="reveal mb-16">
          <p className="text-brand-greenDark text-xs font-semibold uppercase tracking-[0.22em] mb-3">Career Path</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-forest leading-tight">
            My Journey
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-forest/15" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={exp.role}
                className={`relative pl-12 md:pl-24 ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} stagger-${i + 1}`}>

                <div className={`absolute left-4 md:left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${exp.current ? 'bg-forest border-forest' : 'bg-white border-forest/30'}`}>
                  {exp.current && <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />}
                </div>

                <div className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 bg-white border-forest/10 hover:border-brand-green shadow-card">

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-xl leading-tight text-forest">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold mt-0.5 text-brand-greenDark">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold px-3 py-1 rounded-full bg-forest/5 text-forest border border-forest/15">
                        {exp.period}
                      </div>
                      <div className="text-xs mt-1.5 text-muted">
                        {exp.location} · {exp.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4 text-muted">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(s => (
                      <span key={s}
                        className="text-xs px-3 py-1 rounded-full font-medium bg-cream text-forest border border-forest/10">
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
