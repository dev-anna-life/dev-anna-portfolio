import profileImg from '../assets/profile1.jpg'
import { FaSearch, FaEnvelopeOpenText, FaAd, FaGoogle, FaCog, FaUsers, FaVideo, FaShoppingBag, FaStore } from 'react-icons/fa'

const cards = [
  { title: 'Design First', text: 'Beauty and usability always come together.' },
  { title: 'Fast & Clean', text: 'Performant code without sacrificing looks.' },
  { title: 'Responsive', text: 'Every screen size gets the same love.' },
  { title: 'Naija Built', text: 'World class work, proudly from Nigeria.' },
]

const marketingServices = [
  { icon: FaSearch, title: 'Product Research', text: 'In-depth market and competitor research to find winning products.' },
  { icon: FaEnvelopeOpenText, title: 'Email Automation', text: 'Automated email sequences for campaigns, nurture flows, and conversions.' },
  { icon: FaAd, title: 'Product Ads', text: 'High-converting product ad campaigns across multiple platforms.' },
  { icon: FaGoogle, title: 'Google Ads', text: 'Search, display, and shopping ad campaigns optimized for ROI.' },
  { icon: FaCog, title: 'Klaviyo Setup', text: 'Full Klaviyo configuration: flows, segments, integrations, and templates.' },
  { icon: FaUsers, title: 'Leads & List Building', text: 'Grow and segment high quality email and SMS lists.' },
  { icon: FaVideo, title: 'Product Video', text: 'Engaging product videos and creative assets for ads and social media.' },
  { icon: FaShoppingBag, title: 'Shopify Setup', text: 'Full Shopify store setup: themes, collections, product pages, and payment integration.' },
  { icon: FaStore, title: 'Etsy Setup', text: 'Complete Etsy shop optimization: listings, SEO, branding and store policies.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-16">

      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

        <div className="reveal-left">
          <p className="text-primary-accent text-xs font-bold uppercase tracking-widest mb-3">About Me</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-main leading-tight mb-6">
            Developer & <br /><span className="text-primary">Digital Marketer</span>
          </h2>
          <p className="text-text-body leading-relaxed mb-4">
            I'm <strong className="text-text-main">Ugwuanyi Annastesia Amarachi</strong> but the internet knows me as{' '}
<strong className="text-primary">Dev Anna</strong>. I'm a full stack developer and digital marketer who builds
high performing web applications and drives growth through data driven ad campaigns.
          </p>
          <p className="text-text-muted leading-relaxed">
            With 4+ years across the MERN stack and digital marketing, I bridge the gap between
development and conversion. I don't just build beautiful apps, I make sure they reach
the right audience through product research, paid ads, email automation, and Klaviyo powered campaigns.
          </p>
          <div className="flex gap-10 mt-8">
            {[['4', 'Projects deployed'], ['8', 'Marketing services'], ['∞', 'Passion for growth']].map(([num, label]) => (
              <div key={label}>
                <div className="font-display font-bold text-3xl text-text-main">{num}</div>
                <div className="text-xs text-primary-accent mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center reveal-right">
          <div className="relative w-64 h-72 sm:w-72 sm:h-80 flex items-center justify-center max-w-full">
            <div className="absolute inset-0 bg-primary/20 animate-morph" style={{ borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%' }} />
            <div className="absolute inset-3 bg-primary/10 animate-morph" style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 55% 45%', animationDelay: '1.5s' }} />
            <div className="relative z-10 animate-float">
              <img src={profileImg} alt="Dev Anna" loading="lazy" width="224" height="256"
                className="w-56 h-64 object-cover object-top rounded-3xl border-4 border-primary/40 shadow-xl" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-dark-card border border-dark-box rounded-full px-4 py-2 shadow-md whitespace-nowrap">
                <span className="text-xs font-bold text-primary-accent">Dev Anna</span>
              </div>
            </div>
            <div className="absolute -top-3 -right-4 bg-dark-card border border-dark-box rounded-xl px-3 py-2 shadow-md animate-float z-20" style={{ animationDelay: '0.8s' }}>
              <span className="text-xs font-semibold text-text-body">Full Stack Dev</span>
            </div>
            <div className="absolute -bottom-6 -left-4 bg-primary text-white rounded-xl px-3 py-2 shadow-md animate-float z-20" style={{ animationDelay: '1.2s' }}>
              <span className="text-xs font-semibold">Digital Marketer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {cards.map((card, i) => (
          <div key={card.title}
            className={`reveal stagger-${i + 1} glass rounded-2xl p-5 hover:border-primary-light transition-all duration-200`}>
            <div className="font-display font-bold text-base text-text-main mb-2">{card.title}</div>
            <div className="text-sm leading-relaxed text-text-muted">{card.text}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: 'Web Development',
            text: 'I build fast, responsive and modern web applications using React, Next.js, Node.js and Tailwind CSS, always focusing on clean code and great user experience.',
          },
          {
            title: 'Passion',
            text: 'I enjoy turning ideas into beautiful, functional interfaces that work perfectly on every device. Every line of code is crafted with purpose.',
          },
          {
            title: 'Mission',
            text: 'To create digital experiences that are clean, accessible, visually appealing and enjoyable to use, bridging the gap between design and conversion.',
          },
        ].map((item, i) => (
          <div key={item.title}
            className={`reveal stagger-${i + 1} glass rounded-2xl p-6 hover:border-primary-light transition-all duration-200`}>
            <h4 className="font-display font-bold text-lg text-text-main mb-2">{item.title}</h4>
            <p className="text-sm text-text-muted leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="reveal">
        <p className="text-primary-accent text-xs font-bold uppercase tracking-widest mb-3 text-center">Digital Marketing</p>
        <h3 className="font-display font-bold text-3xl md:text-4xl text-text-main leading-tight mb-8 text-center">
          Services I offer
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketingServices.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div key={svc.title}
                className={`reveal stagger-${Math.min(i + 1, 8)} glass rounded-2xl p-5 hover:border-primary-light transition-all duration-200`}>
                <div className="text-2xl text-primary mb-3">
                  <Icon />
                </div>
                <div className="font-display font-bold text-sm text-text-main mb-1">{svc.title}</div>
                <div className="text-xs text-text-muted leading-relaxed">{svc.text}</div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
