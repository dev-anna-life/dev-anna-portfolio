import { useState } from 'react'
import certImg from '../assets/certificate-frontend-mastery.jpg'
import { FaCheckCircle, FaAward, FaExternalLinkAlt, FaDownload, FaTimes, FaShieldAlt } from 'react-icons/fa'

export default function Certifications() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="certifications" className="relative bg-cream text-ink py-20 px-8 md:px-16 border-t border-forest/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-greenDark text-xs font-semibold uppercase tracking-[0.22em] mb-3 flex items-center justify-center gap-2">
            <FaShieldAlt className="text-sm" /> Verified Credentials
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-forest leading-tight mb-3">
            Professional Certification
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Officially verified qualification in Frontend Development Mastery, validating core competencies in modern web development standards.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-forest/15 shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Accent */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-green/8 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Certificate Preview Card */}
          <div className="md:col-span-6 reveal-left">
            <div 
              onClick={() => setModalOpen(true)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-forest/15 shadow-xl transition-all duration-300 hover:border-brand-green hover:shadow-2xl"
            >
              <img 
                src={certImg} 
                alt="Techverve Frontend Development Mastery Certificate - Ugwuanyi Annastesia Amarachi" 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-forest/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                <span className="bg-brand-green text-forest-deep px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                  <FaExternalLinkAlt /> Click to Expand
                </span>
              </div>
            </div>
            <p className="text-center text-xs text-muted mt-3 font-mono">
              Click image to preview full resolution certificate
            </p>
          </div>

          {/* Right: Certificate Details */}
          <div className="md:col-span-6 reveal-right flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-green/15 border border-brand-green/30 text-brand-greenDark px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <FaCheckCircle className="text-brand-green" /> Verified & Issued
              </div>

              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-forest mb-2">
                Frontend Development Mastery
              </h3>
              
              <p className="text-brand-greenDark font-medium text-sm mb-4">
                Techverve Student Examination Platform
              </p>

              <p className="text-forest/85 text-sm leading-relaxed mb-6">
                Awarded to <strong className="text-forest font-semibold">Ugwuanyi Annastesia Amarachi</strong> in recognition of dedication, effort, and excellence in mastering the fundamental and advanced concepts of Frontend Development Mastery, including HTML5, CSS3, JavaScript, Git, and GitHub.
              </p>

              {/* Metadata Key-Value Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-cream border border-forest/10 mb-6 text-xs">
                <div>
                  <span className="text-muted uppercase tracking-wider font-semibold block mb-0.5">Recipient</span>
                  <span className="text-forest font-medium">Ugwuanyi Annastesia A.</span>
                </div>
                <div>
                  <span className="text-muted uppercase tracking-wider font-semibold block mb-0.5">Issue Date</span>
                  <span className="text-forest font-medium">28 Sep 2026</span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted uppercase tracking-wider font-semibold block mb-0.5">Certificate ID</span>
                  <span className="text-brand-greenDark font-mono text-[11px] font-semibold break-all select-all">
                    B57394AB-5044-4C83-8435-0D1F64C5C510
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted uppercase tracking-wider font-semibold block mb-0.5">Verified By</span>
                  <span className="text-forest font-medium">Ozioko Harrison (Director, Techverve)</span>
                </div>
              </div>

              {/* Verified Competencies */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-muted font-semibold block mb-2.5">
                  Verified Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['HTML5 Semantic Design', 'CSS3 & Responsive UX', 'JavaScript ES6+', 'Git Version Control', 'GitHub Collaboration'].map(skill => (
                    <span key={skill} className="text-xs px-3 py-1 rounded-full bg-forest/5 text-forest border border-forest/15 font-medium flex items-center gap-1.5">
                      <FaCheckCircle className="text-brand-green text-[10px]" /> {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="px-5 py-3 bg-forest text-cream rounded-lg text-sm font-bold hover:bg-forest-deep transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <FaExternalLinkAlt className="text-xs" /> View Full Certificate
              </button>
              <a
                href="/certificate-frontend-mastery.jpg"
                download="Annastesia-Amarachi-Frontend-Mastery-Certificate.jpg"
                className="px-5 py-3 border border-forest/25 text-forest rounded-lg text-sm font-semibold hover:border-forest hover:bg-forest/5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <FaDownload className="text-xs" /> Download Certificate
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox / Modal for High-Resolution View */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-forest-deep/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-forest-surface border border-cream/20 rounded-2xl p-4 sm:p-6 flex flex-col items-center shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center mb-4 pb-3 border-b border-cream/10">
              <div className="flex items-center gap-2">
                <FaAward className="text-brand-green text-lg" />
                <h4 className="font-display font-semibold text-lg text-cream">Frontend Development Mastery Certificate</h4>
              </div>
              <button 
                onClick={() => setModalOpen(false)}
                className="w-9 h-9 rounded-full bg-forest-deep border border-cream/20 text-cream/80 hover:text-brand-green hover:border-brand-green flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Certificate Modal"
              >
                <FaTimes />
              </button>
            </div>

            <div className="overflow-auto max-h-[70vh] w-full flex justify-center rounded-xl bg-forest-deep/60 p-2 border border-cream/10">
              <img 
                src={certImg} 
                alt="Techverve Frontend Development Mastery Certificate" 
                className="max-w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full flex justify-between items-center mt-4 pt-3 border-t border-cream/10 text-xs text-cream/70 flex-wrap gap-2">
              <span className="font-mono text-brand-green">Certificate No: B57394AB-5044-4C83-8435-0D1F64C5C510</span>
              <a 
                href="/certificate-frontend-mastery.jpg" 
                download="Annastesia-Amarachi-Frontend-Mastery-Certificate.jpg"
                className="text-brand-green hover:underline flex items-center gap-1.5 font-semibold"
              >
                <FaDownload /> Download Image
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
