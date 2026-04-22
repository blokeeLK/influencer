import { SITE_CONFIG } from '../config'
import './Bonus.css'

export default function Bonus() {
  const { bonuses, bonusIntro, bonusWarning, hero } = SITE_CONFIG

  return (
    <section className="bonus" id="bonus">
      <div className="bonus__bg" aria-hidden="true">
        <div className="bonus__bg-glow" />
      </div>

      <div className="container">

        {/* Cabeçalho */}
        <div className="bonus__header">
          <span className="badge">✦ Isso normalmente eu não mostro…</span>
          <h2 className="section-title bonus__title" style={{ marginTop: 16 }}>
            O que vem junto quando você entrar hoje
          </h2>
          <div className="section-divider" />
        </div>

        {/* Card principal */}
        <div className="bonus__main-card">

          {/* Texto de abertura — voz pessoal da influencer */}
          {/* ✏️ Edite em src/config.js → bonusIntro */}
          <p className="bonus__intro">{bonusIntro}</p>

          {/* Lista de itens */}
          <ul className="bonus__items">
            {bonuses.map((item, i) => (
              <li
                key={item.id}
                className="bonus__item"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="bonus__item-icon">{item.icon}</span>
                {/* ✏️ Edite os itens em src/config.js → bonuses[] */}
                <span className="bonus__item-text">{item.title}</span>
              </li>
            ))}
          </ul>

          {/* Aviso de escassez */}
          {/* ✏️ Edite em src/config.js → bonusWarning */}
          <div className="bonus__warning">
            <span className="bonus__warning-icon">⚠️</span>
            <p>{bonusWarning}</p>
          </div>

          {/* CTA dentro do card */}
          <div className="bonus__cta">
            <a href={hero.ctaLink} className="btn-primary btn-large">
              {hero.ctaText}
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
