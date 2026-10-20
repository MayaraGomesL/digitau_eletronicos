// Filtro de cards por categoria (usado em servicos.html e produtos.html).
// Cada card tem data-categoria="..." e cada botão tem data-filtro="...".
// Sem JavaScript a página continua funcionando: todos os cards aparecem
// e a barra de filtro fica escondida (atributo hidden no HTML).

const filtro = document.querySelector('.filtro');

if (filtro) {
    const botoes = filtro.querySelectorAll('button');
    const cards = document.querySelectorAll('.card[data-categoria]');
    const status = document.querySelector('.filtro-status');

    filtro.hidden = false; // JS carregou, então mostra o filtro

    botoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const categoria = botao.dataset.filtro;
            let visiveis = 0;

            // Marca só o botão clicado como ativo
            botoes.forEach(function (b) {
                b.setAttribute('aria-pressed', b === botao ? 'true' : 'false');
            });

            // Esconde os cards de outras categorias
            cards.forEach(function (card) {
                const mostrar = categoria === 'todos' || card.dataset.categoria === categoria;
                card.hidden = !mostrar;
                if (mostrar) {
                    visiveis++;
                }
            });

            // Avisa leitores de tela quantos itens estão visíveis
            status.textContent = 'Mostrando ' + visiveis + ' de ' + cards.length;
        });
    });
}
