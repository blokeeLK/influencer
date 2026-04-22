import { SITE_CONFIG } from '../config'
import './Footer.css'

export default function Footer() {
  const { footer, name } = SITE_CONFIG

  return (
    <footer className="footer">
      <div className="container footer__container">

        {/* Marca */}
        <div className="footer__brand">
          <span className="footer__logo">✦</span>
          <span className="footer__name">{name}</span>
        </div>

        {/* Links */}
        <nav className="footer__nav" aria-label="Links do rodapé">
          {footer.links.map((link, i) => (
            <a key={i} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="footer__copy">{footer.copyright}</p>

        {/* Aviso legal */}
        <p className="footer__disclaimer">
          Este site não possui nenhum vínculo com plataformas de terceiros. Todo o conteúdo é de propriedade exclusiva da criadora. Ao acessar, você concorda com os termos de uso.
        </p>

      </div>
    </footer>
  )
}
