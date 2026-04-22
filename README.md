# ✦ Landing Page Premium — Influencer

Projeto completo de landing page estática, construída com **React + Vite**, pronta para deploy no **Render** via **GitHub**.

---

## 📁 Estrutura de Pastas

```
landing-page/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Carousel.jsx / Carousel.css
│   │   ├── WhatYouGet.jsx / WhatYouGet.css
│   │   ├── Bonus.jsx / Bonus.css
│   │   ├── Offer.jsx / Offer.css
│   │   └── Footer.jsx / Footer.css
│   ├── styles/
│   │   └── global.css
│   ├── config.js       ← ✏️ EDITE AQUI: todos os textos, links, preços e imagens
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## ✏️ Como personalizar

Abra o arquivo `src/config.js` e edite:

- **Nome / marca** da influencer
- **Link do vídeo** principal (YouTube ou Vimeo embed)
- **Imagens** do carrossel
- **Headline, subheadline** e textos de reforço
- **Lista de entregas** (deliverables)
- **Bônus** (títulos, descrições, ícones)
- **Preço original** e **preço promocional**
- **Link do botão CTA** (Hotmart, Kiwify, etc.)
- **Rodapé** (links de suporte, política, termos)

---

## 🚀 1. Instalar dependências

```bash
cd landing-page
npm install
```

---

## 💻 2. Rodar localmente

```bash
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 📦 3. Fazer o build de produção

```bash
npm run build
```

Isso gera a pasta `dist/` com os arquivos estáticos prontos para publicar.

Para testar o build localmente antes de subir:

```bash
npm run preview
```

---

## 🐙 4. Subir no GitHub

```bash
# Dentro da pasta landing-page
git init
git add .
git commit -m "feat: landing page premium"

# Crie um repositório no GitHub e conecte:
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

---

## ☁️ 5. Publicar no Render (Static Site)

> **Render é gratuito** para Static Sites. Siga os passos:

1. Acesse [render.com](https://render.com) e faça login
2. Clique em **"New +"** → **"Static Site"**
3. Conecte sua conta do **GitHub**
4. Selecione o repositório criado
5. Configure:

| Campo | Valor |
|-------|-------|
| **Name** | `influencer-landing` (ou o nome que quiser) |
| **Branch** | `main` |
| **Root Directory** | *(deixe vazio se subiu só a pasta `landing-page`)* |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

6. Clique em **"Create Static Site"**
7. Aguarde o deploy (leva ~2 minutos)
8. Acesse a URL gerada pelo Render 🎉

---

## 🔄 Deploy automático

Após configurado, toda vez que você fizer `git push` no GitHub, o Render atualiza o site automaticamente.

---

## 🛠️ Tecnologias

- [React 18](https://react.dev)
- [Vite 5](https://vitejs.dev)
- CSS puro (sem Tailwind, sem dependências extras)
- Google Fonts: Inter + Playfair Display

---

## 📞 Suporte

Edite o link de suporte em `src/config.js` → `footer.links`.
