import fashionImg from '../assets/fashion-store.jpg'
import amakaImg from '../assets/amaka-beauty.jpg'
import multipreneurImg from '../assets/multi-preneur.jpg'
import realtorImg from '../assets/mr-multipreneur-realtor.jpg'

const projects = [
  {
    img: fashionImg,
    name: 'Fashion Store',
    tags: ['React', 'Tailwind'],
    desc: 'A vibrant e-commerce fashion interface with product listings, cart functionality & smooth animations.',
    link: 'https://fashion-store-six-ivory.vercel.app/',
  },
  {
    img: amakaImg,
    name: 'Amaka Beauty Empire',
    tags: ['React', 'Tailwind'],
    desc: 'A glowing beauty brand website with elegant product showcases and smooth UI.',
    link: 'https://amaka-beauty-empire.vercel.app/',
  },
  {
    img: multipreneurImg,
    name: 'Multipreneur',
    tags: ['HTML', 'Tailwind', 'JavaScript'],
    desc: 'A multipreneur landing page with responsive layouts and Tailwind styling.',
    link: 'https://dev-anna-life.github.io/Multi-Preneur/',
  },
  {
    img: realtorImg,
    name: 'MrMultipreneur Realtor',
    tags: ['Next.js', 'Tailwind', 'Nodemailer'],
    desc: 'A modern real estate landing page for property inspection bookings with a sleek responsive design.',
    link: 'https://mr-multipreneur-realtor-6779.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="reveal flex justify-between items-end mb-16">
          <div>
            <p className="text-canopy text-xs font-bold uppercase tracking-widest mb-3">Projects</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-forest leading-tight">
              Things I've built
            </h2>
          </div>
          <a href="https://github.com/dev-anna-life" target="_blank" rel="noreferrer"
            className="hidden md:inline-flex border border-forest text-forest px-5 py-2 rounded-full text-sm font-medium hover:bg-forest hover:text-cream transition-all duration-200">
            View GitHub →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={p.name} href={p.link} target="_blank" rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl block reveal stagger-${i + 1}`}>
              <div className="relative overflow-hidden">
                <img src={p.img} alt={`${p.name} project screenshot`} loading="lazy" width="400" height="288"
                  className="w-full h-72 object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:blur-sm" />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/75 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display font-black text-cream text-xl mb-2">{p.name}</h3>
                  <div className="flex gap-2 flex-wrap mb-3">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs font-semibold bg-cream/20 text-cream px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <p className="text-cream/80 text-xs leading-relaxed mb-3">{p.desc}</p>
                  <span className="text-sage text-sm font-bold">View Live Demo →</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}