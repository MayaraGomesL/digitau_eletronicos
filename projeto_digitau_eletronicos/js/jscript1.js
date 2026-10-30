/* =========================================================
   DigitaU Eletrônicos – scripts do site
   Carregado com "defer": roda depois que o HTML foi lido.
   ========================================================= */

/* ---------- Formulário de contato (fale.html) ---------- */
function iniciarFormularioContato() {
    const formulario = document.getElementById('form-contato');

    // Esta página não tem o formulário: não há nada a fazer
    if (!formulario) {
        return;
    }

    preencherAssuntoPelaUrl(formulario);

    // O navegador só dispara o "submit" se os campos obrigatórios
    // estiverem preenchidos e o e-mail for válido.
    formulario.addEventListener('submit', function (evento) {
        // O site ainda não tem servidor para receber a mensagem, então
        // por enquanto só confirmamos na tela.
        // TODO: enviar os dados para um backend ou serviço de formulários.
        evento.preventDefault();

        const nome = formulario.elements.nome.value.trim();
        const primeiroNome = nome.split(' ')[0];
        const status = document.getElementById('form-status');

        status.textContent = 'Obrigado, ' + primeiroNome +
            '! Recebemos sua mensagem e vamos responder pelo e-mail informado.';

        formulario.reset();
    });
}

/* Os botões "Solicitar orçamento" levam para fale.html?assunto=teclados
   (ou notebooks, servidores...). Aqui o assunto já vem escolhido. */
function preencherAssuntoPelaUrl(formulario) {
    const assunto = new URLSearchParams(window.location.search).get('assunto');
    const campo = formulario.elements.assunto;

    const opcaoExiste = Array.from(campo.options).some(function (opcao) {
        return opcao.value === assunto;
    });

    if (assunto && opcaoExiste) {
        campo.value = assunto;
    }
}

iniciarFormularioContato();
