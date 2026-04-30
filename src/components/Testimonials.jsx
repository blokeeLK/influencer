import './Testimonials.css'

// ✏️ Troque os arquivos por dep1.png, dep2.png, dep3.png na pasta public/
const IMAGES = [
  { id: 1, src: '/dep1.png', alt: 'Depoimento de cliente 1' },
  { id: 2, src: '/dep2.png', alt: 'Depoimento de cliente 2' },
  { id: 3, src: '/dep3.png', alt: 'Depoimento de cliente 3' },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">

        <div className="testimonials__header reveal">
          <span className="badge">💬 O que estão dizendo</span>
          <h2 className="section-title" style={{ marginTop: '14px' }}>
            Quem entrou <em>não se arrependeu</em>
          </h2>
          <div className="section-divider" style={{ margin: '14px auto 0' }} />
        </div>

        <div className="testimonials__grid">
          {IMAGES.map((img) => (
            <div key={img.id} className="testimonials__card reveal">
              <img
                src={img.src}
                alt={img.alt}
                className="testimonials__img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="testimonials__note reveal">
          🔒 Prints reais de clientes · Identidades preservadas
        </p>

      </div>
    </section>
  )
}
