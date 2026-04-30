import { useState, useEffect, useRef } from 'react'
import './SocialProof.css'

const NAMES = [
  'Carlos', 'João', 'Mateus', 'Pedro', 'Rafael',
  'Lucas', 'Gustavo', 'Thiago', 'Felipe', 'Bruno',
  'Daniel', 'Henrique', 'Gabriel', 'Rodrigo', 'André',
  'Caio', 'Vinicius', 'Eduardo', 'Marcelo', 'Leandro',
]

function getRandomName(exclude) {
  const filtered = NAMES.filter(n => n !== exclude)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

export default function SocialProof() {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const lastNameRef = useRef('')

  useEffect(() => {
    // Primeira exibição após 5s para não atrapalhar o carregamento
    const firstDelay = setTimeout(() => showNotification(), 5000)
    return () => clearTimeout(firstDelay)
  }, [])

  function showNotification() {
    const next = getRandomName(lastNameRef.current)
    lastNameRef.current = next
    setName(next)
    setVisible(true)

    // Some após 6 segundos
    const hideTimer = setTimeout(() => {
      setVisible(false)

      // Próxima notificação: 20s após sumir
      const nextTimer = setTimeout(() => showNotification(), 20000)
      return () => clearTimeout(nextTimer)
    }, 6000)

    return () => clearTimeout(hideTimer)
  }

  if (!name) return null

  return (
    <div
      className={`social-proof ${visible ? 'social-proof--in' : 'social-proof--out'}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="social-proof__avatar">
        {name.charAt(0)}
      </div>
      <div className="social-proof__text">
        <span className="social-proof__name">{name}</span>
        <span className="social-proof__msg">
          Acabou de comprar o acesso exclusivo por{' '}
          <strong>R$15,90</strong>
        </span>
      </div>
      <div className="social-proof__badge">✓</div>
    </div>
  )
}
