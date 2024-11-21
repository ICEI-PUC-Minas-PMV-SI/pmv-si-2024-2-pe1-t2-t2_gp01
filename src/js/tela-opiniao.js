document.addEventListener("DOMContentLoaded", () => {
    const botaoEnviar = document.getElementById("btn-enviar-opiniao");
    const formulario = document.getElementById("formulario-satisfacao");
    const selectFuncionario = document.getElementById("funcionarios");

    botaoEnviar.addEventListener("click", () => {
        // Obter os valores selecionados
        const funcionario = selectFuncionario.value;
        const pontualidade = formulario.querySelector('input[name="pontualidade"]:checked')?.value;
        const educacao = formulario.querySelector('input[name="educacao"]:checked')?.value;
        const qualidadeCorte = formulario.querySelector('input[name="qualidade-do-corte"]:checked')?.value;
        const opiniao = formulario.querySelector('textarea[name="opiniao"]').value;

        // Validação de campos obrigatórios
        if (!funcionario) {
            alert("Por favor, selecione um funcionário para avaliar.");
            return;
        }

        if (!opiniao.trim()) {
            alert("Por favor, escreva sua opinião.");
            return;
        }

        // Criar o objeto para salvar no LocalStorage
        const avaliacao = {
            funcionario,
            pontualidade,
            educacao,
            qualidadeCorte,
            opiniao
        };

        // Salvar no LocalStorage
        const avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];
        avaliacoes.push(avaliacao);
        localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));

        alert("Obrigado pela sua opinião!");
        formulario.reset();
    });
});
