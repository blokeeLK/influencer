import { SITE_CONFIG } from '../config'
import { trackEvent, withUtms } from '../useTracking'
import './Offer.css'

export default function Offer() {
  const { offer, bonuses, bonusIntro, bonusWarning } = SITE_CONFIG

  return (
    <section className="offer" id="oferta">
      <div className="offer__bg" aria-hidden="true">
        <div className="offer__bg-glow offer__bg-glow--1" />
        <div className="offer__bg-glow offer__bg-glow--2" />
      </div>

      <div className="container">
        <div className="offer__inner">

          {/* CARD */}
          <div className="offer__card">

            {/* Preço */}
            <div className="offer__price-block">
              <div className="offer__price-from">
                <span className="offer__price-label">De</span>
                <span className="offer__price-original">{offer.originalPrice}</span>
              </div>
              <span className="offer__price-by-label">por apenas</span>
              <div className="offer__price-promo">
                {offer.promoPrice}
                <span className="offer__price-period">{offer.period}</span>
              </div>
              <span className="offer__urgency-tag">{offer.urgencyText}</span>
            </div>

            <div className="offer__divider" />

            {/* Bônus */}
            <div className="offer__bonus-block">
              <p className="offer__bonus-intro">{bonusIntro}</p>
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
              <p className="offer__urgency-note">⏰ Oferta pode encerrar a qualquer momento</p>
              <p className="offer__guarantee">{offer.guarantee}</p>
            </div>

            {/* Selos */}
            <div className="offer__seals">
              <div className="offer__seal"><span>🔒</span><span>Pagamento Seguro</span></div>
              <div className="offer__seal"><span>⚡</span><span>Acesso Imediato</span></div>
              <div className="offer__seal"><span>💳</span><span>Parcele em até 12x</span></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
