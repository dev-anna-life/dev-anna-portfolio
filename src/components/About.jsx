import profileImg from '../assets/profile1.png'

const cards = [
  { title: 'Design-first', text: 'Beauty and usability always come together.', bg: 'bg-forest', text_: 'text-cream' },
  { title: 'Fast & Clean', text: 'Performant code without sacrificing looks.', bg: 'bg-bark', text_: 'text-cream' },
  { title: 'Responsive', text: 'Every screen size gets the same love.', bg: 'bg-cream', text_: 'text-forest' },
  { title: 'Naija-built', text: 'World-class work, proudly from Nigeria.', bg: 'bg-sage/30', text_: 'text-cream' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-16 bg-canopy">

      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

        <div className="reveal-left">
          <p className="text-sage text-xs font-bold uppercase tracking-widest mb-3">About Me</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-cream leading-tight mb-6">
            More than just<br />a developer
          </h2>
          <p className="text-cream/80 leading-relaxed mb-4">
            I'm <strong className="text-cream">Ugwuanyi Annastesia Amarachi</strong> - but the internet knows me as{' '}
            <strong className="text-sage">Dev Anna</strong>. I'm a passionate frontend developer who believes
            every website should feel delightful and every click should spark joy.
          </p>
          <p className="text-cream/70 leading-relaxed">
            When I'm not writing clean code, I'm exploring design trends, building side projects,
            and obsessing over why some buttons just <em>feel</em> better than others.
          </p>
          <div className="flex gap-10 mt-8">
            {[['3', 'Projects deployed'], ['4', 'Core technologies'], ['∞', 'Passion for UI']].map(([num, label]) => (
              <div key={label}>
                <div className="font-display font-black text-3xl text-cream">{num}</div>
                <div className="text-xs text-sage mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center reveal-right">
          <div className="relative w-72 h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-forest/40 animate-morph" style={{ borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%' }} />
            <div className="absolute inset-3 bg-cream/20 animate-morph" style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 55% 45%', animationDelay: '1.5s' }} />
            <div className="relative z-10 animate-float">
              <img src={profileImg} alt="Dev Anna"
                className="w-56 h-64 object-cover object-top rounded-3xl border-4 border-cream shadow-xl" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-md whitespace-nowrap">
                <span className="text-xs font-bold text-forest">Dev Anna</span>
              </div>
            </div>
            <div className="absolute -top-3 -right-4 bg-forest rounded-xl px-3 py-2 shadow-md animate-float z-20" style={{ animationDelay: '0.8s' }}>
              <span className="text-xs font-semibold text-cream">Frontend Dev</span>
            </div>
            <div className="absolute -bottom-6 -left-4 bg-cream text-forest rounded-xl px-3 py-2 shadow-md animate-float z-20" style={{ animationDelay: '1.2s' }}>
              <span className="text-xs font-semibold">Open to work</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <div key={card.title}
            className={`reveal stagger-${i + 1} ${card.bg} ${card.text_} rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300`}>
            <div className="font-display font-bold text-base mb-2">{card.title}</div>
            <div className="text-sm leading-relaxed opacity-80">{card.text}</div>
          </div>
        ))}
      </div>

    </section>
  )
}