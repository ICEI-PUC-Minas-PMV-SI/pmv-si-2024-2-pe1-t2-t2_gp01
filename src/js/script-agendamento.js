import { agendar } from "./funcao-agendar.js"

const botao_agendar = document.getElementById("agendamento-botao")

botao_agendar.addEventListener("click", function(evento){

    evento.preventDefault()

    const email_cliente = JSON.parse(localStorage.getItem("cliente logado")) 
    const nome_funcionario = document.getElementById("funcionarios").value

    const dia_bruto = document.getElementById("data").value
    const dia_split = dia_bruto.split('-')
    const dia = `${dia_split[2]}/${dia_split[1]}/${dia_split[0]}`

    const hora = document.getElementById("hora").value
    const hora_split = hora.split(':')
    const hora_inteira = parseInt(hora_split[0])

    const id_temporal = Date.parse(dia_bruto) + hora_inteira

    const cabelo = document.getElementById("cabelo").checked
    const sobrancelha = document.getElementById("sobrancelha").checked
    const barba = document.getElementById("barba").checked

    if(nome_funcionario === "" || dia === "" || hora ==="" || ((cabelo || barba || sobrancelha) === false)){

        alert("Para que consigamos agendar seu serviço, é necessário selecionar um funcionário, uma data, um horário e pelo menos 1 dos 3 serviços disponíveis.")

        return

    } else {

        if(email_cliente){

            agendar(email_cliente, nome_funcionario, dia, hora, cabelo, sobrancelha, barba, id_temporal)

        } else {
        
            alert("Você não está logado! Faça o login para agendar seu atendimento. Você será redirecionado.")

            this.window.location.href = "/src/tela-login.html"
        }  
    } 
})
