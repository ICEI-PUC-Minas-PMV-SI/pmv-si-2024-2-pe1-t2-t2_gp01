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


## Descrição das estruturas:

## Login 
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome de usuário           | Texto  | Nome de usuário único para cada cliente        | Joaozinho_1998 |
| Senha      | Password             | Senha para entrada no sistema        |        Amoapuc1919!   |

## Cadastro 
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome            | Texto  | primeiro nome       | João |
| Sobrenome   | Texto         | Sobrenome de cada cliente      |        Breno  |
| Telefone   | Telefone           | Numero de telefone de cada cliente        |        31 9832272586  |
| Email    | Email   | Endereço de eletronico do cliente       |        Joao.j51@gmail.com  |
| Nome de usuário           | Texto  | Nome de usuário único para cada cliente        | Joaozinho_1998 |
| Senha     | Password             | Senha para entrada no sistema        |        Amoapuc1919!   |
| Repita sua senha      | Password             |O usuario deve repetir a senha       |        Amoapuc1919!   |

