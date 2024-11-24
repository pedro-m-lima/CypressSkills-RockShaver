# 🚀 Curso CypresSkills - Fernando Papito

# Repositório de Exercícios de Lógica [![GitHub](https://img.shields.io/badge/GitHub-pedro--m--lima-blue?style=for-the-badge&logo=github)](https://github.com/pedro-m-lima)


## 🌐 Módulo: Testes em Aplicações Web Moderna

### Introdução
Estou atualmente cursando o **CypresSkills**, um curso abrangente de testes com Cypress oferecido por [Fernando Papito](https://cyskills.com.br/). Este repositório é dedicado ao módulo que cobre testes em aplicações web e mobile modernas.

### 📚 Conteúdo do Módulo
Este módulo foca em testar aplicações web e mobile, utilizando diversas tecnologias e ferramentas modernas.

### 🔧 Tecnologias Utilizadas
- **Docker**: Utilizado para subir o ambiente de desenvolvimento
- **API**: Ferramenta de integração
- **Banco de Dados**: MongoDB
- **Aplicações**: React para desenvolvimento web e mobile

### 🛠️ Ferramentas e Configurações
#### Cypress
- Ferramenta principal de testes automatizados para aplicações web
- Configuração e utilização do Cypress para criar testes end-to-end
- Versão sendo utilizada neste curso 13.15.2

#### Docker
- Uso do Docker para gerenciamento de containers, facilitando a configuração do ambiente de desenvolvimento
- Comandos essenciais do Docker para subir e gerenciar o ambiente

### 📈 Estrutura do Projeto
#### API
- Conexão com MongoDB para gerenciamento de dados
- Testes de integração com a API

#### Aplicações Web e Mobile
- Desenvolvimento e testes de aplicações React

### 📦 Como Executar o Projeto

1. **Clone o Repositório**
   ```sh
   git clone https://github.com/pedro-m-lima/cypresSkills-modulo-web-tests.git
   cd cypresSkills-modulo-web-tests

2. **Suba o Ambiente com Docker**
    ````sh
    docker compose up -d
    ````
    - Obs: para instalar o docker utilize o seguinte [Tutorial](https://www.linkedin.com/pulse/instalando-o-docker-windows-10-home-ou-professional-com-papito-oyvof/) 

3. **Instale as Dependências**
    ````sh
    yarn install
    ````
4. **Execute os Testes com Cypress**
    ````sh
    yarn cypress open
    ````
