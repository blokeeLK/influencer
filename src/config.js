// ============================================================
// ARQUIVO DE CONFIGURAÇÃO CENTRAL
// ✏️ Edite este arquivo para personalizar toda a landing page
// ============================================================

export const SITE_CONFIG = {
  // ─── NOME / MARCA ─────────────────────────────────────────
  // ✏️ Troque pelo nome da sua influencer ou marca
  name: 'Sofia Rivera',
  tagline: 'Conteúdo Exclusivo',

  // ─── VÍDEO PRINCIPAL ──────────────────────────────────────
  // ✏️ Cole aqui o embed do YouTube ou Vimeo
  // Exemplo YouTube: https://www.youtube.com/embed/SEU_VIDEO_ID
  // Exemplo Vimeo:   https://player.vimeo.com/video/SEU_VIDEO_ID
  heroVideo: {
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    // ✏️ Troque pela thumbnail do seu vídeo (aparece antes de carregar)
    thumbnail: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80',
  },

  // ─── HERO / TOPO ─────────────────────────────────────────
  hero: {
    // ✏️ Headline principal — frase de impacto
    headline: 'Eu preparei algo\nespecial pra você',
    // ✏️ Subheadline — aprofunda a proposta
    subheadline: 'Separei conteúdos que não mostro em lugar nenhum. Se você chegou até aqui, é porque merece ver.',
    // ✏️ Texto de reforço — cria urgência ou prova social
    reinforcement: '+ de 12.000 pessoas já entraram. Vem também.',
    // ✏️ Texto do botão CTA principal
    ctaText: '👉 QUERO MEU ACESSO AGORA',
    // ✏️ Link do botão CTA — coloque o link do Hotmart, Kiwify, etc.
    ctaLink: '#oferta',
    // ✏️ Texto pequeno abaixo do botão (ex: garantia, segurança)
    ctaSubtext: '🔒 Pagamento 100% seguro · Acesso imediato',
  },

  // ─── CARROSSEL DE PRÉVIAS ─────────────────────────────────
  // ✏️ Troque as URLs pelas suas imagens reais (use Unsplash, seu servidor, etc.)
  carousel: [
    {
      id: 1,
      // ✏️ Troque pela sua imagem real
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80',
      label: 'Conteúdo Exclusivo',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=600&q=80',
      label: 'Bastidores',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80',
      label: 'Extras Especiais',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80',
      label: 'Materiais Inéditos',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
      label: 'Momentos Únicos',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80',
      label: 'Área VIP',
    },
  ],

  // ─── O QUE VOCÊ VAI RECEBER ───────────────────────────────
  // ✏️ Edite cada entrega com título, descrição e ícone (emoji ou SVG)
  deliverables: [
    {
      id: 1,
      icon: '🎬',
      title: 'Conteúdo Principal Completo',
      description: 'Acesso imediato a todo o conteúdo principal em alta resolução, disponível 24h por dia.',
    },
    {
      id: 2,
      icon: '✨',
      title: 'Materiais Exclusivos',
      description: 'Conteúdos que ela não posta em nenhuma outra plataforma. Só para quem faz parte.',
    },
    {
      id: 3,
      icon: '🎁',
      title: 'Bônus Surpresa',
      description: 'Conteúdos extras que chegam periodicamente. Cada semana tem algo novo esperando por você.',
    },
    {
      id: 4,
      icon: '🔄',
      title: 'Atualizações Constantes',
      description: 'Novos conteúdos adicionados regularmente. Você sempre vai ter algo novo para aproveitar.',
    },
    {
      id: 5,
      icon: '💬',
      title: 'Acesso Prioritário',
      description: 'Mensagens e interações com ela diretamente. Uma conexão real, sem intermediários.',
    },
    {
      id: 6,
      icon: '🏆',
      title: 'Comunidade VIP',
      description: 'Faça parte de um grupo seleto. Interações exclusivas e conteúdos compartilhados só entre membros.',
    },
  ],

  // ─── BÔNUS ───────────────────────────────────────────────
  // ✏️ Texto de abertura da seção de bônus
  bonusIntro: 'Eu resolvi liberar algo que normalmente eu não mostro assim…',

  // ✏️ Lista de itens do bônus (ícone + texto)
  bonuses: [
    {
      id: 1,
      icon: '🔥',
      title: 'Meu ensaio completo pra você ver à vontade, sem limitações',
    },
    {
      id: 2,
      icon: '📖',
      title: 'Playboy +500 em Full HD completa',
    },
    {
      id: 3,
      icon: '📚',
      title: 'Revista Sexy +500 completa',
    },
    {
      id: 4,
      icon: '🎯',
      title: 'E ainda um conteúdo especial sobre controle e conquista que pode mudar totalmente seu jogo',
    },
  ],

  // ✏️ Aviso de escassez abaixo da lista
  bonusWarning: 'Tudo isso incluso no seu acesso… mas não sei até quando vou deixar disponível assim.',

  // ─── OFERTA / PREÇOS ──────────────────────────────────────
  offer: {
    // ✏️ Título da seção de oferta
    title: 'Oferta por Tempo Limitado',
    // ✏️ Subtítulo com urgência
    subtitle: 'Esta condição especial expira hoje à meia-noite.',
    // ✏️ Preço original (riscado)
    originalPrice: 'R$ 97,00',
    // ✏️ Preço promocional (em destaque)
    promoPrice: 'R$ 19,90',
    // ✏️ Período ou frequência (ex: /mês, único, /ano)
    period: '/mês',
    // ✏️ Texto de urgência
    urgencyText: '⚡ Apenas hoje neste valor',
    // ✏️ Texto do botão CTA da oferta
    ctaText: 'GARANTIR MEU ACESSO AGORA →',
    // ✏️ Link do botão CTA da oferta
    ctaLink: 'https://SEU_LINK_DE_PAGAMENTO_AQUI.com',
    // ✏️ Texto de segurança / garantia
    guarantee: '✅ Satisfação garantida · Cancele quando quiser · Suporte 24h',
  },

  // ─── RODAPÉ ───────────────────────────────────────────────
  footer: {
    // ✏️ Texto de direitos reservados
    copyright: '© 2024 Sofia Rivera. Todos os direitos reservados.',
    // ✏️ Links do rodapé — troque os hrefs pelos seus links reais
    links: [
      { label: 'Suporte', href: 'mailto:suporte@seusite.com' },
      { label: 'Política de Privacidade', href: '/privacidade' },
      { label: 'Termos de Uso', href: '/termos' },
    ],
  },
}
