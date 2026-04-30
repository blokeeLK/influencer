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

    // ── 1. Botão voltar — injeta estado falso no histórico para capturar popstate ──
    window.history.pushState({ lc: true }, '')

    const onPopState = (e) => {
      // Só redireciona se o estado anterior era o nosso marcador {lc: true}
      // Isso evita disparar quando o usuário clica em links internos (#oferta, etc.)
      if (e.state && e.state.lc === true) return
      redirect()
    }
    window.addEventListener('popstate', onPopState)

    // ── 2. Fechar aba / trocar de site — beforeunload ──
    const onBeforeUnload = (e) => {
      // Não bloqueamos (UX ruim), mas marcamos e redirecionamos
      // Nota: beforeunload não permite redirect síncrono em todos os browsers,
      // mas o popstate cobre o caso de voltar
      sessionStorage.setItem(KEY, '1')
    }
    window.addEventListener('beforeunload', onBeforeUnload)

    // ── 3. Usuário sai da aba (mobile: minimiza, troca de app) ──
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sessionStorage.setItem(KEY, '1')
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    // ── 4. Mouse sai pela parte de cima (desktop exit intent) ──
    const onMouseLeave = (e) => {
      if (e.clientY <= 0) redirect()
    }
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('popstate', onPopState)
      window.removeEventListener('beforeunload', onBeforeUnload)
      document.removeEventListener('visibilitychange', onVisibilityChange)
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
