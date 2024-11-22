window.onload = function () {

    const lista_de_cortes = document.getElementById("lista")

    const meus_agendamentos = JSON.parse(localStorage.getItem("meus serviços")) || []



    if (meus_agendamentos.length === 0) {

        const div_item_da_lista = document.createElement("div")

        div_item_da_lista.classList.add("container-item")

        lista_de_cortes.appendChild(div_item_da_lista)

        const item_da_lista = document.createElement("li")

        item_da_lista.classList.add("item-da-lista")

        div_item_da_lista.appendChild(item_da_lista)

        const mensagem_lista_vazia = document.createElement("p")
        mensagem_lista_vazia.classList.add("mensagem-lista-vazia")
        item_da_lista.appendChild(mensagem_lista_vazia)
        mensagem_lista_vazia.innerText = "Não há agendamentos a serem exibidos no momento."

    } else {


        let i

        for (i = 0; i < meus_agendamentos.length; i++) {

            const div_item_da_lista = document.createElement("div")

            div_item_da_lista.classList.add("container-item")

            lista_de_cortes.appendChild(div_item_da_lista)

            const item_da_lista = document.createElement("li")

            item_da_lista.classList.add("item-da-lista")

            div_item_da_lista.appendChild(item_da_lista)

            //label da data
            const label_data = document.createElement("p")
            label_data.classList.add("label-data")
            item_da_lista.appendChild(label_data)
            label_data.innerText = "Data: "

            //data em si
            const valor_data = meus_agendamentos[i].data
            const data = document.createElement("p")
            data.classList.add("data")
            item_da_lista.appendChild(data)
            data.innerText = valor_data

            //separador 1
            const separador_1 = document.createElement("p")
            separador_1.classList.add("separador-1")
            item_da_lista.appendChild(separador_1)
            separador_1.innerText = " __"

            //label-horário
            const label_horario = document.createElement("p")
            label_horario.classList.add("label-horario")
            item_da_lista.appendChild(label_horario)
            label_horario.innerText = "Horário: "

            //horário em si
            const valor_horario = meus_agendamentos[i].hora
            const horario = document.createElement("p")
            horario.classList.add("horario")
            item_da_lista.appendChild(horario)
            horario.innerText = valor_horario

            //separador 2
            const separador_2 = document.createElement("p")
            separador_2.classList.add("separador-2")
            item_da_lista.appendChild(separador_2)
            separador_2.innerText = " __ "

            //label-funcionario
            const label_funcionario = document.createElement("p")
            label_funcionario.classList.add("label-funcionario")
            item_da_lista.appendChild(label_funcionario)
            label_funcionario.innerText = "Funcionário: "

            //funcionário em si
            const valor_funcionario = meus_agendamentos[i].nome_funcionario
            const funcionario = document.createElement("p")
            funcionario.classList.add("funcionario")
            item_da_lista.appendChild(funcionario)
            funcionario.innerText = valor_funcionario

            //separador 3
            const separador_3 = document.createElement("p")
            separador_3.classList.add("separador-3")
            item_da_lista.appendChild(separador_3)
            separador_3.innerText = " __ "

            //cabelo
            const valor_cabelo = meus_agendamentos[i].cabelo
            const cabelo = document.createElement("p")
            cabelo.classList.add("cabelo")
            item_da_lista.appendChild(cabelo)


            console.log(cabelo)
            if (valor_cabelo) {

                console.log("entrou no cabelo sim")
                cabelo.innerText = "Cabelo: sim"

            } else {

                console.log("entrou no cabelo não")
                cabelo.innerText = "Cabelo: não"
            }

            //separador 4
            const separador_4 = document.createElement("p")
            separador_4.classList.add("separador-4")
            item_da_lista.appendChild(separador_4)
            separador_4.innerText = " __ "

            //sobrancelha
            const valor_sobrancelha = meus_agendamentos[i].sobrancelha
            const sobrancelha = document.createElement("p")
            sobrancelha.classList.add("sobrancelha")
            item_da_lista.appendChild(sobrancelha)

            if (valor_sobrancelha) {

                console.log("entrou no sobrancelha sim")
                sobrancelha.innerText = "Sobrancelha: sim"
            } else {

                console.log("entrou no sobrancelha não")
                sobrancelha.innerText = "Sobrancelha: não"
            }

            //separador 5
            const separador_5 = document.createElement("p")
            separador_5.classList.add("separador-5")
            item_da_lista.appendChild(separador_5)
            separador_5.innerText = " __ "

            //barba
            const valor_barba = meus_agendamentos[i].barba
            const barba = document.createElement("p")
            barba.classList.add("barba")
            item_da_lista.appendChild(barba)

            if (valor_barba) {

                console.log("entrou no barba sim")
                barba.innerText = "Barba: sim"
            } else {

                console.log("entrou no barba não")
                barba.innerText = "Barba: não"
            }

            //separador 6
            const separador_6 = document.createElement("p")
            separador_6.classList.add("separador-6")
            item_da_lista.appendChild(separador_6)
            separador_6.innerText = " __ "

            //status
            const status = document.createElement("p")
            status.classList.add("status")
            item_da_lista.appendChild(status)

            let data_atual = new Date().toLocaleDateString("pt-br")
            let hora_atual = new Date().toLocaleTimeString("pt-br", { hour: "numeric", minute: "numeric" })

            if (meus_agendamentos[i].data < data_atual) {

                status.innerText = "Status: realizado"

            } else {

                if (meus_agendamentos[i].data === data_atual) {

                    if (meus_agendamentos[i].hora < hora_atual) {

                        status.innerText = "Status: realizado"
                    } else {

                        status.innerText = "Status: a ser realizado"
                    }
                } else {

                    status.innerText = "Status: a ser realizado"
                }
            }

        }
    }

}


