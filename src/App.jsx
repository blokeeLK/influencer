import { useEffect } from 'react'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import WhatYouGet from './components/WhatYouGet'
import Offer from './components/Offer'
import Footer from './components/Footer'
import PixelEvents from './components/PixelEvents'
import SocialProof from './components/SocialProof'

// ── Scroll Reveal ── Adiciona .visible nos elementos .reveal quando entram na viewport
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.12 }
    )

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <main>
      <PixelEvents />
      <Hero />
      <Carousel />
      <WhatYouGet />
      <Offer />
      <Footer />
      <SocialProof />
    </main>
  )
}
