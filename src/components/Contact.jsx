import { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/dev-anna-life' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/annastesia-amarachi-ugwuanyi-3318a3390/' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://x.com/Dev_Anna20/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/devanna_22' },
  { icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@itsanna136' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "d8465d83-0f77-49bd-a9cf-c1c39ead6742",
          name: form.name,
          email: form.email,
          subject: `[Dev Anna Portfolio] ${form.subject}`,
          message: form.message
        })
      })

      const result = await response.json()
      if (result.success || response.status === 200) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setErrors({})
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputCls = (f) =>
    `px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 bg-forest-deep/80 text-cream placeholder:text-cream/40 shadow-sm
    ${errors[f] ? 'border-red-400/80 bg-red-950/20' : 'border-cream/20 focus:border-brand-green focus:ring-1 focus:ring-brand-green'}`

  return (
    <>
      <a href="https://wa.me/2348146790636" target="_blank" rel="noreferrer" title="Chat on WhatsApp" aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 hover:bg-brand-greenDark transition-all duration-200 animate-float">
        <FaWhatsapp />
      </a>

      <section id="contact" className="relative bg-forest-deep text-cream py-20 px-8 md:px-16 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12 reveal">
            <p className="text-brand-green text-xs font-semibold uppercase tracking-[0.22em] mb-3">Get in Touch</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-cream leading-tight mb-3">
              Let's create something meaningful
            </h2>
            <p className="text-cream/75 text-sm sm:text-base">Have a project, opportunity, or idea in mind? I'd love to connect.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="reveal-left glass rounded-3xl p-7 border border-cream/15 shadow-card">
              <h3 className="font-display font-semibold text-2xl text-cream mb-6">Contact Info</h3>
              <div className="space-y-5">
                <a href="mailto:annastesiaugwuanyi@gmail.com"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-forest-deep border border-cream/20 flex items-center justify-center text-cream group-hover:bg-brand-green group-hover:text-forest-deep transition-all duration-200 shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-cream/60 font-semibold uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-sm font-semibold text-cream truncate">annastesiaugwuanyi@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/2348146790636" target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-forest-deep border border-cream/20 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-200 shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div className="text-xs text-cream/60 font-semibold uppercase tracking-wider mb-0.5">WhatsApp</div>
                    <div className="text-sm font-semibold text-cream">+234 8146790636</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest-deep border border-cream/20 flex items-center justify-center text-cream shrink-0">
                    <FaGithub />
                  </div>
                  <div>
                    <div className="text-xs text-cream/60 font-semibold uppercase tracking-wider mb-0.5">GitHub</div>
                    <div className="text-sm font-semibold text-cream">dev-anna-life</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest-deep border border-cream/20 flex items-center justify-center text-cream shrink-0">
                    <FaLinkedinIn />
                  </div>
                  <div>
                    <div className="text-xs text-cream/60 font-semibold uppercase tracking-wider mb-0.5">LinkedIn</div>
                    <div className="text-sm font-semibold text-cream">Annastesia Ugwuanyi</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-cream/15 flex-wrap">
                {socials.map(s => {
                  const Icon = s.icon
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} aria-label={s.label}
                      className="w-10 h-10 rounded-full border border-cream/20 bg-forest-deep text-cream/80 text-sm flex items-center justify-center hover:-translate-y-1 hover:bg-brand-green hover:text-forest-deep hover:border-brand-green transition-all duration-200 shadow-sm cursor-pointer">
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="reveal-right glass rounded-3xl p-7 border border-cream/15 shadow-card">

              {status === 'success' && (
                <div className="bg-brand-green/20 border border-brand-green text-cream rounded-2xl px-6 py-4 text-sm font-semibold text-center mb-6">
                  Message sent successfully! I will get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-900/30 border border-red-400 text-red-200 rounded-2xl px-6 py-4 text-sm font-semibold text-center mb-6">
                  Something went wrong. Please email me directly at annastesiaugwuanyi@gmail.com.
                </div>
              )}

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-cream/70 uppercase tracking-wider">Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name" className={inputCls('name')} />
                    {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-cream/70 uppercase tracking-wider">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls('email')} />
                    {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-cream/70 uppercase tracking-wider">Subject *</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" className={inputCls('subject')} />
                  {errors.subject && <span className="text-red-400 text-xs">{errors.subject}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-cream/70 uppercase tracking-wider">Message *</label>
                  <textarea rows={5} name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea..." className={`${inputCls('message')} resize-none`} />
                  {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
                </div>
                <button type="submit" disabled={status === 'loading'}
                  className="bg-brand-green text-forest-deep py-3.5 rounded-xl font-display font-bold text-base hover:bg-brand-greenDark hover:text-white transition-all duration-200 mt-1 w-full disabled:opacity-60 shadow-btn-glow cursor-pointer">
                  {status === 'loading' ? 'Sending Message...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-cream/15 text-xs text-cream/60">
            <p>© {new Date().getFullYear()} Annastesia Amarachi Ugwuanyi (Dev Anna). Built with Next-level passion & clean architecture.</p>
          </div>

        </div>
      </section>
    </>
  )
}
