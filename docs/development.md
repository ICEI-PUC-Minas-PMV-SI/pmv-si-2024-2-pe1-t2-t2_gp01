# Programação de Funcionalidades

-Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-002| A aplicação deve permitir que o cliente crie seu próprio cadastro|Kauê | tela-cadastro.html |
|RF-004| A aplicação deve permitir que o cliente edite seus próprios dados|Kauê | editar-informacoes.html |
|RF-006| O cliente deve ser capaz de escolher entre as opções de corte, barba e sobrancelha, inclusive dois ou mais desses itens simultaneamente| Danilo| agendamento.html|
|RF-008| O cliente deve ser capaz de registrar o horário definido na agenda de cortes, bem como qual funcionário foi escolhido para o serviço| Jessé| agendamento.html|
|RF-009|A aplicação deve ser capaz de exibir ofertas e promoções | Michael| promocoes.html|
|RF-010|A aplicação deve ser capaz de captar feedbacks do usuário por meio de campos com notas de 1 a 5 e de um campo de opinião por extenso | Kauê| opiniao.html|
|RF-011|A aplicação deve ser capaz de enviar um e-mail para uma pessoa indicada por um usuário já cadastrado, com o intuito de obter descontos caso essa indicação realize seu primeiro corte| Jessé| indicar-amigo.html|


# Descrição das estruturas:

# Agendamento de cortes
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Clique para selecionar | Múltipla Escolha | O usuário deverá selecionar o funcionário do qual deseja realizar a avaliação | Funcionário 1 |
| Escolha uma data | Calendário | O usuário deve escolher a data em que deseja realizar o seu agendamento | 28/10/2024 |
| Escolha um horário | Relógio | O usuário deve escolher o horário em que deseja realizar seu agendamento | 18:00 |

# Listagem de histório de cortes
## Agendamento
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Clique para selecionar | Múltipla Escolha | O usuário deverá selecionar o funcionário do qual deseja realizar a avaliação | Funcionário 1 |
| Escolha uma data | Calendário | O usuário deve escolher a data em que deseja realizar o seu agendamento | 28/10/2024 |
| Escolha um horário | Relógio | O usuário deve escolher o horário em que deseja realizar seu agendamento | 18:00 |

# Cadastro e Login
## Cadastro 
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome            | Texto  | primeiro nome       | João |
| Sobrenome   | Texto         | Sobrenome de cada cliente      |        Breno  |
| Telefone   | Telefone           | Numero de telefone de cada cliente        |        31 983227258  |
| Email    | Email   | Endereço de eletronico do cliente       |        Joao.j51@gmail.com  |
| Nome de usuário           | Texto  | Nome de usuário único para cada cliente        | Joaozinho_1998 |
| Senha     | Password             | Senha para entrada no sistema        |        Amoapuc1919!   |
| Repita sua senha      | Password             |O usuario deve repetir a senha       |        Amoapuc1919!   |
## Login 
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome de usuário           | Texto  | Nome de usuário único para cada cliente        | Joaozinho_1998 |
| Senha      | Password             | Senha para entrada no sistema        |        Amoapuc1919!   |

# Personalização de Perfil
## Editar informações
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Nome | Texto | O usuário deve inserir o seu primeiro nome | João |
| Sobrenome | Texto | O usuário deve inserir o seu sobrenome | Marques |
| Telefone | Telefone (número) | O usuário deve inserir o seu número de telefone | 31983227358 |
| E-mail | E-mail (texto) | O usuário deve inserir o seu endereço eletrônico | joao.j51@gmail.com
| Usuário | Texto | O usuário deve inserir seu nome de usuário unico | Joaozinho_1998 |
## Mudar senha
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Digite sua nova senha | Password | O usuário deve inserir sua nova senha desejada | Jotinha123 |
| Repita sua nova senha | Password | O usuário deve repetir sua nova senha desejada | Jotinha123 |

# Deixe sua opinião
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Clique para selecionar | Múltipla Escolha | O usuário deverá selecionar o funcionário do qual deseja realizar a avaliação | Funcionário 1 |
| Pontualidade | Nota | O usuário deverá pontuar a pontualidade do funcionário com uma nota entre 1 e 5. | 2 |
| Educação | Nota | O usuário deverá pontuar a educação do funcionário com uma nota entre 1 e 5. | 5 |
| Qualidade do corte | Nota | O usuário deverá pontuar a qualidade do corte do funcionário com uma nota entre 1 e 5 | 5 |
| Conte-nos mais sobre sua experiência na Det's | Texto | O usuário deverá discrever um pouco sobre sua experiência na barbearia | Gostei muito de cortar o cabelo na barbearia Det's, o atendimento e corte de cabelo são excelentes |

## Ofertas e Promoções
# Faça seu cadastro e ganhe 20% de desconto =)
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Ir para o cadastro | Botão | O usuário clicará no botão e será direcionado para tela de cadastro | Cadastro realizado com o e-mail joao.j51@gmail.com recebeu os 20% de desconto. |
# Indique um amigo e ganhe 20% de desconto =D
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Indicar amigo | Botão | O usuário clicará no botão e será redirecionado para tela de indicação | Indicação realizada e enviada para Fernando Pereira de e-mail fernandoprr87@gmail.com |

# Indicar amigo
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Nome | Texto | O usuário deve inserir o nome da pessoa cujo ele está indicando a barbearia | Fernando Pereira |
| E-mail | E-mail (texto) | O usuário deve inserir o e-mail da pessoa cujo ele está indicando a barbearia | fernandoprr87@gmail.com |
| Escreva uma mensagem para o seu amigo | Texto | O usuário deverá deixar um recado, o qual será enviado ao correio eletrônico da pessoa cujo ele está indicando. | Fernando, essa barbearia é ótima, marque um agendamento e vá conhecer mais |