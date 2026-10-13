import profileImg from '../assets/profile1.jpg'
import { FaLayerGroup, FaShoppingCart, FaRocket } from 'react-icons/fa'

const services = [
  {
    icon: FaLayerGroup,
    title: 'Full-Stack Web Applications',
    desc: 'Custom web software engineered from schema architecture to production deployment, built for high performance and reliability.',
    deliverables: [
      'Next.js & React scalable frontend architecture',
      'REST APIs & Node.js backend workflows',
      'PostgreSQL database modeling with Prisma ORM',
    ],
    stack: 'Next.js · Node · SQL',
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce & Payment Systems',
    desc: 'High-conversion retail platforms with verified payment gateway integrations and seamless order intake workflows.',
    deliverables: [
      'Paystack payment checkout & webhook verification',
      'Persistent cart state & product catalog browsing',
      'Automated customer transaction confirmations',
    ],
    stack: 'Paystack · React · APIs',
  },
  {
    icon: FaRocket,
    title: 'Business Platforms & Portals',
    desc: 'Fast, responsive corporate platforms, client booking engines, and compliance intake portals designed to convert visitors into clients.',
    deliverables: [
      'Modern mobile-first UI with sub-second page loads',
      'Automated Nodemailer inspection & lead routing',
      'SEO-structured metadata & clean accessibility',
    ],
    stack: 'Tailwind · Next.js · UX',
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-cream text-ink py-20 px-8 md:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

          <div className="reveal-left">
            <p className="text-brand-greenDark text-xs font-semibold uppercase tracking-[0.22em] mb-3">About Me</p>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-forest leading-tight mb-5">
              Full-Stack <br /><span className="italic font-normal text-forest/80">Software Engineer</span>
            </h2>
            <p className="text-forest/90 text-base leading-relaxed mb-4">
              I'm <strong className="text-forest font-semibold">Ugwuanyi Annastesia Amarachi</strong>, known across tech as{' '}
              <strong className="text-brand-greenDark font-semibold">Dev Anna</strong>. I'm a full-stack software engineer who turns
              ideas and specifications into resilient, high-performance web and mobile products.
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              I specialize in the modern JavaScript ecosystem, building end-to-end with Next.js, React, Node.js, PostgreSQL, Prisma, and Tailwind CSS. Whether it's architecting real estate platforms with referral logic or building high-conversion e-commerce workflows, I engineer software that performs reliably under real-world conditions.
            </p>
            <div className="flex gap-10 mt-6 pt-5 border-t border-forest/10">
              {[['6+', 'Projects Deployed'], ['100%', 'Production Ready'], ['∞', 'Passion for Building']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display font-semibold text-3xl text-forest">{num}</div>
                  <div className="text-xs uppercase tracking-widest text-brand-greenDark font-medium mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center reveal-right">
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 flex items-center justify-center max-w-full">
              <div className="absolute inset-0 bg-brand-green/10 blur-2xl" />
              <div className="absolute inset-0 bg-forest/8 animate-morph" style={{ borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%' }} />
              <div className="absolute inset-3 bg-brand-green/12 animate-morph" style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 55% 45%', animationDelay: '1.5s' }} />
              <div className="relative z-10 animate-float">
                <img src={profileImg} alt="Dev Anna" loading="lazy" width="224" height="256"
                  className="w-56 h-64 object-cover object-top rounded-3xl border-4 border-white shadow-2xl" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-forest text-cream border border-forest/20 rounded-full px-4 py-2 shadow-xl whitespace-nowrap">
                  <span className="text-xs font-bold">Dev Anna</span>
                </div>
              </div>
              <div className="absolute -top-3 -right-4 bg-white border border-forest/10 rounded-xl px-3.5 py-2 shadow-lg animate-float z-20" style={{ animationDelay: '0.8s' }}>
                <span className="text-xs font-semibold text-forest">Full Stack Dev</span>
              </div>
              <div className="absolute -bottom-6 -left-4 bg-brand-green text-forest-deep rounded-xl px-3.5 py-2 shadow-xl animate-float z-20 font-bold" style={{ animationDelay: '1.2s' }}>
                <span className="text-xs">Backend & UI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Client Solutions Strip */}
        <div className="pt-10 border-t border-forest/10">
          <div className="reveal mb-10 text-center max-w-2xl mx-auto">
            <p className="text-brand-greenDark text-xs font-semibold uppercase tracking-[0.22em] mb-2">What I Deliver</p>
            <h3 className="font-display font-semibold text-3xl sm:text-4xl text-forest leading-tight">
              Services & Client Solutions
            </h3>
            <p className="text-muted text-sm sm:text-base mt-2">
              End-to-end engineering tailored for businesses, startups, and founders ready to launch reliable digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.title}
                  className={`reveal stagger-${i + 1} bg-white rounded-2xl p-6 border border-forest/10 shadow-sm hover:border-brand-green hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-forest/5 text-brand-greenDark flex items-center justify-center text-xl mb-4 group-hover:bg-brand-green group-hover:text-forest-deep transition-all duration-200">
                      <Icon />
                    </div>
                    <h4 className="font-display font-semibold text-lg text-forest mb-2">{s.title}</h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">{s.desc}</p>
                    <div className="space-y-2 mb-6">
                      {s.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-forest/85">
                          <span className="text-brand-greenDark font-bold mt-0.5">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-forest/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-greenDark">{s.stack}</span>
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-xs font-bold text-forest hover:text-brand-greenDark flex items-center gap-1 cursor-pointer"
                    >
                      Inquire →
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
