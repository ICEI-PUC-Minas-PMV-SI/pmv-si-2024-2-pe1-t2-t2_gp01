export class classe_funcionario {

    static vetor_funcionarios = JSON.parse(localStorage.getItem("lista de funcionários")) || []
    static servicos_agendados = JSON.parse(localStorage.getItem("todos os serviços agendados")) || []
    
    nome 

    constructor (nome) {

        this.nome = nome
       
    }
}




