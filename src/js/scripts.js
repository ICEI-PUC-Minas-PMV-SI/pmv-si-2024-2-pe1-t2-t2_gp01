import { cadastrar_cliente } from "./funcao-cadastrar.js";

// aqui os campos digitados são atribuídos às suas respectivas variáveis, que serão usadas como parâmetro para a função que cadastra o cliente
const nome_cliente = document.getElementById("nome").value
const sobrenome_cliente = document.getElementById("sobrenome").value
const telefone_cliente = document.getElementById("telefone").value
const email_cliente = document.getElementById("email").value
const usuario_cliente = document.getElementById("usuario").value
const senha_cliente = document.getElementById("senha").value
const repita_senha_cliente = document.getElementById("repita-senha").value

// aqui o botão do formulário de cadastrar é atribuído à sua variável, que será usada em conjunto com o "listener" do evento "click" para chamar a função de cadastrar o cliente
const botao_cadastrar = document.getElementById("botao-cadastrar")

console.log(nome_cliente,sobrenome_cliente,telefone_cliente,email_cliente,usuario_cliente,senha_cliente,repita_senha_cliente)


botao_cadastrar.addEventListener("click", function(evento) {
    
    evento.preventDefault()

    // aqui os campos digitados são atribuídos às suas respectivas variáveis, que serão usadas como parâmetro para a função que cadastra o cliente
    const nome_cliente = document.getElementById("nome").value
    const sobrenome_cliente = document.getElementById("sobrenome").value
    const telefone_cliente = document.getElementById("telefone").value
    const email_cliente = document.getElementById("email").value
    const usuario_cliente = document.getElementById("usuario").value
    const senha_cliente = document.getElementById("senha").value
    const repita_senha_cliente = document.getElementById("repita-senha").value

    // chama a função de cadastrar o cliente
    cadastrar_cliente(nome_cliente, sobrenome_cliente, telefone_cliente, email_cliente, usuario_cliente, senha_cliente, repita_senha_cliente)

})