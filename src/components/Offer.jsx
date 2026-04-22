import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '../config'
import './Offer.css'

// Contador regressivo — cria urgência real
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
  const { offer, bonuses } = SITE_CONFIG
  const countdown = useCountdown()

  return (
    <section className="offer" id="oferta">
      {/* Fundo decorativo */}
      <div className="offer__bg" aria-hidden="true">
        <div className="offer__bg-glow offer__bg-glow--1" />
        <div className="offer__bg-glow offer__bg-glow--2" />
      </div>

      <div className="container">
        <div className="offer__inner">

          {/* Topo: urgência */}
          <div className="offer__urgency">
            <span className="offer__clock">⏰</span>
            <span>Esta oferta expira em: <strong className="offer__countdown">{countdown}</strong></span>
          </div>

          {/* Cabeçalho */}
          <div className="offer__header">
            <span className="badge offer__badge">✦ Condição especial de hoje</span>
            {/* ✏️ Edite título em src/config.js → offer.title */}
            <h2 className="section-title offer__title">{offer.title}</h2>
            <p className="offer__subtitle">{offer.subtitle}</p>
          </div>

          {/* Bloco de preço */}
          <div className="offer__price-box">
            <div className="offer__price-from">
              <span className="offer__price-label">De</span>
              {/* ✏️ Edite o preço original em src/config.js → offer.originalPrice */}
              <span className="offer__price-original">{offer.originalPrice}</span>
            </div>

            <div className="offer__price-to">
              <span className="offer__price-by-label">por apenas</span>
              <div className="offer__price-promo">
                {/* ✏️ Edite o preço promo em src/config.js → offer.promoPrice */}
                {offer.promoPrice}
                <span className="offer__price-period">{offer.period}</span>
              </div>
            </div>

            <span className="offer__urgency-tag">{offer.urgencyText}</span>
          </div>

          {/* Resumo dos bônus incluídos */}
          <div className="offer__bonus-recap">
            <p className="offer__bonus-title">✦ Todos os bônus incluídos:</p>
            <ul className="offer__bonus-list">
              {bonuses.map(b => (
                <li key={b.id} className="offer__bonus-item">
                  <span className="offer__check">✓</span>
                  <span>{b.icon} {b.title}</span>
                </li>
              ))}
              <li className="offer__bonus-item">
                <span className="offer__check">✓</span>
                <span>🔓 Acesso imediato após confirmação</span>
              </li>
            </ul>
          </div>

          {/* Botão CTA principal */}
          <div className="offer__cta-wrap">
            {/* ✏️ Edite link e texto do CTA em src/config.js → offer.ctaLink / offer.ctaText */}
            <a
              href={offer.ctaLink}
              className="btn-primary btn-large offer__cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {offer.ctaText}
            </a>
            <p className="offer__guarantee">{offer.guarantee}</p>
          </div>

          {/* Selos de confiança */}
          <div className="offer__seals">
            <div className="offer__seal">
              <span className="offer__seal-icon">🔒</span>
              <div>
                <p className="offer__seal-title">Pagamento Seguro</p>
                <p className="offer__seal-sub">Criptografia SSL</p>
              </div>
            </div>
            <div className="offer__seal">
              <span className="offer__seal-icon">⚡</span>
              <div>
                <p className="offer__seal-title">Acesso Imediato</p>
                <p className="offer__seal-sub">Liberado na hora</p>
              </div>
            </div>
            <div className="offer__seal">
              <span className="offer__seal-icon">💳</span>
              <div>
                <p className="offer__seal-title">Parcele em até 12x</p>
                <p className="offer__seal-sub">Sem juros no cartão</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
