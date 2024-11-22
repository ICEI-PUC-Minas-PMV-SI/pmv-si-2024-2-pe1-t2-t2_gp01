import { classe_cliente } from "./classe-cliente.js"

let i 

let minha_lista = new Array()
let contador = 0

export function listar_cortes (email){

minha_lista = []

for(i = 0; i < classe_cliente.servicos_agendados.length; i++) {

    if(classe_cliente.servicos_agendados[i].email_cliente === email){

        minha_lista.push(classe_cliente.servicos_agendados[i])
        contador ++

        console.log(email)
        console.log("item adicionado")
        console.log(`iteração ${i+1}`)
    }   
}

localStorage.setItem("meus serviços", JSON.stringify(minha_lista))

}
