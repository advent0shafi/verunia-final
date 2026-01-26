'use client'

import { ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Don't enable smooth scroll if user prefers reduced motion
    if (prefersReducedMotion) {
      return
    }

    // Add lenis class to html element for CSS
    document.documentElement.classList.add('lenis')

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    // Sync Lenis scroll with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Use GSAP ticker for smooth animation frame updates
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Disable GSAP's built-in lag smoothing to prevent conflicts
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      lenisRef.current = null
      document.documentElement.classList.remove('lenis')
    }
  }, [])

  return <>{children}</>
}
