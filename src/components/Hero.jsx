import { useState, useRef, useEffect } from 'react'
import { SITE_CONFIG } from '../config'
import { trackEvent, withUtms } from '../useTracking'
import './Hero.css'

export default function Hero() {
  const { hero, name } = SITE_CONFIG
  const videoRef = useRef(null)
  const [showSoundHint, setShowSoundHint] = useState(true)
  const [showReplay, setShowReplay]       = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {})

    // Some o hint após 4s
    const t = setTimeout(() => setShowSoundHint(false), 4000)

    // Ao terminar, mostra replay
    const onEnded = () => setShowReplay(true)
    video.addEventListener('ended', onEnded)

    return () => {
      clearTimeout(t)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  const handleVideoClick = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    setShowSoundHint(false)
  }

  const handleReplay = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    video.muted = false
    video.play().catch(() => {})
    setShowReplay(false)
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-glow" />
      </div>

      <div className="container hero__container">

        {/* ── Vídeo ── */}
        <div className="hero__video-col animate-fade-up">
          <div className="hero__video-wrapper" onClick={handleVideoClick}>
            {/* ✏️ Troque substituindo public/vls.mp4 */}
            <video
              ref={videoRef}
              className="hero__video"
              src="/vls.mp4"
              poster="/video-thumb.jpg"
              playsInline
              preload="metadata"
            />

            <div className={`hero__sound-hint ${showSoundHint ? 'hero__sound-hint--visible' : 'hero__sound-hint--hidden'}`}>
              <span>🔊</span>
              <span>Clique para ativar o som</span>
            </div>



            <div className="hero__video-badge">✦ Conteúdo Exclusivo</div>
          </div>
        </div>

        {/* ── Copy ── */}
        <div className="hero__copy-col">
          <span className="hero__eyebrow animate-fade-up">
            ✦ Oferta por tempo limitado
          </span>

          <h1 className="hero__headline animate-fade-up-delay-1">
            Tem coisas minhas aqui que você{' '}
            <em>nunca viu de verdade…</em>
          </h1>

          <p className="hero__subheadline animate-fade-up-delay-2">
            O que eu mostro lá dentro não vai ficar disponível pra sempre.
          </p>

          <div className="hero__bullets animate-fade-up-delay-3">
            {['Conteúdo exclusivo', 'Acesso imediato', 'Sem enrolação', 'Só aqui'].map(b => (
              <div key={b} className="hero__bullet">
                <span className="hero__bullet-dot" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="hero__cta-wrap animate-fade-up-delay-4">
            <div className="hero__social-pill">
              <span className="hero__social-dot" />
              <span>🔥 Pessoas entrando agora · ⭐ 4.9/5 · 🔒 100% seguro</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
