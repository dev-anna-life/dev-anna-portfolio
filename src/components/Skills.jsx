const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'MongoDB', level: 75 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 70 },
  { name: 'Git', level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <p className="text-primary-accent text-sm font-medium uppercase tracking-widest mb-2">Skills</p>
      <h2 className="text-4xl font-display font-bold text-text-main mb-2">Technologies I work with</h2>
      <p className="text-text-body mb-12 max-w-lg">
        I use modern technologies to build scalable and efficient web applications.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-dark-card border border-dark-box rounded-xl p-5 hover:border-primary-light transition-all duration-200 group"
          >
            <p className="text-text-main font-medium mb-3 group-hover:text-primary transition-colors">
              {skill.name}
            </p>
            <div className="w-full bg-dark-box rounded-full h-1.5 mb-1">
              <div
                className="h-1.5 rounded-full bg-primary progress-bar"
                style={{ '--progress': `${skill.level}%`, width: `${skill.level}%` }}
              />
            </div>
            <p className="text-primary-accent text-xs">{skill.level}%</p>
          </div>
        ))}
      </div>

      <h3 className="font-display font-semibold text-xl text-text-main mb-6">Technologies I use</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: 'HTML5', text: 'Semantic and accessible markup.' },
          { name: 'CSS3', text: 'Responsive layouts and animations.' },
          { name: 'JavaScript', text: 'Interactive and dynamic applications.' },
          { name: 'Tailwind CSS', text: 'Utility-first responsive design.' },
          { name: 'React', text: 'Building reusable UI components.' },
          { name: 'Git & GitHub', text: 'Version control and collaboration.' },
        ].map((tech) => (
          <div key={tech.name}
            className="bg-dark-card border border-dark-box rounded-xl p-5 hover:border-primary-light transition-all duration-200 group">
            <h4 className="text-text-main font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors">{tech.name}</h4>
            <p className="text-text-muted text-xs leading-relaxed">{tech.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
