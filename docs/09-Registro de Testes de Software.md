# Registro de Testes de Software

Com base nas funcionalidades, requisitos e casos de testes propostos no item anterior (08. Plano de Testes de Software) os registros dos testes são descritos a seguir:

| Caso de Teste | CT-01 – Cadastro de usuário |
|---------------|--------------------------|
| Requisitos Associados | RF-007 - A aplicação deve permitir ao usuário cadastrar, ler, atualizar e excluir suas informações de cadastro. |
| Objetivo do Teste | Verificar se o cadastro é realizado de maneira correta |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em "Cadastrar-se" <br> 4 - Selecionar se irá se cadastrar ou acessar a aplicação com a conta do Google <br> 5 - Caso deseje se cadastrar, preencher os campos obrigatórios: Nome, Sobrenome, e-mail, senha e confirmação de senha e clicar em "Cadastrar". Caso deseje acessar a aplicação com a conta do google, clicar em "Acessar com o Google"|
| Critérios de Êxito | - O cadastro foi realizado com sucesso. |
| Conclusão do teste | O cadastro foi realizado com sucesso. Foram adicionados corretmante todos os dados de Nome, Sobrenome, e-mail, senha, confirmação de senha, sexo e idade. O cadastro foi registrado no banco de dados e com isso não há como criar uma nova conta utilizando o mesmo email de uma conta já criada. As validações foram executadas corretamente, não permitindo que um cadastro seja realizado com algum dado em branco ou com alguma regra descumprida, como por exemplo, os caracterers exigidos na senha ou mesmo, senha diferente da confirmação de senha. Para todos os erros ou descumprimento de regras das validações, mensagens de aviso ou sinais em vermelho nos campos são exibidos. Ao final, quando o cadastro é realizado uma mensagem de confirmação é exibida. |
| Print dos Testes |

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/7d3c778d-21d0-4570-82f5-c42fe2509ef7

| Caso de Teste | CT-02 – Efetuar login |
|---------------|--------------------------|
| Requisitos Associados |RF-008 - O usuário deve conseguir realizar login na plataforma. RF-009 - A aplicação deve realizar a verificação de login de usuário na plataforma. |
| Objetivo do Teste | Verificar se o login está ocorrendo corretamente |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em "Login" <br> 4 - Preencher os campos obrigatórios: E-mail e senha <br> 5 - Clicar em "Entrar"|
| Critérios de Êxito | - O login foi realizado com sucesso, o conteúdo apresentado está associado às preferências do usuário e o mesmo é capaz de acessar o seu perfil  |
| Conclusão do teste | Ao realizar login, as validações são feitas corretamente, retornando uma mensagem de credenciais inválidas quando algum campo é inserido de forma incorreta, ou então, não seja de acordo com o cadastro realizado. Após inserir os dados corretos uma mensagem de êxito é exibida e o usuário é logado em sua conta. O nome do usuário é exibido no canto superior direito da página e os conteúdos relacionados ao usuário, como favoritos, são exibidos corretamente. Clicando sobre o nome do usuário é possível visualizar o perfil onde são exibidos os dados cadastrados. |
| Print dos Testes |

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/c58717b0-e933-4d9b-9bd4-7d77495dc117

| Caso de Teste | CT-03 – Ler/Editar/Excluir Dados do perfil |
|---------------|--------------------------|
| Requisitos Associados |RF-007 - A aplicação deve permitir ao usuário cadastrar, ler, atualizar e excluir suas informações de cadastro. |
| Objetivo do Teste | Verificar se o usuário consegue realizar a edição dos dados ou exclusão do cadastro. |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em "Perfil" <br> 4 - Na página de perfil, clicar em "Alterar Dados" ou "Excluir Conta" <br> 5 - Caso a opção escolhida seja a alteração dos dados, alterar os campos desejados e manter os campos obrigatórios preenchidos <br> 6 - Clicar em "Concluir"|
| Critérios de Êxito | - As informações do perfil foram alteradas com sucesso de acordo com as informações oferecidas pelo usuário, ou caso a opção selecionada seja a exclusão, o cadastro foi excluído e não é mais possível acessar a conta com as credenciais escolhidas |
| Conclusão do teste | Na tela principal, após realizar login, ao clicar sobre o nome do usuário exibido na tela principal, o modal do perfil é exibido, e neste, é possível alterar o nome e cadastrar uma nova senha. Ao realizar as mudanças o novo nome do usuário, caso alterado, já é exibido na tela inicial e assim também, durante a realização das alterações no modal as validações da senha foram feitas corretamente, indicando em vermelho quando o valor inserido não condiz com o cadastro realizado no campo "senha atual". Ao realizar o logout e em seguida o login com a senha antiga, não foi possível realizar o login. Realizando o login com a nova senha cadastrada o login foi feito com sucesso. Ao acessar novamente o modal do perfil, clicando sobre o botão de "Deletar", uma mensagem de alerta é exibida, para a confirmação da certeza de deletar o cadastro. Ao prosseguir com a ação deletar uma mensagem de sucesso é exibida informando que o cadastro foi deletado . Ao tentar realizar login com os dados do cadastro, não foi possível logar, uma vez que o cadastro foi realmente deletado.  |
| Print dos Testes |

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/eb22fc65-9d0f-4e51-8876-5f0ed401dd8d

