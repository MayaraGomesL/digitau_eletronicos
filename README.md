<p align="center">
  <img src="projeto_digitau_eletronicos/img/logo/digitau-logo.svg" alt="DigitaU Eletrônicos" width="260">
</p>

<h1 align="center">DigitaU Eletrônicos</h1>

<p align="center">
  Site institucional de uma empresa fictícia de recondicionamento de eletrônicos.<br>
  Projeto acadêmico da disciplina <strong>Desenvolvimento de Front-End UX/UI</strong> – 1º semestre de IA (FMU).
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## Sobre o projeto

A **DigitaU Eletrônicos** é uma empresa fictícia que recebe teclados, mouses,
headsets, monitores, notebooks e servidores descartados, separa o que pode
voltar ao uso, recondiciona e testa cada item e entrega lotes prontos para
empresas, escolas e revendedores. A proposta gira em torno de quatro ideias:
**reciclar, reutilizar, inovar e preservar**.

O objetivo do trabalho é aplicar na prática o que vimos em aula de front-end e
UX/UI:

- estruturar páginas com **HTML semântico** (`header`, `nav`, `main`, `section`, `article`, `footer`);
- organizar o visual com **CSS** separado por página e uma paleta única definida em variáveis;
- adicionar comportamento simples com **JavaScript** puro;
- cuidar de **acessibilidade** e **usabilidade**: contraste, foco visível, navegação por teclado, textos alternativos e hierarquia de títulos;
- deixar o layout **responsivo** para celular, tablet e computador.

## Páginas

| Página | Arquivo | O que tem |
|---|---|---|
| **Home** | `index.html` | Apresentação da empresa, como o trabalho acontece em três etapas, diferenciais e o que entregamos |
| **Quem Somos** | `quem.html` | História, valores, missão e equipe |
| **Produtos e Serviços** | `produtos.html` | Processo "do sucateado ao pronto para o mercado", catálogo de produtos e serviços com botão de orçamento |
| **Contato** | `fale.html` | Formulário de contato e outros canais de atendimento |

## Tecnologias

| Tecnologia | Uso no projeto |
|---|---|
| **HTML5** | Estrutura e conteúdo das páginas, com tags semânticas e atributos de acessibilidade (`aria-label`, `aria-current`, `alt`) |
| **CSS3** | Layout com Flexbox, variáveis de cor em `:root`, tema escuro, transições e `@media` para telas menores |
| **JavaScript** (sem bibliotecas) | Validação e confirmação do formulário de contato e preenchimento automático do assunto pela URL |
| **SVG / WebP / JPG** | Logo e ícones vetoriais (baseados no [Lucide](https://lucide.dev)) e fotos otimizadas |

Não há framework, build nem dependências: são arquivos estáticos que rodam
direto no navegador.

### O que o JavaScript faz

Os botões **"Solicitar orçamento"** da página de produtos levam para
`fale.html?assunto=teclados` (ou `notebooks`, `servidores`...). Ao abrir o
formulário, o script lê esse parâmetro e já deixa o assunto selecionado. Ao
enviar, ele mostra uma mensagem de agradecimento com o primeiro nome da pessoa
e limpa os campos. Por enquanto o site não tem servidor, então a mensagem não
é enviada de verdade.

## Paleta de cores

| Cor | Hex | Variável |
|---|---|---|
| Fundo | `#101923` | `--cor-fundo` |
| Superfície | `#172633` | `--cor-superficie` |
| Verde | `#76A270` | `--cor-verde` |
| Dourado | `#CCA846` | `--cor-dourado` |
| Azul | `#1A4785` | `--cor-azul` |
| Azul claro | `#4D7A8F` | `--cor-azul-claro` |
| Texto | `#CFCFCF` | `--cor-texto` |

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/MayaraGomesL/digitau_eletronicos.git
   ```
2. Abra o arquivo `projeto_digitau_eletronicos/index.html` no navegador.

Se preferir, abra a pasta no VS Code e use a extensão **Live Server** para a
página recarregar sozinha a cada alteração.

## Estrutura do projeto

- 📁 **digitau_eletronicos/**
  - 📄 `README.md` — este arquivo
  - 📁 **docs/**
    - 📄 `melhorias-ux-ui.md` — revisão de UX/UI com as melhorias priorizadas
  - 📁 **projeto_digitau_eletronicos/** — o site
    - 🏠 `index.html` — Home
    - 👥 `quem.html` — Quem Somos
    - 🛒 `produtos.html` — Produtos e Serviços
    - ✉️ `fale.html` — Contato (formulário)
    - 📁 **css/**
      - 🎨 `style1.css` — estilos comuns a todas as páginas (paleta, header, botões, cartões, rodapé)
      - 🎨 `home.css` — exclusivos da Home
      - 🎨 `quem.css` — exclusivos de Quem Somos
      - 🎨 `produtos.css` — exclusivos de Produtos e Serviços
      - 🎨 `contato.css` — exclusivos de Contato
    - 📁 **js/**
      - ⚙️ `jscript1.js` — formulário de contato
    - 📁 **img/** — fotos dos produtos (WebP e JPG)
      - 📁 **icones/** — ícones SVG que substituem os emojis
      - 📁 **logo/** — logo e favicon

## Combinados do grupo

- **Nada de CSS dentro do HTML** (`<style>` ou `style="..."`). O que serve para
  mais de uma página vai em `css/style1.css`; o que é só de uma página vai no
  arquivo dela.
- **Cores só pelas variáveis** de `:root` em `style1.css` (`var(--cor-verde)` etc.).
  Assim a paleta muda em um lugar só.
- Cada página tem **um único `<h1>`**, o conteúdo fica dentro de `<main>` e o link
  da página atual no menu leva `aria-current="page"`.
- Imagens em **WebP ou JPG**, com até 1600px de largura e menos de 300 KB,
  sempre com `alt`, `width` e `height`.
- Ícones decorativos usam `alt=""` para o leitor de tela ignorá-los.
