import Hero from './components/Hero'
import Carousel from './components/Carousel'
import WhatYouGet from './components/WhatYouGet'
import Bonus from './components/Bonus'
import Offer from './components/Offer'
import Footer from './components/Footer'

// ============================================================
// APP PRINCIPAL — Landing Page da Influencer
// Todas as configurações estão em src/config.js
// ============================================================

export default function App() {
  return (
    <main>
      {/* 1. Hero com vídeo e copy principal */}
      <Hero />

      {/* 2. Carrossel de prévias */}
      <Carousel />

      {/* 3. O que você vai receber */}
      <WhatYouGet />

      {/* 4. Bônus exclusivos */}
      <Bonus />

      {/* 5. Oferta final com CTA */}
      <Offer />

      {/* 6. Rodapé */}
      <Footer />
    </main>
  )
}
