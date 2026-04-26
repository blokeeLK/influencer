import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '../config'
import { trackEvent, withUtms } from '../useTracking'
import './Offer.css'

function useCountdown(hours = 23, minutes = 59, seconds = 59) {
  const [time, setTime] = useState({ h: hours, m: minutes, s: seconds })

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev
        if (s > 0) return { h, m, s: s - 1 }
        if (m > 0) return { h, m: m - 1, s: 59 }
        if (h > 0) return { h: h - 1, m: 59, s: 59 }
        clearInterval(tick)
        return { h: 0, m: 0, s: 0 }
      })
    }, 1000)
    return () => clearInterval(tick)
  }, [])

  const pad = n => String(n).padStart(2, '0')
  return `${pad(time.h)}:${pad(time.m)}:${pad(time.s)}`
}

export default function Offer() {
  const { offer, bonuses, bonusIntro, bonusWarning } = SITE_CONFIG
  const countdown = useCountdown()

  return (
    <section className="offer" id="oferta">
      <div className="offer__bg" aria-hidden="true">
        <div className="offer__bg-glow offer__bg-glow--1" />
        <div className="offer__bg-glow offer__bg-glow--2" />
      </div>

      <div className="container">
        <div className="offer__inner">

          {/* Contador de urgência */}
          <div className="offer__urgency">
            <span className="offer__clock">⏰</span>
            <span>Esta oferta expira em: <strong className="offer__countdown">{countdown}</strong></span>
          </div>

          {/* BALÃO ÚNICO com tudo dentro */}
          <div className="offer__card">

            {/* Título */}
            <div className="offer__card-header">
              <span className="badge offer__badge">✦ Condição especial de hoje</span>
              <h2 className="offer__title">{offer.title}</h2>
              <p className="offer__subtitle">{offer.subtitle}</p>
            </div>

            <div className="offer__divider" />

            {/* Preço */}
            <div className="offer__price-block">
              {/* De R$97 — vermelho riscado */}
              <div className="offer__price-from">
                <span className="offer__price-label">De</span>
                <span className="offer__price-original">{offer.originalPrice}</span>
              </div>

              {/* Por apenas — label */}
              <span className="offer__price-by-label">por apenas</span>

              {/* R$ 19,90 — verde grande negrito */}
              <div className="offer__price-promo">
                {offer.promoPrice}
                <span className="offer__price-period">{offer.period}</span>
              </div>

              <span className="offer__urgency-tag">{offer.urgencyText}</span>
            </div>

            <div className="offer__divider" />

            {/* Bônus no estilo card — igual à seção Bonus */}
            <div className="offer__bonus-block">
              <p className="offer__bonus-intro">{bonusIntro}</p>
              {/* IDs 1 e 5 aparecem em todos os dispositivos; os demais somem no mobile */}
              <ul className="offer__bonus-list">
                {bonuses.map(b => (
                  <li
                    key={b.id}
                    className={`offer__bonus-item${b.id !== 1 && b.id !== 5 ? ' offer__bonus-item--desktop-only' : ''}`}
                  >
                    <span className="offer__bonus-icon">{b.icon}</span>
                    <span className="offer__bonus-text">{b.title}</span>
                  </li>
                ))}
              </ul>
              <div className="offer__bonus-warning">
                <span>⚠️</span>
                <p>{bonusWarning}</p>
              </div>
            </div>

            <div className="offer__divider" />

            {/* CTA */}
            <div className="offer__cta-wrap">
              <a
                href={withUtms(offer.ctaLink)}
                className="btn-primary btn-large offer__cta-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent('checkout_click', { location: 'offer', price: offer.promoPrice })
                  trackEvent('InitiateCheckout', { value: offer.promoPrice, currency: 'BRL' })
                }}
              >
                {offer.ctaText}
              </a>
              <p className="offer__guarantee">{offer.guarantee}</p>
            </div>

            {/* Selos */}
            <div className="offer__seals">
              <div className="offer__seal">
                <span>🔒</span>
                <span>Pagamento Seguro</span>
              </div>
              <div className="offer__seal">
                <span>⚡</span>
                <span>Acesso Imediato</span>
              </div>
              <div className="offer__seal">
                <span>💳</span>
                <span>Parcele em até 12x</span>
              </div>
            </div>

          </div>
          {/* fim .offer__card */}

        </div>
      </div>
    </section>
  )
}
