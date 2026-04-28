// ============================================================
// useTracking.js — Rastreamento de eventos UTMify
// Dispara eventos para o pixel sem quebrar SSR/build.
// Use: trackEvent('checkout_click') em qualquer componente.
// ============================================================

/**
 * Dispara um evento customizado no pixel UTMify.
 * Roda apenas no browser (seguro para build Vite).
 *
 * @param {string} eventName  - Nome do evento (ex: 'checkout_click')
 * @param {object} [payload]  - Dados extras opcionais
 */
export function trackEvent(eventName, payload = {}) {
  if (typeof window === 'undefined') return // seguro em SSR

  try {
    // UTMify usa window.dispatchEvent com CustomEvent
    window.dispatchEvent(
      new CustomEvent('utmify:event', {
        detail: { event: eventName, ...payload },
      })
    )

    // Fallback: log em dev para validar disparo
    if (import.meta.env.DEV) {
      console.log('[Tracking]', eventName, payload)
    }
  } catch (e) {
    // Nunca quebra o site por erro de rastreamento
  }
}

/**
 * Preserva UTMs da URL atual e os anexa a um link de destino.
 * Garante que o usuário não perca a origem ao clicar em checkout.
 *
 * @param {string} baseUrl - URL base do checkout/WhatsApp
 * @returns {string}       - URL com UTMs da página preservados
 */
export function withUtms(baseUrl) {
  if (typeof window === 'undefined') return baseUrl

  try {
    const src = new URL(window.location.href)
    const dest = new URL(baseUrl)

    const utmParams = [
      'utm_source', 'utm_medium', 'utm_campaign',
      'utm_term', 'utm_content', 'utm_id',
      'sck', 'src',
    ]

    utmParams.forEach(key => {
      const val = src.searchParams.get(key)
      if (val) dest.searchParams.set(key, val)
    })

    return dest.toString()
  } catch {
    return baseUrl
  }
}
