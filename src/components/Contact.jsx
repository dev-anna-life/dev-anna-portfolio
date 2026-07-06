import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

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
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
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
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name, from_email: form.email,
        subject: form.subject, message: form.message,
      }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setErrors({})
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputCls = (f) =>
    `px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-dark-box text-text-main placeholder:text-text-muted
    ${errors[f] ? 'border-red-400 bg-red-900/20' : 'border-dark-box focus:border-primary'}`

  return (
    <>
      <a href="https://wa.me/2348146790636" target="_blank" rel="noreferrer" title="Chat on WhatsApp" aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 hover:bg-primary-light transition-all duration-200 animate-float">
        <FaWhatsapp />
      </a>

      <section id="contact" className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12 reveal">
            <p className="text-primary-accent text-xs font-bold uppercase tracking-widest mb-3">Contact</p>
            <h2 className="font-display font-bold text-4xl text-text-main leading-tight mb-3">
              Let's create something amazing
            </h2>
            <p className="text-text-body">Got a project, an idea, or just want to say hi? I'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="reveal-left bg-dark-card border border-dark-box rounded-3xl p-7">
              <h3 className="font-display font-bold text-xl text-text-main mb-6">Get In Touch</h3>
              <div className="space-y-5">
                <a href="https://mail.google.com/mail/?view=cm&to=annastesiaugwuanyi@gmail.com"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-dark-box flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-semibold uppercase tracking-wide mb-0.5">Email</div>
                    <div className="text-sm font-semibold text-text-body">annastesiaugwuanyi@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/2348146790636" target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-dark-box flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-semibold uppercase tracking-wide mb-0.5">WhatsApp</div>
                    <div className="text-sm font-semibold text-text-body">+234 8146790636</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-dark-box flex items-center justify-center text-primary">
                    <FaGithub />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-semibold uppercase tracking-wide mb-0.5">GitHub</div>
                    <div className="text-sm font-semibold text-text-body">dev-anna-life</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-dark-box flex items-center justify-center text-primary">
                    <FaLinkedinIn />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-semibold uppercase tracking-wide mb-0.5">LinkedIn</div>
                    <div className="text-sm font-semibold text-text-body">Annastesia Ugwuanyi</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6 pt-5 border-t border-dark-box">
                {socials.map(s => {
                  const Icon = s.icon
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} aria-label={s.label}
                      className="w-9 h-9 rounded-full border border-dark-box bg-dark-bg text-text-muted text-sm flex items-center justify-center hover:-translate-y-1 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="reveal-right bg-dark-card border border-dark-box rounded-3xl p-7">

          {status === 'success' && (
            <div className="bg-primary/20 border border-primary text-primary-accent rounded-2xl px-6 py-4 text-sm font-semibold text-center mb-6">
              Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-900/20 border border-red-500 text-red-400 rounded-2xl px-6 py-4 text-sm font-semibold text-center mb-6">
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-wide">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name" className={inputCls('name')} />
                {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-wide">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls('email')} />
                {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wide">Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" className={inputCls('subject')} />
              {errors.subject && <span className="text-red-400 text-xs">{errors.subject}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wide">Message</label>
              <textarea rows={6} name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea..." className={`${inputCls('message')} resize-none`} />
              {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
            </div>
            <button type="submit" disabled={status === 'loading'}
              className="bg-primary text-white py-4 rounded-xl font-display font-bold text-base hover:bg-primary-light transition-colors duration-200 mt-1 w-full disabled:opacity-60">
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
          </div>
          </div>

        </div>
      </section>
    </>
  )
}
