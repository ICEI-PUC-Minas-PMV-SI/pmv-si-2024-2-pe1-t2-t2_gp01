import { cadastrar_cliente } from "./funcao-cadastrar.js";

// aqui os campos digitados são atribuídos às suas respectivas variáveis, que serão usadas como parâmetro para a função que cadastra o cliente
let nome_cliente = document.getElementById("nome")
let sobrenome_cliente = document.getElementById("sobrenome")
let telefone_cliente = document.getElementById("telefone")
let email_cliente = document.getElementById("email")
let usuario_cliente = document.getElementById("usuario")
let senha_cliente = document.getElementById("senha")
let repita_senha_cliente = document.getElementById("repita-senha")

// aqui o botão do formulário de cadastrar é atribuído à sua variável, que será usada em conjunto com o "listener" do evento "click" para chamar a função de cadastrar o cliente
const botao_cadastrar = document.getElementById("botao-cadastrar")

botao_cadastrar.addEventListener("click", cadastrar_cliente(nome_cliente, sobrenome_cliente, telefone_cliente, email_cliente, usuario_cliente, senha_cliente, repita_senha_cliente))