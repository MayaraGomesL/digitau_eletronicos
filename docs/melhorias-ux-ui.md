# Melhorias de UX/UI – DigitaU Eletrônicos

Revisão das páginas **Home** (`index.html`), **Quem Somos** (`quem.html`) e
**Produtos e Serviços** (`produtos.html`), feita sobre a `main` de 28/10/2026.

Regra da revisão: **não mudar a identidade visual** (paleta, tema escuro e fonte Arial).
O logo já foi aplicado na branch `feature/logo-digitau`. Os itens abaixo ficam
para uma **nova branch**.

Prioridade: 🔴 alta (afeta acesso ou conversão) · 🟡 média (consistência e manutenção) · 🟢 baixa (refino)

---

## 🔴 Alta prioridade

### 1. Páginas sem `<h1>` (consequência da troca do logo)
- **Onde:** as 3 páginas.
- **Problema:** antes o `<h1>` era o nome da empresa no header. Com o logo em imagem, nenhuma página tem `<h1>`, e o título real do topo continua `<h2>`.
- **Por que importa:** leitores de tela e o Google usam o `<h1>` para saber do que a página trata. Deve haver **um `<h1>` por página**, com o título principal.
- **Como corrigir:** no topo de cada página, trocar o `<h2>` da seção `.inicio` por `<h1>`. No CSS, trocar `.inicio h2` por `.inicio h1`.

### 2. Contraste insuficiente na faixa final (`.chamada` / `.faixa`)
- **Onde:** Home e Produtos (`.chamada`), Quem Somos (`.faixa`).
- **Problema:** o degradê termina em `#4D7A8F`, onde ficam o texto e o botão.

  | Combinação | Contraste | Mínimo WCAG AA |
  |---|---|---|
  | texto `#CFCFCF` sobre `#4D7A8F` | **3,00:1** ❌ | 4,5:1 |
  | botão verde `#76A270` sobre `#4D7A8F` | **1,60:1** ❌ | 3:1 (componente) |
  | título branco sobre `#4D7A8F` | 4,67:1 ✅ | 4,5:1 |

- **Como corrigir sem mudar a paleta:** escurecer o ponto onde o conteúdo fica, por exemplo invertendo o degradê:
  ```css
  .chamada { background: linear-gradient(100deg, #4D7A8F, #1A4785); } /* botão fica sobre o azul */
  .chamada p { color: #FFFFFF; }
  ```
  Ou usar fundo sólido `#1A4785`: o texto `#CFCFCF` passa a ter 5,90:1 ✅.

### 3. Etiqueta verde sobre azul com contraste baixo
- **Onde:** `.etiqueta` ("TECNOLOGIA COM PROPÓSITO" etc.) sobre o fim azul do degradê do topo.
- **Problema:** `#76A270` sobre `#1A4785` dá **3,14:1** ❌ para texto de 13px.
- **Como corrigir:** aumentar para 16px em negrito (vale a regra de 3:1 para texto grande) ou usar `#CFCFCF` (5,90:1 ✅).

### 4. Todos os botões levam para uma página de Contato vazia
- **Onde:** "Solicitar orçamento", "Fale conosco" e o menu "Contato" → `fale.html`.
- **Problema:** o caminho principal de conversão termina numa página sem conteúdo. O visitante (a persona Jorge) desiste.
- **Como corrigir:** criar `fale.html` no mesmo padrão visual, com um formulário (nome, e-mail, empresa, mensagem, todos com `<label>`), canais de contato e horário.

### 5. Imagens muito pesadas
- **Onde:** Produtos. `img/geral.png` tem **3,0 MB** e `img/teclados.png` **2,8 MB**.
- **Problema:** no 4G a página demora vários segundos para carregar.
- **Como corrigir:** exportar em JPG ou WebP com qualidade ~80 e largura máxima de 1600px (alvo: menos de 300 KB cada). Manter os atributos `width`/`height`.

---

## 🟡 Média prioridade

### 6. CSS repetido dentro de cada página (~250 linhas)
- **Problema:** o mesmo CSS foi copiado nas 3 páginas e já está divergindo:
  - `a:focus-visible` só existe em Produtos;
  - o padding de toque do menu no celular falta em Produtos;
  - `margin-top` do rodapé só existe em Quem Somos.
