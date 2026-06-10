import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const socials = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/dev-anna-life' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/annastesia-amarachi-ugwuanyi-3318a3390/' },
  { icon: <FaTwitter />, label: 'Twitter', href: 'https://x.com/Dev_Anna20/' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/devanna_22' },
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/profile.php' },
  { icon: <FaTiktok />, label: 'TikTok', href: 'https://www.tiktok.com/@itsanna136' },
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
    `px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-white text-forest placeholder:text-forest/30
    ${errors[f] ? 'border-red-400 bg-red-50' : 'border-forest/20 focus:border-forest'}`

  return (
    <>
      {/* Floating WhatsApp */}
      <a href="https://wa.me/2348146790636" target="_blank" rel="noreferrer" title="Chat on WhatsApp" aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 hover:bg-green-600 transition-all duration-200 animate-float">
        <FaWhatsapp />
      </a>

      <section id="contact" className="py-24 px-8 md:px-16 bg-canopy">
        <div className="max-w-2xl mx-auto">

          {/* Header — slide up */}
          <div className="text-center mb-12 reveal">
            <p className="text-sage text-xs font-bold uppercase tracking-widest mb-3">Contact</p>
            <h2 className="font-display font-black text-4xl text-cream leading-tight mb-3">
              Let's create something amazing
            </h2>
            <p className="text-sage">Got a project, an idea, or just want to say hi? I'd love to hear from you.</p>
          </div>

          {/* Contact links — slide from left/right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <a href="https://mail.google.com/mail/?view=cm&to=annastesiaugwuanyi@gmail.com"
              className="reveal-left flex items-center gap-4 bg-white border border-cream/15 rounded-2xl px-5 py-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
              <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center text-forest text-lg group-hover:bg-forest group-hover:text-cream transition-all duration-200">
                <FaEnvelope />
              </div>
              <div>
                <div className="text-xs text-forest/50 font-semibold uppercase tracking-wide mb-0.5">Email</div>
                <div className="text-sm font-semibold text-forest">annastesiaugwuanyi@gmail.com</div>
              </div>
            </a>
            <a href="https://wa.me/2348146790636" target="_blank" rel="noreferrer"
              className="reveal-right flex items-center gap-4 bg-white border border-cream/15 rounded-2xl px-5 py-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
              <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-lg group-hover:bg-green-500 group-hover:text-white transition-all duration-200">
                <FaWhatsapp />
              </div>
              <div>
                <div className="text-xs text-forest/50 font-semibold uppercase tracking-wide mb-0.5">WhatsApp</div>
                <div className="text-sm font-semibold text-forest">+234 8146790636</div>
              </div>
            </a>
          </div>

          {status === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-6 py-4 text-sm font-semibold text-center mb-6">
              Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-500 rounded-2xl px-6 py-4 text-sm font-semibold text-center mb-6">
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <form className="reveal bg-white rounded-3xl p-8 shadow-sm border border-cream/15 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-forest uppercase tracking-wide">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name" className={inputCls('name')} />
                {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-forest uppercase tracking-wide">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls('email')} />
                {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-forest uppercase tracking-wide">Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" className={inputCls('subject')} />
              {errors.subject && <span className="text-red-400 text-xs">{errors.subject}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-forest uppercase tracking-wide">Message</label>
              <textarea rows={6} name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea..." className={`${inputCls('message')} resize-none`} />
              {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
            </div>
            <button type="submit" disabled={status === 'loading'}
              className="bg-forest text-cream py-4 rounded-xl font-display font-bold text-base hover:bg-bark transition-colors duration-200 mt-1 w-full disabled:opacity-60">
              {status === 'loading' ? 'Sending...' : 'Send Message '}
            </button>
          </form>

          <div className="reveal flex justify-center gap-3 mt-10">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} aria-label={s.label}
                className="w-11 h-11 rounded-full border border-cream/20 bg-white text-forest text-lg flex items-center justify-center hover:-translate-y-1 hover:bg-forest hover:text-cream hover:border-forest transition-all duration-200">
                {s.icon}
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}