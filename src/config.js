// ============================================================
// ARQUIVO DE CONFIGURAÇÃO CENTRAL
// ✏️ Edite este arquivo para personalizar toda a landing page
// ============================================================

export const SITE_CONFIG = {
  // ─── NOME / MARCA ─────────────────────────────────────────
  // ✏️ Troque pelo nome da sua influencer ou marca
  name: 'Manu Roots',
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
    // ✏️ Linha 2 fica em itálico azul automaticamente
    headline: 'Tem coisas minhas aqui\nque nunca deixei\nem lugar nenhum.',
    subheadline: 'Quem entra vê tudo — sem cortes, sem filtro, sem limite.',
    reinforcement: '🔥 Mais de 12 mil já entraram. Alguns até se arrependeram de ter demorado.',
    ctaText: '👁️ QUERO VER TUDO AGORA',
    ctaLink: '#oferta',
    ctaSubtext: '🔒 Acesso imediato · Pagamento 100% seguro',
  },

  // ─── CARROSSEL DE PRÉVIAS ─────────────────────────────────
  // ✏️ Troque as URLs pelas suas imagens reais (use Unsplash, seu servidor, etc.)
  carousel: [
    { id: 1, image: '/foto1.jpg', label: 'Esse foi só um momento…',         position: 'center top'    },
    { id: 2, image: '/foto2.jpg', label: 'Aqui começa a ficar interessante', position: 'center center' },
    { id: 3, image: '/foto3.jpg', label: 'Esse eu quase não posto…',         position: 'center top'    },
    { id: 4, image: '/foto4.jpg', label: 'Nunca mostrei isso antes',         position: 'center top'    },
  ],

  // ─── O QUE VOCÊ VAI RECEBER ───────────────────────────────
  // ✏️ Edite cada entrega em config.js → deliverables[]
  deliverables: [
    { id: 1, icon: '🔓', title: 'Acesso completo sem censura', description: 'Sem cortes. Sem filtros. Tudo que eu gravo vai direto pra você.' },
    { id: 2, icon: '🙈', title: 'Só existe aqui', description: 'Nem no Instagram, nem em outro lugar. Exclusivo pra quem entra.' },
    { id: 3, icon: '🎬', title: 'Gravei só pra quem é de dentro', description: 'Momentos que guardei pra esse espaço. Você vai entender quando ver.' },
    { id: 4, icon: '🔥', title: 'Novidades toda semana', description: 'Sempre algo novo chegando. Você recebe em primeira mão.' },
    { id: 5, icon: '💬', title: 'Acesso direto a mim', description: 'Sem intermediário. Uma conexão real — do jeito que eu gosto.' },
    { id: 6, icon: '🏆', title: 'Seleto de propósito', description: 'Esse espaço não é pra qualquer um. Mas você chegou até aqui.' },
  ],

  // ─── BÔNUS ───────────────────────────────────────────────
  bonusIntro: 'Resolvi liberar coisas que eu normalmente guardaria só pra mim…',

  bonuses: [
    {
      id: 1,
      icon: '🔥',
      title: 'Meu ensaio completo pra você ver sem limite — do começo ao fim',
    },
    {
      id: 2,
      icon: '📸',
      title: '+500 fotos que eu nunca postei abertas. Nada cortado.',
    },
    {
      id: 3,
      icon: '📖',
      title: 'Playboy completa em Full HD — cada página, cada detalhe',
    },
    {
      id: 4,
      icon: '📚',
      title: 'Revista Sexy completa — conteúdo que normalmente eu guardo só pra mim',
    },
    {
      id: 5,
      icon: '🎯',
      title: 'Conteúdo especial sobre controle e conquista — isso muda seu jogo',
    },
  ],

  bonusWarning: 'Tudo incluso no seu acesso… não sei até quando deixo assim.',

  // ─── OFERTA / PREÇOS ──────────────────────────────────────
  offer: {
    // ✏️ Título da seção de oferta
    title: 'Se sair dessa página, talvez não encontre esse valor de novo.',
    subtitle: 'Esse preço não vai durar. Não é papo de marketing — é real.',
    originalPrice: 'R$ 97,00',
    promoPrice: 'R$ 19,90',
    period: '',
    urgencyText: '⚡ Oferta pode encerrar a qualquer momento',
    ctaText: '🔥 LIBERAR MEU ACESSO AGORA',
    ctaLink: 'https://pay.cakto.com.br/kgoxovy_862945',
    guarantee: '✅ Acesso imediato · Cancele quando quiser · Suporte 24h',
  },

  // ─── RODAPÉ ───────────────────────────────────────────────
  footer: {
    // ✏️ Texto de direitos reservados
    copyright: '© 2024 Manu Roots. Todos os direitos reservados.',
    // ✏️ Links do rodapé — troque os hrefs pelos seus links reais
    links: [
      { label: 'Suporte', href: 'mailto:suporte@seusite.com' },
      { label: 'Política de Privacidade', href: '/privacidade' },
      { label: 'Termos de Uso', href: '/termos' },
    ],
  },
}
