# Use uma imagem base oficial do Node.js
FROM node:20

# Defina o diretório de trabalho na imagem
WORKDIR /app

# Copie o package.json e o yarn.lock para o diretório de trabalho
COPY package.json yarn.lock ./

# Instale as dependências do projeto
RUN yarn install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Defina o comando padrão para rodar a aplicação
CMD ["yarn", "start"]
