<h1 align="center">
    <img alt="backend-test" title="Brain IT API - Teste Backend" src="src/docs/assets/walpaper-brainit.png" width="800px" />
</h1>
<h1 align="center">Brain IT API - Backend Teste</h1>
<p align="center">API desenvolvida no teste para vaga de desenvolvedor backend</p>

## Tecnologias
- [NodeJS](https://nodejs.org/en)
- [ExpressJS](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [Swagger](https://swagger.io/)
- [Postman](https://www.postman.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Supertest](https://www.npmjs.com/package/supertest)

## Organização do projeto aplicado SOLID e package for feature
<h1 align="center">
    <img alt="project" title="project" src="src/docs/assets/project.png" width="200px" />
</h1>

## Questões do teste
``bash
1 - Implemente autenticação JWT na API que você criou. Os usuários devem se autenticar
antes de poderem realizar operações nas tarefas. Explique como você lidaria com a
geração, validação e renovação dos tokens JWT.
R: Utilizei a biblioteca jsonwebtoken que gera um Bearer token por padrão do tipo HS256 ou RSA que é composto pelo header, payload e signature codificados. 
A validação ocorre nas rotas no arquivo routes.ts, passando por parâmetro o middleware implementado: "isAuthenticated" que faz a verificação se o usuário possui o token de autenticação que é obtido na rota "auth". 
A renovação acontece através de uma pré-configuração. Está configurado para o token expirar em 2h, podendo ser customizado para o tempo desejado. Atingindo este tempo configurado, ao tentar rodar alguma rota authenticada, aparecerá a mensagem: "jwt expired" obrigando o usuário a se autenticar novamente. 

2 - Explique como você lidaria com erros na API, incluindo o uso de códigos de status HTTP
apropriados e mensagens de erro significativas.
R: Eu implementei para caso de sucesso retorne os dados gravados (exceto delete) e o status 201. Para erros, o 401 que retornará um erro correspondente ao método em questão. Ex: 'Unexpected error at authenticate a user.'.
Caso haja algum erro originado no banco de dados, como por exemplo tipo de dado enviado incorretamente ou campos obrigatórios não informados, o próprio ORM ultilizado que é o Prisma, retornará o erro específico no terminal oferecendo facilidade ao desenvolvedor para corrigir o problema. Esse log de erros, é configurado nas propriedades do PrismaClient(client do ORM Prisma) que se encontra no arquivo src/lib/prisma.ts.

3 - Liste pelo menos três bibliotecas Node.js que você consideraria úteis ao criar uma API
RESTful com autenticação JWT e explique por que você escolheria cada uma delas.
R: 
* Prisma ORM - Justamente pela facilidade de implementação e praticidade em conectar a api em um banco de dados (relacional ou não). Pelo motivo da configuração e log de erros informado na resposta anterior. Documentação detalhada de fácil entendimento e muito conteúdo para tirar dúvidas.

* Jsonwebtoken - Também pela facilidade de implementação, configuração e ultilização. Basta criar o middleware e utilizar nas rotas que deseja que estejam autenticadas. Documentação de fácil entendimento e muito conteúdo para tirar dúvidas por ser uma lib muito utilizada pela comunidade.

* Swagger - É uma ótima ferramenta para documentação e teste de apis. É um pouco morosa, gastei um bom tempo fazendo a documentação. Mas sem dúvida, uma documentação é algo fundamental para que os desenvolvedores entendam e testem de forma acertiva a api.
Em alternativa, eu utilizei o Postman por ser mais prático, rápido para documentar e testar a api. Disponibilizei o link público do workspace para ser utilizado também.
```

## Instalação
Para instalar as dependências, clone o projeto e rode:
```bash
# Instalar as dependências
$ yarn install
```
Subir a imagem do Postgres via Docker. Certifique-se que possui Docker instalado. Em seguida rode:
```bash
$ docker-compose up -d
```
Copie as variáveis de ambiente no arquivo .env.example e crie um arquivo .env. Informe as variáveis de ambiente referente a seu usuário no Postgres: POSTGRES_USER,
POSTGRES_PASSWORD. Os valores informados são os padrões, se necessário, modifique.
```bash
$ POSTGRES_USER=postgres
$ POSTGRES_PASSWORD=admin
$ POSTGRES_DB=brain_it_test

$ DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public
```
Certifique-se que a imagem "postgres-brain-it" está rodando com o comando:
```bash
$ docker ps
```
Crie a migration das tabelas com o Prisma rodando:
```bash
$ npx prisma migrate dev
```
Para startar a api, rode o comando:
```bash
$ yarn start
# running on port 3333
```
Para visualizar as tabelas você pode usar o Prisma Sudio rodando o comando:
```bash
$ npx prisma studio
```
Abrirá no navegador no endereço: http://localhost:5555/
<h1 align="center">
    <img alt="prisma-studio" title="PrismaStudio" src="src/docs/assets/prisma-studio.png" width="800px" />
</h1>

Para visualizar a documentação do Swagger, abra no navegador em: http://localhost:3333/api-docs/#/
<h1 align="center">
    <img alt="swagger" title="swagger" src="src/docs/assets/swagger.png" width="800px" />
</h1>

Você pode acessar a documentação para teste no Postman também, bastar clicar no link.
<a href="https://www.postman.com/restless-space-645651/workspace/brain-it-test" rel="nofollow" title="title&quot; target=&quot;_blank">Postman</a>
<h1 align="center">
    <img alt="postman" title="postman" src="src/docs/assets/postman.png" width="800px" />
</h1>

Ao testar, primeiro cadastrar um usuário no endpoint "/user", depois autenticar o mesmo no endpoint "/auth" informando o respectivo email e senha, para obter o token. Copiar o token de retorno para autorizar no Swagger (botão Authorize) e na variável de ambiente TEST_TOKEN no arquivo .env do projeto para executar os testes com o Jest.
<h1 align="center">
    <img alt="auth" title="auth" src="src/docs/assets/auth.png" width="800px" />
</h1>

Para realizar os testes, basta alterar o que necessita e rodar o comando conforme o UseCase que desejar. Ex:
```bash
$ yarn test CreateUserUseCase.spec.ts
```

Made with ♥ by Diego Andrade :wave: [Get in touch!](https://www.linkedin.com/in/diego-r-andrade/)
