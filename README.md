
<img src="https://imgs.search.brave.com/s5dvio5a15OwoM9qZnNKyMxJrhDPqifDBlIzWM4R2pM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA0L2FtYXpvbi1s/b2dvLTAucG5n" alt="Amazon Logo" width="200"/>

## 🛒 Amazon Product Scrapper

Um sistema para consulta e análise de produtos da Amazon, integrando com a Amazon SP-API para acesso a dados de produtos e web scraping para captura de informações adicionais. O projeto permite a exportação dos dados para planilhas Excel, facilitando a análise e organização dos dados. 🚀

---

### 📜 Índice
* 🔍 Visão Geral
* 🛠️ Tecnologias Utilizadas
* 🔧 Ferramentas Adicionais
* 📈 Funcionalidades
* 🔐 Serviço de Autenticação
* 📝 Serviço de Consulta
* 🖥️ Serviço de Web Scraping
* 💾 Serviço de Exportação para Excel
* 📊 Cobertura de Testes
* 💻 Como Rodar Localmente
* 🎯 Contribuições
* 📞 Contato

---

## 🔍 Visão Geral
Este sistema permite a consulta a produtos da Amazon utilizando a **Amazon SP-API** para dados oficiais e um mecanismo de **web scraping** para capturar detalhes adicionais diretamente do site. Além de armazenar esses dados no banco de dados, o sistema gera relatórios em planilhas Excel, facilitando o acesso offline e a análise dos produtos.

---

## 🛠️ Tecnologias Utilizadas
* **NestJS** (estrutura modular e escalável)
* **TypeScript**
* **Docker** (containers e orquestração)
* **Prisma** (ORM para modelagem de banco de dados)
* **Amazon SP-API** (consulta de dados de produtos da Amazon)
* **ExcelJS** (geração e leitura de arquivos Excel)
* **Redis** (caching)
* **PostgreSQL** (banco de dados relacional)
* **Swagger** (documentação de APIs)

---

## 🔧 Ferramentas Adicionais
* **Jest** (testes unitários e de integração)
* **Docker Compose** (gerenciamento de containers em ambientes de desenvolvimento e produção)
* **Bcrypt** (hash de senhas e autenticação)
* **OpenAPI (Swagger)** (para documentação e testes das APIs)
* **Axios** (para comunicação HTTP com APIs externas)

---

## 📈 Funcionalidades
* **Consulta de Produtos via SP-API**: Permite consultar produtos diretamente da Amazon usando credenciais da Amazon SP-API.
* **Scraping de Produtos**: Obtém detalhes de produtos através de scraping de páginas da Amazon para capturar dados adicionais.
* **Geração de Planilhas Excel**: Exporta dados obtidos em formato Excel, facilitando o uso offline e análises detalhadas.
* **Armazenamento em Banco de Dados**: Salva os dados em um banco de dados PostgreSQL para fácil acesso e futuras consultas.

---

## 🔐 Serviço de Autenticação
O sistema utiliza autenticação JWT para garantir que somente usuários autenticados possam acessar as funcionalidades de consulta e scraping. A senha dos usuários é armazenada de forma segura utilizando o Bcrypt.

---

## 📝 Serviço de Consulta
Realiza a comunicação com a Amazon SP-API para buscar informações de produtos, como título, preço e descrição, que são retornados pela API oficial e salvos no banco de dados.

---

## 🖥️ Serviço de Web Scraping
Para obter informações não disponíveis na API oficial, o serviço de scraping realiza consultas diretamente nas páginas dos produtos na Amazon, capturando dados como avaliações, descrição detalhada e imagens adicionais.

---

## 💾 Serviço de Exportação para Excel
Utilizando a biblioteca ExcelJS, este serviço cria planilhas a partir dos dados obtidos, permitindo uma visualização prática e organizada. A exportação é feita para o formato XLSX, com cabeçalhos bem definidos e estilizados para melhor apresentação.

---

## 📊 Cobertura de Testes
* **Testes Unitários**: Implementados com Jest para garantir a confiabilidade dos principais componentes, como a autenticação e a integração com a Amazon SP-API.
* **Testes de Integração**: Focados na interação entre diferentes módulos e serviços, especialmente a integração com a SP-API e o serviço de scraping.

---

## 💻 Como Rodar Localmente
1. **Pré-requisitos**:
   * Docker e Docker Compose instalados
   * Credenciais da Amazon SP-API configuradas

2. **Instalar Dependências**:
   ```bash
   npm install
   ```

3. **Configurar Variáveis de Ambiente**:
   Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias, como as credenciais da SP-API, as configurações do banco de dados e a chave secreta JWT.

4. **Iniciar o Docker Compose**:
   ```bash
   docker-compose up -d
   ```

5. **Iniciar o Servidor**:
   ```bash
   npm run start:dev
   ```

6. **Acessar o Swagger para Documentação**:
   Acesse `http://localhost:3000/api` para explorar a documentação da API e testar os endpoints.

---

## 🎯 Contribuições
Contribuições são bem-vindas! Se encontrar bugs ou desejar implementar novas funcionalidades, abra um **Pull Request** ou **Issue**.

**Como Contribuir**:
1. Faça um fork do repositório.
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`.
3. Faça suas alterações e adicione commits.
4. Envie um Pull Request.

---

## 📞 Contato
Para dúvidas ou sugestões, entre em contato:

**Email**: ikauedeveloper@gmail.com  
**LinkedIn**: [ikauematos](https://www.linkedin.com/in/ikauematos/)  

--- 