# Arquitetura da Solução

Neste tópico será abordada a Arquitetura da Solução, no qual é descrito a organização e estruturação do software em relação aos elementos constituintes da solução e ao ambiente de hospedagem da aplicação.

## Diagrama de Classes

<p align = "center">
 
![diagrama3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/898bd8c8-af0e-43fe-a878-45ec42895d92)

</p>

## Modelo ER (Projeto Conceitual)

<p align = "center">

![diagrama2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/635c381d-f0a8-47df-b418-581e5d37c0da)

</p>

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.

<p align = "center">

![diagrama1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder/assets/114538749/b135b888-fe8c-4681-8a86-72bc5ce9f17f)

</p>

## Tecnologias Utilizadas

#### Desenvolvimento do backend:
- [C#](https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/): Linguagem de programação utilizada para o desenvolvimento da lógica e funcionalidades do backend da solução.

#### Desenvolvimento do frontend:
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML): Linguagem de marcação utilizada para estruturação do conteúdo da web.
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS): Linguagem de folha de estilo utilizada para formatação, estilização e apresentação visual do conteúdo HTML.
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): Linguagem utilizada para adicionar interatividade e comportamento dinâmico das páginas web.

#### Frameworks utilizados:
- [ASP.NET Core](https://learn.microsoft.com/pt-br/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-7.0): Framework de desenvolvimento web utilizado na construção da estrutura web que engloba uma série de bibliotecas, ferramentas e recursos para o desenvolvimento, dos quais foram utilizados para o desenvolvimento da aplicação.
- [Entity Framework](https://learn.microsoft.com/en-us/aspnet/entity-framework): Ferramenta que permite a criação de tabelas no banco de dados automaticamente com base nas classes definidas no código, seguindo a abordagem "code-first".

#### Bibliotecas utilizadas:
##### <i>Autenticação com tokens JWT</i>:
- [Microsoft.AspNetCore.Authentication.JwtBearer](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.authentication.jwtbearer?view=aspnetcore-7.0): Biblioteca responsável por lidar com a autenticação JWT no pipeline do ASP.NET Core.
- [System.IdentityModel.Tokens.Jwt](https://learn.microsoft.com/en-us/dotnet/api/system.identitymodel.tokens?view=dotnet-plat-ext-7.0): Assim também como a ferramenta citada logo abaixo, são bibliotecas que fornecem suporte para geração, validação e manipulação de tokens JWT.
- Microsoft.IdentityModel.Tokens

##### <i>Manipulação de bancos de dados</i>:
As bibliotecas citadas a baixo são utilizadas juntamente para permitir o uso do Entity Framework Core como ORM, fornecendo funcionalidades de acesso e manipulação de bancos de dados no ASP.NET Core:
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.SqlServer 
- Microsoft.EntityFrameworkCore.Tools

##### <i>Outras funcionalidades</i>:
- BCrypt.Net-Next: Biblioteca utilizada em funcionalidades para a criptografia de senhas usando o algoritmo BCrypt.
- Newtonsoft.Json: Utilizada na manipulação de Json, fornecendo recursos para serialização e desserialização de objetos .NET para formato JSON e vice-versa.
- Swashbuckle.AspNetCore: Implementação do Swagger para o ASP.NET Core. 

#### API utilizada na aplicação:
- [The Movie DB API](https://developer.themoviedb.org/docs) - API utilizada para a disponibilização de conteúdos relacionados aos filmes, como informações, pôsteres e outros recursos.

#### IDEs utilizadas:
- [Rider - JetBrains](https://www.jetbrains.com/pt-br/rider/) - IDE para desenvolvimento Back-end
- [Visual Studio](https://visualstudio.microsoft.com/pt-br/) - IDE para desenvolvimento Back-end
- [WebStorm - JetBrains](https://www.jetbrains.com/pt-br/webstorm/) - IDE para desenvolvimento Front-End
- [Visual Studio Code](https://code.visualstudio.com/) - IDE para desenvolvimento Front-End

#### SGBD:
- SqlServer

## Hospedagem
A hospedagem da aplicação foi feita de em 2 ambientes de hospedagem, sendo o front-end hospedado na plataforma Vercel e o código back-end juntamente ao banco de dados na plataforma Azure. Cada plataforma foi associada ao repositório do GitHub para sincronização das implantações.

- Hospedagem Back-end e banco de Dados: [Back-end Azure](https://projetopucmoviefinder.azurewebsites.net/v1/public)
- Hospedagem Front-end: [Front-end Vercel](https://pmv-ads-2023-1-e2-proj-int-t2-time3-moviefinder.vercel.app/)
