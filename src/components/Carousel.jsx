import { useState, useRef, useEffect } from 'react'
import { SITE_CONFIG } from '../config'
import './Carousel.css'

export default function Carousel() {
  const { carousel } = SITE_CONFIG
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)
  const startXRef = useRef(null)

  // Auto-play: avança a cada 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % carousel.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [carousel.length])

  const goTo = (i) => setActiveIndex(i)
  const prev = () => setActiveIndex(i => (i - 1 + carousel.length) % carousel.length)
  const next = () => setActiveIndex(i => (i + 1) % carousel.length)

  // Suporte a swipe mobile
  const handleTouchStart = (e) => { startXRef.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (startXRef.current === null) return
    const diff = startXRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    startXRef.current = null
  }

  // Quantos cards ficam visíveis (responsivo via JS)
  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3

  return (
    <section className="carousel-section" id="preview">
      <div className="container">

        {/* Cabeçalho */}
        <div className="carousel-section__header">
          <span className="badge">✦ Prévia exclusiva</span>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            Um gostinho do que você vai receber
          </h2>
          <p className="section-subtitle" style={{ marginTop: 12 }}>
            Só quem faz parte tem acesso a esse nível de conteúdo. Veja uma pequena amostra do que espera por você.
          </p>
          <div className="section-divider" />
        </div>

        {/* Carrossel */}
        <div
          className="carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botão anterior */}
          <button className="carousel__arrow carousel__arrow--prev" onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Track com cards */}
          <div className="carousel__viewport" ref={trackRef}>
            <div
              className="carousel__track"
              style={{
                transform: `translateX(calc(-${activeIndex * (100 / visibleCount)}% ))`,
              }}
            >
              {carousel.map((item, i) => (
                <div
                  key={item.id}
                  className={`carousel__card ${i === activeIndex ? 'carousel__card--active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  {/* ✏️ Troque as imagens em src/config.js → carousel[].image */}
                  <img
                    src={item.image}
                    alt={item.label}
                    className="carousel__img"
                    loading="lazy"
                  />
                  {/* Overlay com gradiente + label */}
                  <div className="carousel__overlay">
                    <span className="carousel__label">{item.label}</span>
                  </div>
                  {/* Efeito de brilho no hover */}
                  <div className="carousel__shine" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          {/* Botão próximo */}
          <button className="carousel__arrow carousel__arrow--next" onClick={next} aria-label="Próximo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots de navegação */}
        <div className="carousel__dots" role="tablist">
          {carousel.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot ${i === activeIndex ? 'carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para item ${i + 1}`}
              role="tab"
              aria-selected={i === activeIndex}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
