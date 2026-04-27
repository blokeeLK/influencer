import { SITE_CONFIG } from '../config'
import { trackEvent, withUtms } from '../useTracking'
import './Bonus.css'

export default function Bonus() {
  const { bonuses, bonusIntro, bonusWarning, offer } = SITE_CONFIG

  return (
    <section className="bonus" id="bonus">
      <div className="bonus__bg" aria-hidden="true">
        <div className="bonus__bg-glow" />
      </div>

      <div className="container">

        <div className="bonus__header reveal">
          <span className="badge">✦ Isso normalmente eu não mostro…</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            Tudo que você leva junto — <em>sem pagar nada a mais</em>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="bonus__main-card reveal">

          <p className="bonus__intro">{bonusIntro}</p>

          <ul className="bonus__items">
            {bonuses.map((item, i) => (
              <li key={item.id} className="bonus__item" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="bonus__item-icon">{item.icon}</span>
                <span className="bonus__item-text">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="bonus__warning">
            <span className="bonus__warning-icon">⚠️</span>
            <p>{bonusWarning}</p>
          </div>

          <div className="bonus__cta">
            <a
              href={withUtms(offer.ctaLink)}
              className="btn-primary btn-large"
              onClick={() => trackEvent('cta_bonus_click', { location: 'bonus' })}
            >
              🔥 LIBERAR MEU ACESSO AGORA
            </a>
            <p className="bonus__cta-sub">⏰ Oferta pode encerrar a qualquer momento</p>
          </div>

        </div>

      </div>
    </section>
  )
}
