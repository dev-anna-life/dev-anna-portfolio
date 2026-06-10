export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 px-8 md:px-16 bg-forest grid md:grid-cols-2 gap-12 items-center">

      <div>
        <div className="inline-flex items-center gap-2 bg-cream/10 text-cream text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-fadeUp">
          <span className="w-2 h-2 bg-cream rounded-full animate-pulse" />
          Available for Work
        </div>

        <h1 className="font-display font-black text-5xl md:text-6xl leading-tight text-cream tracking-tight animate-fadeUp"
          style={{ animationDelay: '0.1s' }}>
          Hi, I'm <br />
          <span className="italic text-sage">Dev Anna.</span>
          <br />
          I build the web<br />beautifully
        </h1>

        <p className="text-sage text-base leading-relaxed mt-6 mb-8 max-w-md animate-fadeUp"
          style={{ animationDelay: '0.2s' }}>
          Full-Stack Developer building modern, scalable web applications.
          I turn ideas into full-featured digital products with React, Node.js, Express & MongoDB.
        </p>

        <div className="flex gap-4 flex-wrap animate-fadeUp" style={{ animationDelay: '0.3s' }}>
          <a href="#projects"
            className="bg-cream text-forest px-7 py-3 rounded-full font-medium hover:bg-sage transition-colors duration-200">
            View My Work
          </a>
          <a href="#contact"
            className="border border-cream text-cream px-7 py-3 rounded-full font-medium hover:bg-cream hover:text-forest transition-all duration-200">
            Say Hello
          </a>
        </div>

        <div className="flex gap-10 mt-12 animate-fadeUp" style={{ animationDelay: '0.4s' }}>
          {[['4+', 'Years experience'], ['4', 'Projects deployed'], ['6+', 'Technologies']].map(([n, l]) => (
            <div key={l}>
              <div className="font-display font-black text-2xl text-cream">{n}</div>
              <div className="text-xs text-sage mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center relative animate-fadeUp" style={{ animationDelay: '0.4s' }}>
        <div className="w-72 h-80 bg-cream/10 animate-morph flex items-center justify-center text-8xl border-2 border-cream/20">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        </div>
        {[
          { label: 'React Dev', color: 'bg-sage', pos: 'top-4 -left-6', delay: '0s' },
          { label: 'Node.js', color: 'bg-canopy', pos: 'bottom-10 -right-4', delay: '0.4s' },
          { label: 'MERN Stack', color: 'bg-cream/80', pos: 'top-1/2 -left-6', delay: '0.8s' },
        ].map(chip => (
          <div key={chip.label}
            className={`absolute ${chip.pos} animate-float bg-white border border-cream/20 rounded-xl px-3 py-2 text-xs font-semibold text-forest shadow-sm flex items-center gap-2`}
            style={{ animationDelay: chip.delay }}>
            <span className={`w-2 h-2 rounded-full ${chip.color}`} />
            {chip.label}
          </div>
        ))}
      </div>
    </section>
  )
}