import eponixImg from '../assets/eponix-digital.jpg'
import cassmoImg from '../assets/cassmo-homes.png'
import fashionImg from '../assets/fashion-store.jpg'
import amakaImg from '../assets/amaka-beauty.jpg'
import multipreneurImg from '../assets/multi-preneur.jpg'
import realtorImg from '../assets/mr-multipreneur-realtor.jpg'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import TiltCard from './TiltCard'

const projects = [
  {
    img: eponixImg,
    name: 'Eponix Digital',
    tags: ['Next.js', 'TypeScript', 'Prisma ORM', 'Paystack API', 'Tailwind CSS'],
    desc: 'Full-stack business infrastructure and corporate compliance platform for CAC business filings, trademark registration, Paystack payment verification, and real-time application tracking.',
    highlights: [
      'Secure Paystack checkout with instant payment verification',
      'Automated CAC filing intake and document tracking portal',
      'End-to-end type safety using Next.js, TypeScript & Prisma ORM',
    ],
    link: 'https://harrison-mosco.vercel.app/',
    github: 'https://github.com/dev-anna-life/harrison-mosco',
    featured: true,
  },
  {
    img: cassmoImg,
    name: 'Cassmo Homes',
    tags: ['Next.js', 'PostgreSQL', 'Prisma ORM', 'NextAuth', 'Tailwind CSS'],
    desc: 'Full-stack luxury real estate platform built with Next.js, PostgreSQL & Prisma ORM. Features secure authentication, referral tracking, and dynamic property showcase.',
    highlights: [
      'PostgreSQL & Prisma ORM database models for luxury properties',
      'User authentication paired with custom referral tracking logic',
      'Fast responsive property showcase with filtered queries',
    ],
    link: 'https://cassmo-homes.vercel.app/',
    github: 'https://github.com/dev-anna-life/cassmo-homes',
    featured: true
  },
  {
    img: fashionImg,
    name: 'Fashion Store',
    tags: ['React', 'Node.js / REST API', 'Tailwind CSS', 'State Management'],
    desc: 'Dynamic e-commerce web platform with persistent cart state, responsive product catalog, and REST API integration for modern fashion retail.',
    highlights: [
      'Persistent client-side shopping cart with real-time counters',
      'Connected REST API endpoints for dynamic catalog browsing',
      'Mobile-first checkout flow optimized for higher conversions',
    ],
    link: 'https://fashion-store-six-ivory.vercel.app/',
    github: 'https://github.com/dev-anna-life/Fashion-Store',
  },
  {
    img: realtorImg,
    name: 'MrMultipreneur Realtor',
    tags: ['Next.js', 'Node.js API Routes', 'Nodemailer', 'Tailwind CSS'],
    desc: 'Modern real estate booking platform built with Next.js featuring automated inspection bookings dispatched via Nodemailer backend API routes.',
    highlights: [
      'Direct backend inspection booking dispatch via Nodemailer',
      'Custom form validation with real-time feedback states',
      'Production-deployed Next.js architecture with clean SEO',
    ],
    link: 'https://mr-multipreneur-realtor-6779.vercel.app/',
    github: 'https://github.com/dev-anna-life/mr-multipreneur-realtor',
  },
  {
    img: amakaImg,
    name: 'Amaka Beauty Empire',
    tags: ['React', 'Tailwind CSS', 'UI/UX Design'],
    desc: 'Glowing beauty brand web showcase with elegant product catalogs, mobile-optimized navigation, and smooth brand aesthetic.',
    highlights: [
      'Sub-second asset loading and refined visual presentation',
      'Direct customer ordering route linked to WhatsApp channel',
      'Mobile-friendly product catalog with smooth interactions',
    ],
    link: 'https://amaka-beauty-empire.vercel.app/',
    github: 'https://github.com/dev-anna-life/Amaka-Beauty-Empire',
  },
  {
    img: multipreneurImg,
    name: 'Multipreneur',
    tags: ['JavaScript', 'Tailwind CSS', 'Responsive UI'],
    desc: 'Responsive multi-service business landing page engineered for high conversion with fluid Tailwind layouts.',
    highlights: [
      'Structured conversion funnels for multi-service offerings',
      'Clean semantic markup ensuring cross-browser reliability',
      'Ultra-lightweight footprint with zero extraneous dependencies',
    ],
    link: 'https://dev-anna-life.github.io/Multi-Preneur/',
    github: 'https://github.com/dev-anna-life/Multi-Preneur',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-forest-deep text-cream py-20 px-8 md:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <div className="reveal flex justify-between items-end mb-14">
          <div>
            <p className="text-brand-green text-xs font-semibold uppercase tracking-[0.22em] mb-3">Portfolio</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-cream leading-tight">
              Featured Projects
            </h2>
          </div>
          <a href="https://github.com/dev-anna-life" target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 border border-cream/30 text-cream px-5 py-2 rounded-full text-sm font-semibold hover:bg-cream hover:text-forest-deep transition-all duration-200 cursor-pointer">
            <FaGithub /> View GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <TiltCard key={p.name}>
              <div
                className={`group glass rounded-2xl overflow-hidden reveal stagger-${(i % 4) + 1} h-full flex flex-col justify-between relative border border-cream/15 hover:border-brand-green shadow-card hover:shadow-2xl transition-all duration-300`}>
                {p.featured && (
                  <span className="absolute top-3 right-3 z-10 bg-brand-green text-forest-deep text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Featured
                  </span>
                )}
                <div>
                  <div className="relative overflow-hidden bg-forest-surface">
                    <img src={p.img} alt={`${p.name} project screenshot`} loading="lazy" width="400" height="288"
                      className="w-full h-52 object-cover object-top transition-all duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl text-cream mb-2.5">{p.name}</h3>
                    <div className="flex gap-2 flex-wrap mb-3.5">
                      {p.tags.map(t => (
                        <span key={t} className="text-xs font-medium bg-cream/10 text-cream/90 border border-cream/20 px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                    <p className="text-cream/70 text-sm leading-relaxed mb-4">{p.desc}</p>
                    {p.highlights && (
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-cream/10">
                        {p.highlights.map((h, hi) => (
                          <div key={hi} className="flex items-start gap-2 text-xs text-cream/80">
                            <span className="text-brand-green font-bold shrink-0 mt-0.5">✓</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-3">
                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-green text-forest-deep px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-greenDark hover:text-white transition-all duration-200 shadow-btn-glow cursor-pointer">
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-cream/20 bg-forest-surface text-cream px-4 py-2.5 rounded-lg text-sm font-semibold hover:border-brand-green hover:text-brand-green transition-all duration-200 shadow-sm cursor-pointer">
                    <FaGithub />
                  </a>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  )
}
