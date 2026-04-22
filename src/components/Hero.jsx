import { useState } from 'react'
import { SITE_CONFIG } from '../config'
import './Hero.css'

export default function Hero() {
  const { hero, heroVideo, name } = SITE_CONFIG
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Quebra de linha no headline via \n
  const headlineLines = hero.headline.split('\n')

  return (
    <section className="hero" id="inicio">
      {/* Fundo decorativo com gradiente */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
      </div>

      <div className="container hero__container">

        {/* ── COLUNA ESQUERDA: Vídeo ── */}
        <div className="hero__video-col animate-fade-up">
          <div className="hero__video-wrapper">
            {/* Thumbnail enquanto o iframe não carrega */}
            {!videoLoaded && (
              <div
                className="hero__video-thumb"
                style={{ backgroundImage: `url(${heroVideo.thumbnail})` }}
                onClick={() => setVideoLoaded(true)}
                role="button"
                aria-label="Reproduzir vídeo"
              >
                <div className="hero__play-btn">
                  <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="hero__video-label">▶ Assista agora</div>
              </div>
            )}

            {/* ✏️ Troque a URL do vídeo em src/config.js → heroVideo.url */}
            {videoLoaded && (
              <iframe
                className="hero__iframe"
                src={`${heroVideo.url}?autoplay=1&rel=0&modestbranding=1`}
                title={`Vídeo de ${name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

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

          {/* Indicadores de confiança */}
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
