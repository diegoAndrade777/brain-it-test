<h1 align="center">
    <img alt="fullstack-test" title="BrainIt API - Teste Backend" src="src/docs/assets/wallpaper-brainit.png" width="800px" />
</h1>
<h1 align="center">BrainIt API - Backend Teste</h1>
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

## Organização do projeto aplicado SOLID e package for feature
<h1 align="center">
    <img alt="project" title="project" src="src/docs/assets/project.png" width="300px" />
</h1>

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
Copie as variáveis de ambiente no arquivo .env.example e crie um arquivo .env. Na variável DATABASE_URL o usuario e senha do usuário do Postgres é a padrão, caso mude, deve ser alterado. Esses campos estão depois do "postgresql://" respectivamente.
```bash
$ DATABASE_URL=postgresql://postgres:postgres@localhost:5432/sejabest?schema=public
```
Certifique-se que a imagem "postgres" está rodando com o comando:
```bash
$ docker ps -a
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

Você pode acessar a documentação para testee no Postman também, bastar clicar no link.
<h1 align="center">
    <a href="https://www.postman.com/restless-space-645651/workspace/brain-it-test" target="_blank">
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