| Caso de Teste | CT-04 – Pesquisa de filmes |
|---------------|--------------------------|
| Requisitos Associados | RF-001 - A aplicação deve permitir que o usuário faça a busca desejada. <br> RF-002 - A aplicação deve exibir resultados relacionados às palavras buscadas |
| Objetivo do Teste | Verificar se a pesquisa e o seu filtro funcionam corretamente e retornam o filmes desejado e sugerem complemento de palavras durante a digitação. |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, digitar o título de um filmes desejado no campo de busca|
| Critérios de Êxito | - O resultado retornado corresponde aos dados do filmes buscado e durante a digitação, palavras são sugeridas de acordo as palavras utilizadas na busca |
| Conclusão do teste | O teste de pesquisa foi realizado com sucesso. Ao digitar as palavras desejadas, os resultados relacionados são exibidos com os cartazes dos filmes, além de exibir sugestões para as palavras buscadas. A pesquisa também pode ser realizada em ingles ou português. |
| Print dos Testes |

https://user-images.githubusercontent.com/114538749/236646233-32d8120c-0b44-40ce-a873-45f13143c4eb.mp4 

| Caso de Teste | CT-05 – Filtros de Busca |
|---------------|--------------------------|
| Requisitos Associados | RF-003 - A aplicação deve conter filtros para auxiliar na busca do conteúdo pesquisado. |
| Objetivo do Teste | Verificar se o conteúdo retornado após a pesquisa está classificado corretamente, de acordo com o critério selecionado nos filtros |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em filtros e selecionar um filtro <br> 4 - Buscar por um conteúdo com base no filtro selecionado |
| Critérios de Êxito | - O conteúdo retornado está de acordo com o filtro selecionado pelo usuário |
| Conclusão do teste | Ao selecionar um filtro os resultados são filtrados e organizados com sucesso. É possível aplicar filtros de gênero e avaliações, e ainda, alterar os resultados para aplicar novamente os filtros. |
| Print dos Testes |  

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/32439873-546c-4e51-8d9f-af1ce9ee13a4

| Caso de Teste | CT-06 – Informação sobre a plataforma de streaming que apresenta o conteúdo |
|---------------|--------------------------|
| Requisitos Associados | RF-004 - A aplicação deve exibir em qual plataforma de streaming o conteúdo desejado se encontra disponível para exibição. |
| Objetivo do Teste | Verificar se o conteúdo selecionado ou pesquisado apresenta a plataforma de streaming na qual está disponível para exibição. |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, selecionar um dos conteúdos exibidos ou realizar uma busca específica <br> 4 - Verificar se o conteúdo escolhido apresenta a plataforma de streaming na qual está presente entre os dados fornecidos |
| Critérios de Êxito | - A informação sobre a plataforma de streaming está presente entre os diversos dados fornecidos sobre o conteúdo selecionado |
| Conclusão do teste | Ao selecionar o filme, as informações sobre este filme são exibidas e logo a baixo do pôster do filme, é exibida a plataforma de streaming na qual o filme encontra-se disponível. |  

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/f929235d-4d6c-4fe0-9dd7-5ee3fa317698

| Caso de Teste | CT-07 – Visualizar informações sobre os conteúdos |
|---------------|--------------------------|
| Requisitos Associados | RF-005 - A aplicação deve exibir informações como notas dos principais sites agregadores de crítica, duração total, gênero e outras informações relacionadas. |
| Objetivo do Teste | Verificar se os conteúdos disponíveis apresentam as informações pré-definidas durante o desenvolvimento do projeto |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, selecionar um dos conteúdos exibidos ou realizar uma busca específica <br> 4 - Na página do conteúdo selecionado, verificar as informações exibidas sobre o mesmo |
| Critérios de Êxito | - Os dados apresentados sobre o conteúdo selecionado devem estar de acordo com os dados selecionados para serem exibidos |
| Conclusão do teste | As informações sobre o filme foram exibidas com sucesso. Ao selecionar o filme, informações como titulo, data de estreia, gêneros, sinopse, plataforma de streaming em que está disponível, elenco principal e outras informações são exibidas na página. |
| Print dos Testes | 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/4dd19f56-0840-42e8-8d33-313e313879f6

| Caso de Teste | CT-08 – Conteúdos relacionados e favoritos |
|---------------|--------------------------|
| Requisitos Associados | RF-006	- A aplicação deve sugerir conteúdos relacionados às buscas já realizadas anteriormente e favoritar conteúdos. |
| Objetivo do Teste | Verificar se o usuário logado consegue favoritar conteúdos e se conteúdos relacionados aos seus favoritos são exibidos na tela inicial |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, verificar se os conteúdos apresentados estão relacionados com os favoritos do usuário <br> 4 - Na página inicial, selecionar um conteúdo ou realizar uma busca específica <br> 5 - Favoritar o conteúdo selecionado <br> 6 - Na página de favoritos, verificar se o conteúdo favoritado foi inserido na lista de favoritos |
| Critérios de Êxito | - Os conteúdos exibidos estão relacionados aos favoritos do usuário logado e é possível favoritar conteúdo e visualizá-lo no seu perfil na lista de favoritos  |
| Conclusão do teste | Ao pesquisar por um filme e favorita-lo, ele logo é incluído na lista de favoritos que pode ser acessada em "Meus favoritos", assim também, novos filmes relacionados ao novo favorito são inclusos na lista de filmes recomendados para o usuário, disponível em "Recomendados para você". Do mesmo modo, ao desfavoritar um filme ele logo é excluído da lista de favoritos assim como seus recomendados são removidos da lista de recomendados. Ao pesquisar um filme já favoritado anteriormente, o retorno mostrou o ícone indicando que o filme já foi favoritado. |
| Print dos Testes |  

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/6eda79ae-f8d4-4d00-8951-8c335503006d
