import { SITE_CONFIG } from '../config'
import './Bonus.css'

export default function Bonus() {
  const { bonuses } = SITE_CONFIG

  // Soma o valor total dos bônus para mostrar o valor percebido
  const totalValue = bonuses
    .map(b => parseFloat(b.value.replace('Valor: R$', '').replace(',', '.')))
    .reduce((a, c) => a + c, 0)
    .toFixed(2)
    .replace('.', ',')

  return (
    <section className="bonus" id="bonus">
      {/* Fundo com padrão decorativo */}
      <div className="bonus__bg" aria-hidden="true">
        <div className="bonus__bg-glow" />
      </div>

      <div className="container">

        {/* Cabeçalho */}
        <div className="bonus__header">
          <span className="badge">✦ Surpresas incluídas</span>
          <h2 className="section-title bonus__title" style={{ marginTop: 16 }}>
            Bônus exclusivos para você
          </h2>
          <p className="section-subtitle" style={{ marginTop: 12 }}>
            Além de tudo, você ainda leva esses presentes especiais — sem custo adicional.
          </p>
          <div className="section-divider" />
        </div>

        {/* Cards de bônus */}
        <div className="bonus__list">
          {bonuses.map((bonus, i) => (
            <div key={bonus.id} className="bonus__card" style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Número / Badge */}
              <div className="bonus__number">
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>

              {/* Ícone */}
              <div className="bonus__icon-wrap">
                <span className="bonus__icon" role="img" aria-label={bonus.title}>
                  {bonus.icon}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="bonus__content">
                <span className="bonus__badge-tag">{bonus.badge}</span>
                {/* ✏️ Edite bônus em src/config.js → bonuses[] */}
                <h3 className="bonus__item-title">{bonus.title}</h3>
                <p className="bonus__item-desc">{bonus.description}</p>
                <span className="bonus__value">{bonus.value}</span>
              </div>

              {/* Indicador de gratuito */}
              <div className="bonus__free-tag" aria-hidden="true">GRÁTIS</div>
            </div>
          ))}
        </div>

        {/* Valor total percebido */}
        <div className="bonus__total">
          <p className="bonus__total-label">Valor total dos bônus:</p>
          <p className="bonus__total-value">R$ {totalValue}</p>
          <p className="bonus__total-sub">Tudo incluso na sua assinatura hoje</p>
        </div>

      </div>
    </section>
  )
}
