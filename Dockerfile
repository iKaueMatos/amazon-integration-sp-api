# Etapa de construção
FROM node:18 AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia arquivos de configuração do npm
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código da aplicação
COPY . .

# Executa o build, que deve criar a pasta /app/dist
RUN npm run build

# Verifica se o diretório dist foi criado
RUN ls -al /app  # Para depuração

# Etapa de desenvolvimento
FROM node:18-alpine AS development

# Define o diretório de trabalho
WORKDIR /app

# Copia tudo do estágio de construção
COPY --from=builder /app .

# Exclui o diretório dist (se desejar, pode manter)
RUN rm -rf ./dist

# Instala as dependências de desenvolvimento
RUN npm install

# Expõe a porta do aplicativo
EXPOSE 3333

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "start:dev"]
