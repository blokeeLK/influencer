import { useState, useRef, useEffect } from 'react'
import { SITE_CONFIG } from '../config'
import { trackEvent, withUtms } from '../useTracking'
import './Hero.css'

export default function Hero() {
  const { hero } = SITE_CONFIG
  const headlineLines = hero.headline.split('\n')
  const videoRef = useRef(null)

  // Controla visibilidade da mensagem "Clique para ativar o som"
  const [showSoundHint, setShowSoundHint] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Tenta autoplay mutado (compatibilidade máxima)
    video.muted = true
    video.play().catch(() => {})

    // Some a mensagem após 4 segundos automaticamente
    const timer = setTimeout(() => {
      setShowSoundHint(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // Ao clicar no vídeo: ativa o som e esconde a mensagem
  const handleVideoClick = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    setShowSoundHint(false)
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
      </div>

      <div className="container hero__container">

        {/* ── COLUNA ESQUERDA: Vídeo ── */}
        <div className="hero__video-col animate-fade-up">
          <div className="hero__video-wrapper" onClick={handleVideoClick}>

            {/* ✏️ Troque o vídeo substituindo public/vls.mp4 */}
            <video
              ref={videoRef}
              className="hero__video"
              src="/vls.mp4"
              poster="/video-thumb.jpg"
              controls
              playsInline
              preload="metadata"
              /* Sem loop — roda 1x só */
            />

            {/* Mensagem "Clique para ativar o som" */}
            <div
              className={`hero__sound-hint ${showSoundHint ? 'hero__sound-hint--visible' : 'hero__sound-hint--hidden'}`}
              aria-hidden={!showSoundHint}
            >
              <span className="hero__sound-hint-icon">🔊</span>
              <span>Clique para ativar o som</span>
            </div>

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
            <a
              href={withUtms(hero.ctaLink)}
              className="btn-primary btn-large"
              onClick={() => trackEvent('cta_hero_click', { location: 'hero' })}
            >
              {hero.ctaText}
            </a>
            <p className="hero__cta-sub">{hero.ctaSubtext}</p>
            {/* Micro prova social em tempo real */}
            <div className="hero__social-pill">
              <span className="hero__social-dot" />
              <span>🔥 Pessoas entrando agora · ⭐ 4.9/5 · 🔒 100% seguro</span>
            </div>
          </div>

          <div className="hero__trust animate-fade-up-delay-4">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✔</span>
              <span>Conteúdo exclusivo</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✔</span>
              <span>Acesso imediato</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✔</span>
              <span>Sem enrolação</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✔</span>
              <span>Só aqui</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
