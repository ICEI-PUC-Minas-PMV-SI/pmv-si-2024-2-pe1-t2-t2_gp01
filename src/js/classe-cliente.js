export class classe_cliente {

    static numero_de_clientes = 0

    nome 
    sobrenome
    telefone
    email
    usuario
    senha

    servicos_agendados = []

    constructor (nome, sobrenome, telefone, email, usuario, senha) {

        this.nome = nome
        this.sobrenome = sobrenome
        this.telefone = telefone
        this.email = email
        this.usuario = usuario
        this.senha = senha

        classe_cliente.numero_de_clientes ++

    }
    
    // Método que vai editar os dados de um objeto cliente já existente
    editar_cliente (novo_nome,novo_sobrenome, novo_telefone, novo_email, novo_usuario){

        this.nome = novo_nome
        this.sobrenome = novo_sobrenome
        this.telefone = novo_telefone
        this.email = novo_email
        this.usuario = novo_usuario

    }

    // Método que vai mudar a senha de um objeto cliente já existente:
    mudar_senha(nova_senha){

    //OBS: tem que colocar um IF aqui pra testar se a senha e a senha repetira são iguais

    this.senha = nova_senha

    }
}