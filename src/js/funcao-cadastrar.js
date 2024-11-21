import { classe_cliente } from "./classe-cliente.js"

export function cadastrar_cliente(id, nome, sobrenome, telefone, email, usuario, senha, repita_senha) {

    if (senha !== repita_senha) {

        alert("As senhas digitadas não estão iguais. Repita o procedimento.")

        return

    } else {

        let cliente = new classe_cliente(id, nome, sobrenome, telefone, email, usuario, senha)

        confirm(`O cliente ${cliente.nome} ${cliente.sobrenome} foi cadastrado. Seu id é ${cliente.id}. Telefone: ${cliente.telefone}. E-mail: ${cliente.email}. Nome de usuário: ${cliente.usuario}. Agora você será redirecionado para a tela de login.`)

        classe_cliente.vetor_clientes.push(cliente)

        localStorage.setItem("lista de clientes", JSON.stringify(classe_cliente.vetor_clientes))

        window.location.href = "/src/tela-login.html"

    }
}

