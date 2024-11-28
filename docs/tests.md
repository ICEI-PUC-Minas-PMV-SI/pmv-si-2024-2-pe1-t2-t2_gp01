# Testes

Nesta parte da documentação do projeto, serão apresentados dois tipos de teste: os testes de software, realizados pela equipe de desenvolvimento, e os testes de usabilidade, realizados por sujeitos não pertencentes à equipe, a fim de simular a interação de um potencial cliente com a aplicação.

# Teste de Software

Nesta seção serão apresentados os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Foram definidos sete casos de teste, cada um correspondente a uma funcionalidade da aplicação desenvolvida. 

**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Cadastro" <br> 3) Preencha todos os campos do formulário <br> 4) Clique no botão "Cadastrar".
**Requisitos associados** | RF-001
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela de login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Login no sistema**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html  <br> 2) Clique em "Login" <br> 3) Preencha todos os campos do formulário <br> 4) Clique no botão "Entrar".
**Requisitos associados** | RF-002
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela de agendamentos
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Agendamentos de Serviço**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Agendamentos" <br> 3) Preencha todos os campos do formulário <br> 4) Clique no botão "Agendar".
**Requisitos associados** | RF-006
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela inicial
**Dados de entrada** | Inserção de dados válidos no formulário de agendamentos
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Editar informações**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Editar perfil" <br> 3) Clique em "Editar informações" <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Editar".
**Requisitos associados** | RF-003
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela inicial
**Dados de entrada** | Inserção de dados válidos no formulário de ediçao de informações
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Mudar senha**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Editar perfil" <br> 3) Clique em "Mudar senha" <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Confirmar".
**Requisitos associados** | RF-003
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela inicial
**Dados de entrada** | Inserção de dados válidos no formulário de mudança de senha 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Historico de agendamentos**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Historico de agendamentos" <br>
**Requisitos associados** | RF-004
**Resultado esperado** | Visualizar o histórico de agendamentos do usuário
**Dados de entrada** | Listagem automática
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Opinião dos usuarios**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Deixe sua opinião" <br> 3) Preencha todos os campos do formulário <br> 4) Clique no botão "Enviar opinião".
**Requisitos associados** | RF-008
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela inicial
**Dados de entrada** | Inserção de dados válidos no formulário de agendamentos
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Nesta seção, será apresentado o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Cada caso de teste foi registrado em formato de  vídeo, demonstrando o uso da funcionalidade correspondente.

|*Caso de Teste*                                 |*CT01 - Criar conta*          |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que o cliente crie seu próprio cadastro|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1T3fwiItcyyV1IH3evvWzvIlFl_EbB7Lz/view?usp=drive_link| 

|*Caso de Teste*                                 |*CT02 -   Login no sistema*                               |
|---|---|
|Requisito Associado | RF-002 - A aplicação deve permitir que o cliente faça login no sistema|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1uc_tZHIc_MEFjgXlRL2CrR5ErRHDidCM/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT03 -  Agendamentos de Serviço*                                      |
|---|---|
|Requisito Associado | RF-006 - O cliente deve ser capaz de registrar o horário definido na agenda de cortes, bem como qual funcionário foi escolhido para o serviço|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1oZBSLcRqMmEfH08zSZ6Q1lFGGc1I4bD_/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT04 - Editar informações*                                        |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir que o cliente edite seus próprios dados, inclusive sua senha|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1ZI-PYfF5BPuqhJyRx4DwUWhPm1ft-p3X/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT05 - Mudar senha*                                        |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir que o cliente edite seus próprios dados, inclusive sua senha|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1FIRURsgDCcI_QnFYkUIQO6vO15eV97Py/view?usp=drive_link| 

|*Caso de Teste*                                 |*CT06 - Histórico de agendamentos*                                       |
|---|---|
|Requisito Associado | RF-004 - A aplicação deve permitir que o cliente visualize seu histórico de serviços agendados|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1GOOTbFaDj2aGV6VicabNmD99TAJQAP02/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT07 - Opinião dos usuários*                                        |
|---|---|
|Requisito Associado | RF-008 - A aplicação deve ser capaz de captar feedbacks do usuário por meio de campos com notas de 1 a 5 e de um campo de opinião por extenso|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1nQUv2CyvtIDToWnK75l65f2Oqo1p-VEg/view?usp=drive_link | 


## Avaliação dos Testes de Software

As sete funcionalidades planejadas foram implementadas com sucesso. Para todos os formulários existem condicionais que verificam adequadamente se os campos foram digitados. Nos formulários em que constam senhas de usuário, há condicionais que testam adequadamente se as senhas digitadas estão idênticas. No formulário de agendamento, há condicionais que testam adequadamente se todos os dados foram selecionados, bem como se os horários pretendidos pelo usuário estão disponíveis. No formulário de envio de opinião do cliente, há uma condicional que testa se o campo de texto foi preenchido. Todos os dados coletados via formulário são adequadamente registrados no armazenamento local do navegador em que a aplicação é utilizada, com a possibilidade de checagem e recuperação, em caso de conveniência ou necessidade.


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos três cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas três pessoas com perfis correspondentes às histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             |Você deseja agendar seu primeiro corte na barbearia Det's. Faça seu cadastro e logue com seus dados. Agende seu primeiro serviço e, após isso, verifique sua listagem de serviços.           |
| 2             |Você precisa editar seus dados cadastrados e modificar sua senha. Acesse a personalização de perfil e modifique seus dados e senha.            |
| 3             |Você deseja avaliar o serviço de um funcionario. Acesse o formulario de opinião, escolha um funcionário e o avalie. Deixe um comentário por escrito e envie sua avaliação.             |



## Registro de Testes de Usabilidade

Cenário 1: Você deseja agendar seu primeiro corte na barbearia Det's. Faça seu cadastro e logue com seus dados. Agende seu primeiro serviço e, após isso, verifique sua listagem de serviços.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você precisa editar seus dados cadastrados e modificar sua senha. Acesse a personalização de perfil e modifique seus dados e senha.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |

Cenário 3: Você deseja avaliar o serviço de um funcionario. Acesse o formulario de opinião, escolha um funcionário e o avalie. Deixe um comentário por escrito e envie sua avaliação. 
| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



