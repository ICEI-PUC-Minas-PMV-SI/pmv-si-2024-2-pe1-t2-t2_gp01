# Especificações do Projeto_

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas
  

  

Nome: João 

Idade: 24 anos 

Ocupação: Gerente de Marketing 

Localização**: Área urbana (por exemplo, São Paulo) 

Estilo de Vida**: Ocupado, focado na carreira, adepto da tecnologia 

Renda: $40.000 por ano 

  

 Histórico: 

Alex é um jovem profissional que valoriza sua aparência, mas tem uma agenda ocupada devido aos compromissos do trabalho e  sociais. Ele frequentemente encontra dificuldades para agendar horarios em meio ao seu estilo de vida corrido. 

  

Objetivos: 

- Manter um corte de cabelo estiloso e uma rotina de cuidados sem gastar muito tempo. 

- Encontrar e agendar facilmente compromissos em barbearias próximas. 

- Acessar conselhos de estilo e tendências. 

- Ler avaliações e classificações sobre barbeiros e suas especialidades. 

  

Dificuldades/Problemas: 

- Dificuldade em encontrar horários disponíveis que se ajustem à sua agenda. 

- Frustração com longos tempos de espera nas barbearias. 

- Sentir-se sobrecarregado com muitas opções sem recomendações adequadas. 

- Experiências inconsistentes dependendo da barbearia. 

  

Funcionalidades que atraem Alex: 

- Agendamento Online: Uma interface amigável que permite agendar compromissos rapidamente. 

- Lembretes e Notificações: Alertas para compromissos futuros ou quando é hora de um corte. 

- Perfil de barbeiros: Informações sobre diferentes barbeiros, seus estilos e avaliações de clientes. 

- Programas de fidelidade e descontos: Incentivos para clientes recorrentes ou indicações. 

- Inspiração de estilo: Uma galeria de cortes de cabelo em tendência para inspirar seu próximo visual. 

  

 Plataformas preferidas: 

- Aplicativo móvel (Android e iOS) 

- Mídias sociais (Instagram para inspiração de estilo) 

 
## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o administrador cadastre os funcionários da barbearia | ALTA |  
|RF-002| A aplicação deve permitir que o cliente crie seu próprio cadastro  | ALTA | 
|RF-003| A aplicação deve permitir que o administrador edite os dados dos funcionários da barbearia |MÉDIA|
|RF-004| A aplicação deve permitir que o cliente edite seus próprios dados |MÉDIA|
|RF-005| A aplicação deve permitir que o cliente visualize seu histórico de cortes |ALTA|
|RF-006| A aplicação deve permitir que o cliente visualize seu histórico de valores pagos |ALTA|
|RF-007| O cliente deve ser capaz de escolher entre as opções de corte, barba e sobrancelha, inclusive dois ou mais desses itens simultaneamente |ALTA|
|RF-008| A aplicação deve exibir os horários disponíveis e os horários não disponíveis de cada funcionário para o prazo mínimo de 2 meses |ALTA|
|RF-009| O cliente deve ser capaz de registrar o horário definido na agenda de cortes, bem como qual funcionário foi escolhido para o serviço |ALTA|

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva |BAIXA| 
|RNF-002| A aplicação deve ser desenvolvida utilizando as linguagens HTML, CSS e JavaScript |ALTA| 
|RNF-003| As telas da aplicação devem conter informações claras e inequívocas, sem excesso de conteúdo |ALTA|
|RNF-004| Os formulários devem ser intuitivos e de fácil compreensão |ALTA|
|RNF-005| Os campos dos formulários devem conter máscaras para evitar que os usuários digitem informações incorretas |MÉDIA|

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
