# digitau_eletronicos
Projeto acadêmico de Desenvolvimento de Front-End UX/UI do 1º Semestre de IA

## Estrutura

```
projeto_digitau_eletronicos/
├── index.html        Home
├── quem.html         Quem Somos
├── produtos.html     Produtos e Serviços
├── fale.html         Contato (formulário)
├── css/
│   ├── style1.css    estilos comuns a todas as páginas (paleta, header, botões, cartões, rodapé)
│   ├── home.css      exclusivos da Home
│   ├── quem.css      exclusivos de Quem Somos
│   ├── produtos.css  exclusivos de Produtos e Serviços
│   └── contato.css   exclusivos de Contato
├── js/
│   └── jscript1.js   formulário de contato
└── img/
    ├── icones/       ícones SVG (substituem os emojis)
    └── logo/         logo e favicon
```

## Combinados do grupo

- **Nada de CSS dentro do HTML** (`<style>` ou `style="..."`). O que serve para
  mais de uma página vai em `css/style1.css`; o que é só de uma página vai no
  arquivo dela.
- **Cores só pelas variáveis** de `:root` em `style1.css` (`var(--cor-verde)` etc.).
  Assim a paleta muda em um lugar só.
- **Nada de JavaScript dentro do HTML** (`<script>` com código ou `onclick`).
  O código vai em `js/` e é carregado com `<script src="..." defer>`.
- Cada página tem **um único `<h1>`**, o conteúdo fica dentro de `<main>` e o link
  da página atual no menu leva `aria-current="page"`.
- Imagens em **WebP ou JPG**, com até 1600px de largura e menos de 300 KB,
  sempre com `alt`, `width` e `height`.
- Ícones decorativos usam `alt=""` para o leitor de tela ignorá-los.
