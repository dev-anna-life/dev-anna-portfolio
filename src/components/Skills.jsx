const skills = [
  { name: 'React & Next.js', level: 92 },
  { name: 'Node.js & Express', level: 88 },
  { name: 'PostgreSQL & Prisma', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'RESTful APIs', level: 90 },
  { name: 'React Native', level: 80 },
  { name: 'JavaScript / ES6+', level: 92 },
  { name: 'Git & Deployment', level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-forest-deep text-cream py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <p className="text-brand-green text-xs font-semibold uppercase tracking-[0.22em] mb-2">Technical Proficiency</p>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-cream mb-3">Technologies I work with</h2>
          <p className="text-cream/75 mb-12 max-w-lg text-sm sm:text-base leading-relaxed">
            Modern full-stack technologies I leverage to build scalable, high-performance web and mobile products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass rounded-xl p-5 border border-cream/15 hover:border-brand-green shadow-sm transition-all duration-200 group reveal stagger-${(i % 4) + 1}`}
            >
              <p className="text-cream font-medium text-sm mb-3 group-hover:text-brand-green transition-colors">
                {skill.name}
              </p>
              <div className="w-full bg-forest border border-cream/15 rounded-full h-2 mb-2 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-greenLight progress-bar"
                  style={{ '--progress': `${skill.level}%`, width: `${skill.level}%` }}
                />
              </div>
              <p className="text-brand-green font-semibold text-xs">{skill.level}%</p>
            </div>
          ))}
        </div>

        <h3 className="font-display font-semibold text-2xl text-cream mb-6 reveal">Core Technology Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'Next.js & React', text: 'Server-side rendering, app routing, static optimization, and modular component architecture.' },
            { name: 'Node.js & Express', text: 'Robust backend services, modular RESTful APIs, authentication middleware, and business logic.' },
            { name: 'PostgreSQL & Prisma', text: 'Relational data modeling, schema migrations, performant querying, and type safety.' },
            { name: 'Tailwind CSS', text: 'Mobile-first styling, maintainable design systems, and responsive fluid layouts.' },
            { name: 'RESTful APIs & Integrations', text: 'Clean API endpoints, transactional email pipelines, payment gateways, and third-party APIs.' },
            { name: 'Git & Deployment', text: 'Professional Git branching workflows, environment security, and continuous production hosting on Vercel.' },
          ].map((tech, i) => (
            <div key={tech.name}
              className={`glass rounded-xl p-5 border border-cream/15 hover:border-brand-green transition-all duration-200 group reveal stagger-${(i % 3) + 1}`}>
              <h4 className="font-display text-cream font-semibold text-base mb-1.5 group-hover:text-brand-green transition-colors">{tech.name}</h4>
              <p className="text-cream/70 text-xs leading-relaxed">{tech.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
