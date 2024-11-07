import { classe_cliente } from "./classe-cliente.js";


export function cadastrar_cliente(nome, sobrenome, telefone, email, usuario, senha, repita_senha) {

    // if (senha === repita_senha) {

         let cliente_1 = new classe_cliente(nome, sobrenome, telefone, email, usuario, senha)

         confirm(`O cliente ${cliente_1.nome} ${cliente_1.sobrenome} foi cadastrado. Telefone: ${cliente_1.telefone}. E-mail: ${cliente_1.email}. Nome de usuário: ${cliente_1.usuario}.`)

    // } else {

    //     alert("As senhas digitadas não estão iguais. Repita o procedimento.")

    //     return
    // }

}

