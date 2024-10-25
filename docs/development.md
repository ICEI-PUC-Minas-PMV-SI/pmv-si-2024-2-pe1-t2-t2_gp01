# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-002| A aplicação deve permitir que o cliente crie seu próprio cadastro|Kauê | tela-cadastro.html |
|RF-004| A aplicação deve permitir que o cliente edite seus próprios dados|Filipe| editar-informacoes.html |
|RF-006| O cliente deve ser capaz de escolher entre as opções de corte, barba e sobrancelha, inclusive dois ou mais desses itens simultaneamente| Danilo| agendamento.html|
|RF-008| O cliente deve ser capaz de registrar o horário definido na agenda de cortes, bem como qual funcionário foi escolhido para o serviço| Jessé| agendamento.html|
|RF-009|A aplicação deve ser capaz de exibir ofertas e promoções | Michael| promocoes.html|
|RF-010|A aplicação deve ser capaz de captar feedbacks do usuário por meio de campos com notas de 1 a 5 e de um campo de opinião por extenso | Franz| opiniao.html|
|RF-011|A aplicação deve ser capaz de enviar um e-mail para uma pessoa indicada por um usuário já cadastrado, com o intuito de obter descontos caso essa indicação realize seu primeiro corte| Jessé| indicar-amigo.html|

# Descrição das estruturas:

## Agendamento de cortes
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Clique para selecionar |Lista de seleção de opções | O usuário deverá selecionar o funcionário com o qual deseja realizar o serviço| Funcionário 1 |
| Escolha uma data | Data | O usuário deve escolher a data em que deseja realizar o seu agendamento | 28/10/2024 |
| Escolha um horário | Hora | O usuário deve escolher o horário em que deseja realizar seu agendamento | 18:00 |
| Escolha quais serviços você deseja agendar| Caixa de seleção | O usuário pode escolher, simultaneamente ou não, entre os serviços de corte, sobrancelha e barba| Corte de cabelo|

## Cadastro 
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome            | Texto  | Primeiro nome de cada cliente   | João |
| Sobrenome   | Texto         | Sobrenome de cada cliente      |        Marques  |
| Telefone   | Telefone           | Número de telefone de cada cliente        |        31 983227258  |
| E-mail    | Email   | Endereço eletrônico de cada cliente       |        joao.j51@gmail.com  |
| Nome de usuário           | Texto  | Nome de usuário único para cada cliente        | Joaozinho_1998 |
| Senha     | Password             | Senha para entrada no sistema        |        Amoapuc1919!   |
| Repita sua senha      | Password             |O usuario deve repetir a senha       |        Amoapuc1919!   |

## Login 
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome de usuário           | Texto  | Nome de usuário único para cada cliente        | Joaozinho_1998 |
| Senha      | Password             | Senha para entrada no sistema        |        Amoapuc1919!   |

## Editar informações
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Nome | Texto | O usuário deve inserir o seu primeiro nome | João |
| Sobrenome | Texto | O usuário deve inserir o seu sobrenome | Marques |
| Telefone | Telefone | O usuário deve inserir o seu número de telefone | 31 983227358 |
| E-mail | Email | O usuário deve inserir o seu endereço eletrônico | joao.j51@gmail.com
| Usuário | Texto | O usuário deve inserir seu nome de usuário unico | Joaozinho_1998 |

## Mudar senha
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Digite sua nova senha | Password | O usuário deve inserir sua nova senha desejada | Jotinha123 |
| Repita sua nova senha | Password | O usuário deve repetir sua nova senha desejada | Jotinha123 |

## Opinião
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Clique para selecionar |Lista de seleção de opções | O usuário deverá selecionar o funcionário que deseja avaliar | Funcionário 1 |
| Pontualidade | Botão tipo rádio | O usuário deverá pontuar a pontualidade do funcionário com uma nota entre 1 e 5. | 2 |
| Educação | Botão tipo rádio| O usuário deverá pontuar a educação do funcionário com uma nota entre 1 e 5. | 5|
| Qualidade do corte | Botão tipo rádio | O usuário deverá pontuar a qualidade do corte do funcionário com uma nota entre 1 e 5 | 5 |
| Conte-nos mais sobre sua experiência na Det's | Área de texto para digitação | O usuário deverá descrever um pouco sobre sua experiência na barbearia | Gostei muito de cortar o cabelo na barbearia Det's, o atendimento e corte de cabelo são excelentes |

## Indicar amigo
| **Nome** | **Tipo** | **Descrição** | **Exemplo** |
|:--------:|:--------:|:-------------:|:-----------:|
| Nome | Texto | O usuário deve inserir o nome da pessoa indicada | Fernando |
| E-mail | Email | O usuário deve inserir o e-mail da pessoa indicada | fernandoprr87@gmail.com |
| Escreva uma mensagem para o seu amigo | Área de texto para digitação | O usuário deverá deixar um recado que será enviado ao correio eletrônico da pessoa que ele está indicando | Fernando, essa barbearia é ótima, marque um agendamento e vá conhecer mais! |