- **Como corrigir:** mover o CSS comum para `css/style1.css` (já existe e está vazio) e ligar com `<link rel="stylesheet" href="css/style1.css">`. Deixar no `<style>` só o que for exclusivo da página.

### 7. Emojis usados como ícones (♻️ ⚙ 💡 💻 🔧 ✅ 💰 🌱)
- **Problema:** mudam de aparência em cada sistema (Windows, Android, iPhone) e o leitor de tela lê o nome ("símbolo de reciclagem universal").
- **Como corrigir:** usar ícones SVG no mesmo estilo de traço, com `aria-hidden="true"`.

### 8. Cards informativos "levantam" no hover
- **Onde:** `.cartao:hover { transform: translateY(-6px) }`.
- **Problema:** o card parece clicável, mas não é (falsa affordance).
- **Como corrigir:** nos cards sem link, manter só a mudança de borda. Deixar o movimento para botões.

### 9. Animações sem respeitar quem prefere menos movimento
```css
@media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
}
```

### 10. Estrutura semântica incompleta
- Falta `<main>` envolvendo o conteúdo entre `<header>` e `<footer>`.
- Falta `aria-label="Menu principal"` no `<nav>`.
- A Home não tem `class="ativo"` nem `aria-current="page"` no link "Home"; Quem Somos tem `ativo`, mas não `aria-current`.
- `lang="pt-br"` em Quem Somos deve ser `lang="pt-BR"`, como nas outras.

### 11. Inconsistências entre páginas
- O rodapé da Home não tem os links de navegação que Quem Somos e Produtos têm.
- Há estilos inline no rodapé (`style="color: #CFCFCF;"`) e `style="padding-top: 0;"` nas seções: mover para classes.
- A Home não tem `<meta name="description">`.

---

## 🟢 Baixa prioridade / conteúdo

### 12. Textos vagos na Home
- O painel "DigitaU / Tech" e o card "Soluções tecnológicas: *Exploramos ideias…*" dizem pouco. A persona Jorge quer objetividade: o que a empresa entrega, para quem e com qual garantia.
- **Sugestão:** usar nos cards da Home os mesmos produtos e serviços reais (lotes de teclados, notebooks e servidores, triagem e testes), cada um com link.

### 13. Botão da Home aponta para o lugar genérico
- "Veja nossos serviços →" vai para `produtos.html`. Deve ir para `produtos.html#servicos`.

### 14. Comparação com o wireframe
- O rascunho previa um resumo de Quem Somos e as 3 vantagens em círculos na Home. Não é erro, mas vale decidir em grupo se mantém o wireframe ou o layout atual.

### 15. Divergência de fonte com o Trello
- O Trello indica Verdana; o site usa Arial. A decisão foi **manter Arial**: atualizar o card do Trello para a documentação ficar coerente.

---

## ✅ O que já está bom (manter)
- A paleta está aplicada com consistência e o tema escuro é coerente em todas as páginas.
- Os textos principais têm bom contraste (texto `#CFCFCF` sobre o fundo: 11,4:1).
- Produtos usa `alt` descritivo, `figure`/`figcaption`, `loading="lazy"` e `width`/`height` nas imagens.
- O layout é responsivo com `flex-wrap` e não tem rolagem horizontal no celular.
- O código é bem comentado, o que ajuda o grupo na manutenção.

---

## Logo (já aplicado em `feature/logo-digitau`)
Arquivos em `projeto_digitau_eletronicos/img/logo/`:

| Arquivo | Uso |
|---|---|
| `digitau-logo.svg` | header do site (fundo escuro) |
| `digitau-logo-claro.svg` | documentos, slides com fundo branco |
| `digitau-logo-branco.svg` | sobre fotos ou fundos coloridos |
| `digitau-simbolo.svg` | favicon e avatar |
| `*.png` | versões para slides, Trello e redes sociais (fundo transparente) |

O conceito é o **U de cabo**: um cabo verde dobrado em forma de U, com um plug numa ponta e uma seta dourada na outra. A seta indica o reaproveitamento, o equipamento "voltando para cima". O texto foi convertido em curvas (fonte com as mesmas medidas da Arial), então o logo aparece igual em qualquer computador.
