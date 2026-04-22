import { SITE_CONFIG } from '../config'
import './Hero.css'

export default function Hero() {
  const { hero } = SITE_CONFIG

  const headlineLines = hero.headline.split('\n')

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
      </div>

      <div className="container hero__container">

        {/* ── COLUNA ESQUERDA: Vídeo local ── */}
        <div className="hero__video-col animate-fade-up">
          <div className="hero__video-wrapper">

            {/* ✏️ Para trocar o vídeo: substitua o arquivo public/vls.mp4 */}
            <video
              className="hero__video"
              src="/vls.mp4"
              poster="/video-thumb.jpg"
              controls
              playsInline
              preload="metadata"
            />

            {/* Badge de exclusividade */}
            <div className="hero__video-badge" aria-hidden="true">
              <span>✦</span> Conteúdo Exclusivo
            </div>
          </div>
        </div>

        {/* ── COLUNA DIREITA: Copy ── */}
        <div className="hero__copy-col">
          <span className="badge animate-fade-up">
            ✦ Oferta por tempo limitado
          </span>

          <h1 className="hero__headline animate-fade-up-delay-1">
            {headlineLines.map((line, i) => (
              <span key={i}>
                {i === 1 ? <em>{line}</em> : line}
                {i < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="hero__subheadline animate-fade-up-delay-2">
            {hero.subheadline}
          </p>

          <p className="hero__reinforcement animate-fade-up-delay-3">
            {hero.reinforcement}
          </p>

          <div className="hero__cta-wrap animate-fade-up-delay-4">
            <a href={hero.ctaLink} className="btn-primary btn-large">
              {hero.ctaText}
            </a>
            <p className="hero__cta-sub">{hero.ctaSubtext}</p>
          </div>

          <div className="hero__trust animate-fade-up-delay-4">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">👁️</span>
              <span>Acesso instantâneo</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">🔒</span>
              <span>100% seguro</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">⭐</span>
              <span>+12k membros</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
