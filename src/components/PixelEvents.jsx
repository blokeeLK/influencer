// ============================================================
// PixelEvents.jsx — Dispara PageView ao montar a página
// Incluído uma única vez no App.jsx
// ============================================================
import { useEffect } from 'react'
import { trackEvent } from '../useTracking'

export default function PixelEvents() {
  useEffect(() => {
    // PageView — disparado uma vez quando a página carrega
    trackEvent('PageView', {
      url: window.location.href,
      referrer: document.referrer || 'direct',
    })
  }, [])

  return null // não renderiza nada visual
}
