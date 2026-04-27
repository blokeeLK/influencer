import { SITE_CONFIG } from '../config'
import { trackEvent, withUtms } from '../useTracking'
import './WhatYouGet.css'

export default function WhatYouGet() {
  const { deliverables, offer } = SITE_CONFIG

  return (
    <section className="wyg" id="o-que-voce-recebe">
      <div className="container">

        <div className="wyg__header reveal">
          <span className="badge">✦ Acesso exclusivo</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            O que você desbloqueia agora
          </h2>
          <p className="section-subtitle" style={{ marginTop: 10 }}>
            Não existe em nenhuma outra plataforma. Só aqui. Só pra quem decide entrar hoje.
          </p>
          <div className="section-divider" />
        </div>

        <div className="wyg__grid">
          {deliverables.map((item, i) => (
            <div key={item.id} className="wyg__card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="wyg__icon-wrap">
                <span className="wyg__icon" role="img" aria-label={item.title}>{item.icon}</span>
              </div>
              <div className="wyg__text">
                <h3 className="wyg__title">{item.title}</h3>
                <p className="wyg__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="wyg__cta reveal">
          <a
            href={withUtms(offer.ctaLink)}
            className="btn-primary btn-large"
            onClick={() => trackEvent('cta_wyg_click', { location: 'what_you_get' })}
          >
            👁️ QUERO VER TUDO AGORA
          </a>
          <p className="wyg__cta-sub">⏰ Oferta por tempo limitado · Acesso imediato</p>
        </div>

      </div>
    </section>
  )
}
