# CadeVC?

## Requisitos

- NodeJS >= 20
- NPM >= 10
- Postgresql >= 14

## Descrição

Backend para base de dados de animais perdidos e encontrados na enchente do Rio Grande do Sul, em maio/2024

## Instalação

```bash
$ yarn install
```

## Variáveis de ambiente

Copiar o .env.example para .env e se necessário, alterar as credenciais de acordo com as do seu Banco de dados.

## Rodando o app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Migrações

Criar nova migração:

```$ yarn run migration:create {nome_tabela}```

Rodar migrações:

```$ yarn run migration:run```


## Suporte


## Criador

- Author - [Vanessa Souto](https://github.com/vanessasoutoc)
- Website - [https://vanessasoutoc.github.io/meuportifolio](https://vanessasoutoc.github.io/meuportifolio)
- X - [@vanessasoutoc](https://twitter.com/vanessasoutoc)


