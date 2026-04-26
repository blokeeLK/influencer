import { useState, useRef, useEffect, useCallback } from 'react'
import { SITE_CONFIG } from '../config'
import './Carousel.css'

export default function Carousel() {
  const { carousel } = SITE_CONFIG

  // Duplica para loop infinito
  const items = [...carousel, ...carousel, ...carousel]
  const total = carousel.length
  const offset = total

  const [index, setIndex] = useState(offset)
  const [animated, setAnimated] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const timerRef = useRef(null)
  const startXRef = useRef(null)

  // Detecta mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // No mobile: 1 card visível (100%). No desktop: 3 (33.33%)
  const CARD_W = isMobile ? 100 : 100 / 3

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setAnimated(true)
      setIndex(i => i + 1)
    }, 2800)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  // Loop infinito silencioso
  useEffect(() => {
    if (index >= offset + total) {
      const t = setTimeout(() => { setAnimated(false); setIndex(offset) }, 520)
      return () => clearTimeout(t)
    }
    if (index < offset) {
      const t = setTimeout(() => { setAnimated(false); setIndex(offset + total - 1) }, 520)
      return () => clearTimeout(t)
    }
  }, [index, offset, total])

  const goNext = () => { setAnimated(true); setIndex(i => i + 1); resetTimer() }
  const goPrev = () => { setAnimated(true); setIndex(i => i - 1); resetTimer() }
  const goTo   = (i) => { setAnimated(true); setIndex(offset + i); resetTimer() }

  const activeReal = ((index - offset) % total + total) % total

  // Swipe mobile
  const handleTouchStart = (e) => { startXRef.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (startXRef.current === null) return
    const diff = startXRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
    startXRef.current = null
  }

  return (
    <section className="carousel-section" id="preview">
      <div className="container">

        <div className="carousel-section__header">
          <span className="badge carousel-badge">✦ Só uma amostra…</span>
          <h2 className="carousel-title">
            Eu gravei algo que normalmente não mostro…
          </h2>
          <p className="carousel-subtitle">
            Isso aqui é só uma fração. O que tá lá dentro vai além do que você imagina.
          </p>
          <div className="carousel-divider" />
        </div>

        {/* Carrossel */}
        <div
          className="carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel__arrow carousel__arrow--prev" onClick={goPrev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="carousel__viewport">
            <div
              className="carousel__track"
              style={{
                transform: `translateX(-${index * CARD_W}%)`,
                transition: animated ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="carousel__card"
                  style={{ flex: `0 0 ${CARD_W}%` }}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className={`carousel__img${item.contain ? ' carousel__img--contain' : ''}`}
                    loading="lazy"
                  />
                  <div className="carousel__overlay">
                    <span className="carousel__label">{item.label}</span>
                  </div>
                  <div className="carousel__shine" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <button className="carousel__arrow carousel__arrow--next" onClick={goNext} aria-label="Próximo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="carousel__dots" role="tablist">
          {carousel.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot ${i === activeReal ? 'carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para item ${i + 1}`}
              role="tab"
              aria-selected={i === activeReal}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
