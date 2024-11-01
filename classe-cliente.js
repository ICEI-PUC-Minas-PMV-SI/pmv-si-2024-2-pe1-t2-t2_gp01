export class cliente {

    nome 
    sobrenome
    telefone
    email
    usuario
    senha

    servicos_agendados = []

    
    // Método que vai editar os dados de um objeto cliente já existente
    editar_cliente (nome_,sobrenome_, telefone_, email_, usuario_){

        this.nome = nome_
        this.sobrenome = sobrenome_
        this.telefone = telefone_
        this.email = email_
        this.usuario = usuario_

    }

    // Método que vai mudar a senha de um objeto cliente já existente:
    mudar_senha(nova_senha){

    this.senha = nova_senha

    }
}