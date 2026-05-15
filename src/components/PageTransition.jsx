import { useEffect, useState } from 'react'

export default function PageTransition() {
  const [phase, setPhase] = useState('in') // starts immediately on mount

  useEffect(() => {
    const outTimer  = setTimeout(() => setPhase('out'),  600)
    const doneTimer = setTimeout(() => setPhase('idle'), 1200)
    return () => {
      clearTimeout(outTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (phase === 'idle') return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      <div
        className={`absolute inset-0 bg-forest flex items-center justify-center
          ${phase === 'in' ? 'animate-curtainIn' : 'animate-curtainOut'}`}
      >
        <div className="flex items-center gap-2 select-none">
          <span
            className="font-display font-black text-7xl md:text-9xl text-cream animate-codeFlicker"
            style={{ animationDelay: '0s', fontFamily: 'monospace' }}
          >
            {'{'}
          </span>
          <span
            className="font-display font-black text-5xl md:text-7xl text-sage animate-codeFlicker"
            style={{ animationDelay: '0.2s', fontFamily: 'monospace' }}
          >
            {'  '}
          </span>
          <span
            className="font-display font-black text-7xl md:text-9xl text-cream animate-codeFlicker"
            style={{ animationDelay: '0.4s', fontFamily: 'monospace' }}
          >
            {'}'}
          </span>
        </div>
      </div>
    </div>
  )
}