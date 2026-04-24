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
    headline: 'Isso aqui não é\npra todo mundo…',
    subheadline: 'Tem coisas aqui que eu nunca postei em lugar nenhum. Só quem entra consegue ver tudo — sem cortes.',
    reinforcement: 'Milhares já viram… alguns até se arrependeram de não ter entrado antes.',
    ctaText: '🔥 ENTRAR E VER SEM RESTRIÇÕES',
    ctaLink: '#oferta',
    ctaSubtext: '🔒 Acesso imediato · Pagamento 100% seguro',
  },

  // ─── CARROSSEL DE PRÉVIAS ─────────────────────────────────
  // ✏️ Troque as URLs pelas suas imagens reais (use Unsplash, seu servidor, etc.)
  carousel: [
    {
      id: 1,
      image: '/foto1.png',
      label: 'Esse foi só um momento…',
    },
    {
      id: 2,
      image: '/foto2.png',
      label: 'Aqui começa a ficar interessante',
    },
    {
      id: 3,
      image: '/foto3.png',
      label: 'Esse eu quase não posto…',
    },
    {
      id: 4,
      image: '/foto4.png',
      label: 'Nunca mostrei isso antes',
    },
  ],

  // ─── O QUE VOCÊ VAI RECEBER ───────────────────────────────
  // ✏️ Edite cada entrega com título, descrição e ícone (emoji ou SVG)
  deliverables: [
    {
      id: 1,
      icon: '🔓',
      title: 'Acesso completo sem censura',
      description: 'Tudo que eu gravo vai direto pra você. Sem cortes, sem filtros, sem limitações.',
    },
    {
      id: 2,
      icon: '🙈',
      title: 'Conteúdos que não deixo em lugar nenhum',
      description: 'Nem no Instagram, nem em nenhuma outra plataforma. Só aqui, só pra quem entra.',
    },
    {
      id: 3,
      icon: '🎬',
      title: 'Coisas que eu gravei só pra quem entra',
      description: 'Momentos que eu escolhi guardar pra esse espaço. Você vai entender quando ver.',
    },
    {
      id: 4,
      icon: '🔥',
      title: 'Novos conteúdos toda semana',
      description: 'Não é arquivo parado. Sempre tem algo novo chegando — e você recebe tudo em primeira mão.',
    },
    {
      id: 5,
      icon: '💬',
      title: 'Acesso direto a mim',
      description: 'Sem intermediário. Sem filtro. Uma conexão real — do jeito que eu gosto.',
    },
    {
      id: 6,
      icon: '🏆',
      title: 'Parte de algo que poucos têm',
      description: 'Esse espaço é seleto de propósito. Não é pra qualquer um. Mas você chegou até aqui.',
    },
  ],

  // ─── BÔNUS ───────────────────────────────────────────────
  // ✏️ Texto de abertura da seção de bônus
  bonusIntro: 'Decidi liberar algumas coisas que normalmente eu guardo só pra mim…',

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
    title: 'Se sair dessa página, pode não encontrar esse valor de novo.',
    subtitle: 'Esse valor some hoje. Não é papo de marketing — é real.',
    originalPrice: 'R$ 97,00',
    promoPrice: 'R$ 19,90',
    period: '/mês',
    urgencyText: '⚡ Esse valor some hoje',
    ctaText: '🔥 LIBERAR MEU ACESSO AGORA',
    ctaLink: 'https://SEU_LINK_DE_PAGAMENTO_AQUI.com',
    guarantee: '✅ Acesso imediato · Cancele quando quiser · Suporte 24h',
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
