import fashionImg from '../assets/fashion-store.jpg'
import amakaImg from '../assets/amaka-beauty.jpg'
import multipreneurImg from '../assets/multi-preneur.jpg'
import realtorImg from '../assets/mr-multipreneur-realtor.jpg'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    img: fashionImg,
    name: 'Fashion Store',
    tags: ['React', 'Tailwind'],
    desc: 'A vibrant e-commerce fashion interface with product listings, cart functionality & smooth animations.',
    link: 'https://fashion-store-six-ivory.vercel.app/',
    github: 'https://github.com/dev-anna-life/Fashion-Store',
  },
  {
    img: amakaImg,
    name: 'Amaka Beauty Empire',
    tags: ['React', 'Tailwind'],
    desc: 'A glowing beauty brand website with elegant product showcases and smooth UI.',
    link: 'https://amaka-beauty-empire.vercel.app/',
    github: 'https://github.com/dev-anna-life/Amaka-Beauty-Empire',
  },
  {
    img: multipreneurImg,
    name: 'Multipreneur',
    tags: ['HTML', 'Tailwind', 'JavaScript'],
    desc: 'A multipreneur landing page with responsive layouts and Tailwind styling.',
    link: 'https://dev-anna-life.github.io/Multi-Preneur/',
    github: 'https://github.com/dev-anna-life/Multi-Preneur',
  },
  {
    img: realtorImg,
    name: 'MrMultipreneur Realtor',
    tags: ['Next.js', 'Tailwind', 'Nodemailer'],
    desc: 'A modern real estate landing page for property inspection bookings with a sleek responsive design.',
    link: 'https://mr-multipreneur-realtor-6779.vercel.app/',
    github: 'https://github.com/dev-anna-life/mr-multipreneur-realtor',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        <div className="reveal flex justify-between items-end mb-16">
          <div>
            <p className="text-primary-accent text-xs font-bold uppercase tracking-widest mb-3">Projects</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text-main leading-tight">
              Things I've built
            </h2>
          </div>
          <a href="https://github.com/dev-anna-life" target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-200">
            <FaGithub /> View GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.name}
              className={`group bg-dark-card border border-dark-box rounded-2xl overflow-hidden hover:border-primary-light transition-all duration-200 reveal stagger-${i + 1}`}>
              <div className="relative overflow-hidden">
                <img src={p.img} alt={`${p.name} project screenshot`} loading="lazy" width="400" height="288"
                  className="w-full h-52 object-cover object-top transition-all duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-text-main mb-2">{p.name}</h3>
                <div className="flex gap-2 flex-wrap mb-3">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs font-semibold bg-primary/20 text-primary px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex gap-3">
                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors duration-200">
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 border border-dark-box text-text-body px-4 py-2 rounded-lg text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-200">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
