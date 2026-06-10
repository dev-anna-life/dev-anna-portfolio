import { useEffect, useRef } from 'react'

export function useReveal() {
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )

    observerRef.current = observer

    const observeRevealElements = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el)
      })
    }

    observeRevealElements()

    const mutationObserver = new MutationObserver(observeRevealElements)
    mutationObserver.observe(document.getElementById('root'), { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
