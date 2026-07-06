import { useEffect, useRef } from 'react'

export default function BackgroundEffects() {
  const glowRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`
      }
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.4 + 0.1,
    }))

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124, 179, 66, ${p.o})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg" />

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/8 rounded-full blur-[100px] animate-drift" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-primary-accent/6 rounded-full blur-[100px] animate-drift-reverse" />
        <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-[90px] animate-float-slow" />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-[80px] animate-float-slower" />
      </div>

      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/4 blur-[120px] pointer-events-none -z-10 transition-transform duration-300 ease-out"
      />

      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none -z-10"
      />
    </>
  )
}
