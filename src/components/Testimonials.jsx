import './Testimonials.css'

// ✏️ Edite os depoimentos aqui
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos R.',
    time: 'hoje',
    avatar: 'C',
    message: 'Manuzinha, que FOTOS QUE VOCÊ VIU... Parabéns, docinho! 📸❤️',
    reply: 'Muito obrigado, meu amor <3',
    tag: 'Cliente verificado',
  },
  {
    id: 2,
    name: 'Thiago M.',
    time: 'hoje',
    avatar: 'T',
    message: 'Uau... a qualidade é incrível, sério.',
    reply: 'Gosto de fazer as coisas de forma diferente... não gosto de coisas básicas.',
    tag: 'Cliente verificado',
  },
  {
    id: 3,
    name: 'Rafael S.',
    time: 'hoje',
    avatar: 'R',
    message: 'Vale muito mais do que paguei, facilmente.',
    reply: 'Me esforcei muito para fazer tudo ficar bom... fico feliz que você tenha notado 😌',
    tag: 'Cliente verificado',
  },
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
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonials__card reveal">

              {/* Header do card */}
              <div className="testimonials__card-header">
                <div className="testimonials__avatar">{t.avatar}</div>
                <div className="testimonials__info">
                  <span className="testimonials__name">{t.name}</span>
                  <span className="testimonials__tag">✓ {t.tag}</span>
                </div>
                <span className="testimonials__time">{t.time}</span>
              </div>

              {/* Mensagem do cliente */}
              <div className="testimonials__bubble testimonials__bubble--client">
                <p>{t.message}</p>
              </div>

              {/* Resposta da Manu */}
              <div className="testimonials__bubble testimonials__bubble--manu">
                <p>{t.reply}</p>
                <span className="testimonials__check">✓✓</span>
              </div>

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
