# Template padrão do site

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

Explique as guias de estilo utilizadas no seu projeto.

## Design

1. Layout Principal

Este será o layout base para todas as páginas principais do sistema.

a. Header (Cabeçalho)

	•	Posicionamento do Logo: O logotipo do sistema será posicionado no canto superior esquerdo, dentro do cabeçalho.
	•	Menu Principal: O menu principal estará localizado no mesmo cabeçalho, à direita do logotipo. Ele conterá links para as principais seções do sistema (Dashboard, Relatórios, Configurações, Perfil, etc.).
	•	Barra de Pesquisa e Notificações: Na extremidade direita do cabeçalho, estarão ícones de notificações, mensagens e uma barra de pesquisa para acesso rápido.

b. Sidebar (Barra Lateral)

	•	Posicionamento: Fixa no lado esquerdo da tela. Esta barra pode conter ícones e labels para navegação rápida para as principais funcionalidades do sistema.
	•	Menu de Ações Rápidas: A sidebar incluirá um menu de navegação rápida para ações e funcionalidades frequentes (como “Novo Documento”, “Usuários”, etc.).

c. Corpo Principal (Content Area)

	•	Layout Responsivo: O corpo principal será um container fluido que se adapta conforme o conteúdo e a resolução da tela. Será onde o conteúdo específico de cada página será renderizado.
	•	Títulos e Breadcrumbs: Na parte superior do conteúdo principal, haverá breadcrumbs e o título da página, para orientar o usuário sobre a navegação atual.
	•	Componentes e Widgets: Abaixo dos títulos, serão inseridos componentes ou widgets como gráficos, tabelas, formulários ou outros elementos que sejam o foco da página atual.

d. Footer (Rodapé)

	•	Informações Legais e Links: O rodapé será simples, contendo links para termos de serviço, política de privacidade e informações de direitos autorais.
	•	Posicionamento: O footer será fixo na parte inferior da página, ou poderá ser exibido somente quando o usuário rolar até o fim.

2. Layout de Login

Este layout será mais simples, focado em guiar o usuário para acessar o sistema.

	•	Logo Centralizado: O logotipo será centralizado na parte superior da página de login.
	•	Formulário de Login: O formulário será centralizado logo abaixo do logotipo, contendo campos para inserir usuário/e-mail e senha.
	•	Links Adicionais: Haverá links abaixo do formulário para “Esqueceu sua senha?” e possivelmente um botão para “Registrar-se”, caso seja um sistema com auto-cadastro.

3. Menu Padrão

O menu padrão será dividido em seções que podem variar conforme o tipo de usuário (administrador, usuário comum, etc.). Abaixo está uma sugestão para a estrutura básica:

a. Menu Principal

	1.	Dashboard: Página inicial com visão geral do sistema.
	2.	Relatórios: Acesso aos relatórios gerenciais e estatísticas.
	3.	Usuários: Gestão de usuários do sistema (CRUD).
	4.	Configurações: Configurações gerais do sistema.
	5.	Perfil: Página de perfil de usuário (com dados pessoais e opções de logout).

b. Menu Administrativo (Para Administradores)

	1.	Controle de Acesso: Configuração de permissões e grupos de usuários.
	2.	Logs de Sistema: Histórico de atividades e auditorias.
	3.	Configurações Avançadas: Ajustes do sistema, como integração com APIs, backups, etc.

4. Layout de Relatórios

Uma página dedicada à visualização de dados e estatísticas.

	•	Filtro de Relatórios: Um painel no topo para aplicar filtros como datas, categorias e métricas.
	•	Visualização de Gráficos e Tabelas: O conteúdo principal será ocupado por gráficos interativos e tabelas com dados relevantes.
	•	Exportação de Dados: Botões para exportar relatórios em PDF, Excel ou CSV, localizados no topo ou rodapé da página de relatórios.

5. Layout de Configurações

Este layout é usado para gerenciar as preferências e configurações do sistema.

	•	Seções de Configuração: Configurações serão divididas em categorias, com um menu na lateral esquerda.
	•	Formulários: No corpo principal, formulários simples e intuitivos permitirão que o usuário ajuste suas preferências (notificações, segurança, etc.).

6. Design Responsivo

	•	O layout será responsivo, adaptando-se para diferentes resoluções de tela, desde desktops a dispositivos móveis.
	•	A barra lateral poderá ser escondida automaticamente em telas menores, transformando-se em um menu hamburguer para facilitar o uso mobile.

Considerações Finais

	•	Cores e Temas: As cores do layout seguirão a identidade visual da marca, com destaque para o logotipo e as principais funcionalidades.
	•	Tipografia: A tipografia será legível e consistente em todo o sistema, com hierarquia clara entre títulos, subtítulos e corpo de texto.
	•	Interatividade: Elementos de feedback visual como animações suaves ao clicar em botões, menus drop-down, e alertas de sistema para uma melhor experiência do usuário.

Essa é uma estrutura básica de layouts, que poderá ser ajustada conforme as necessidades do sistema e o tipo de usuário. Se precisar de mais detalhes ou quiser alguma adaptação específica, ficarei feliz em ajudar!

## Cores 
Utilação de cores neutras preto branca e cinza.


![Paleta ce cores](https://github.com/user-attachments/assets/f9cfd372-4755-40b4-b160-7eef8a1def73)


## Tipografia

**Título da página:**

Fonte: Goldman

Estilo: Regular

Tamanho: 60

Cor: #000000

Opacidade: 100%

**Texto de apresentação do site:**

Fonte: Gruppo

Estilo: Regular

Tamanho: 65

Cor 1: #000000

Opacidade: 20%

Cor 2: #000000

Opacidade: 100%

**Título da seção "Funcionalidades:**

Fonte: Gruppo

Estilo: Regular

Tamanho: 54

Cor: #000000

Opacidade: 100%

**Títulos dos ícones na página inicial:***

Fonte: Galindo

Estilo: Regular

Tamanho: 35

Cor: #000000

Opacidade: 100%

**Corpo de textos explicativos:**

Fonte: Body/Font Family

Estilo: Font Weight Strong

Tamanho: 48

Cor: #FFFFFF

Opacidade: 100%

**Textos presentes em botões:**

Fonte: Inter

Estilo: Semi bold

Tamanho: 36

Cor: #FFFFFF

Opacidade: 100%

## Iconografia

Defina os ícones que serão utilizados e suas respectivas funções.

Apresente os estilos CSS criados para cada um dos elementos apresentados.
Outras seções podem ser adicionadas neste documento para apresentar padrões de componentes, de menus, etc.


> **Links Úteis**:
>
> -  [Como criar um guia de estilo de design da Web](https://edrodrigues.com.br/blog/como-criar-um-guia-de-estilo-de-design-da-web/#)
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
