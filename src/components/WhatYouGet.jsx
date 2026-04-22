import { SITE_CONFIG } from '../config'
import './WhatYouGet.css'

export default function WhatYouGet() {
  const { deliverables, hero } = SITE_CONFIG

  return (
    <section className="wyg" id="o-que-voce-recebe">
      <div className="container">

        {/* Cabeçalho */}
        <div className="wyg__header">
          <span className="badge">✦ Só pra quem entra</span>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            O que você vai desbloquear quando entrar
          </h2>
          <p className="section-subtitle" style={{ marginTop: 12 }}>
            Isso não tá disponível em lugar nenhum. Só aqui. Só pra quem decide entrar.
          </p>
          <div className="section-divider" />
        </div>

        {/* Grid de cards */}
        <div className="wyg__grid">
          {deliverables.map((item, i) => (
            <div
              key={item.id}
              className="wyg__card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="wyg__icon-wrap">
                <span className="wyg__icon" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
              </div>
              <div className="wyg__text">
                {/* ✏️ Edite título e descrição em src/config.js → deliverables[] */}
                <h3 className="wyg__title">{item.title}</h3>
                <p className="wyg__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA intermediário */}
        <div className="wyg__cta">
          <a href={hero.ctaLink} className="btn-primary">
            {hero.ctaText}
          </a>
        </div>

      </div>
    </section>
  )
}
