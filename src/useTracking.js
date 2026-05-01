import posthog from 'posthog-js'

/**
 * Dispara um evento em PostHog e UTMify simultaneamente.
 * @param {string} eventName
 * @param {object} [payload]
 */
export function trackEvent(eventName, payload = {}) {
  if (typeof window === 'undefined') return

  try {
    posthog.capture(eventName, payload)

    window.dispatchEvent(
      new CustomEvent('utmify:event', {
        detail: { event: eventName, ...payload },
      })
    )

    if (import.meta.env.DEV) {
      console.log('[Tracking]', eventName, payload)
    }
  } catch (e) {}
}

/**
 * Preserva UTMs da URL atual e os anexa a um link de destino.
 * @param {string} baseUrl
 * @returns {string}
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
