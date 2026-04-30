import { useEffect } from 'react'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import WhatYouGet from './components/WhatYouGet'
import Offer from './components/Offer'
import Footer from './components/Footer'
import PixelEvents from './components/PixelEvents'
import SocialProof from './components/SocialProof'
import Testimonials from './components/Testimonials'

// ── Scroll Reveal ──
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// ── Exit Intent / Back Redirect ──
// Redireciona para /lastchance apenas 1x por sessão
function useExitIntent() {
  useEffect(() => {
    const KEY = 'lc_shown'

    // Já exibiu nessa sessão? Não faz nada
    if (sessionStorage.getItem(KEY)) return

    let redirected = false

    const redirect = () => {
      if (redirected) return
      if (sessionStorage.getItem(KEY)) return
      redirected = true
      sessionStorage.setItem(KEY, '1')
      window.location.href = '/lastchance.html'
    }

    // ── Mouse sai pela parte de cima (desktop exit intent) ──
    const onMouseLeave = (e) => {
      if (e.clientY <= 0) redirect()
    }
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])
}

export default function App() {
  useScrollReveal()
  useExitIntent()

  return (
    <main>
      <PixelEvents />
      <Hero />
      <Carousel />
      <Testimonials />
      <WhatYouGet />
      <Offer />
      <Footer />
      <SocialProof />
    </main>
  )
}
