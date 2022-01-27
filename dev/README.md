![Oli Saúde|100x397,20%](https://hs-7708371.f.hubspotfree.net/hub/7708371/hubfs/logo-olisaude.png?upscale=true&width=288&upscale=true&name=logo-olisaude.png)

# Backend Developer Challenge

# Sumário

- [Instruções de uso](#instruções-de-uso)
- [O Desafio](#O-Desafio)
- [Requisitos](#Requisitos)
- [Recomendações](#Recomendações)
- [Avaliação](#Avaliação)

# O Desafio

Crie uma API simples para gerenciar Clientes. Esta API deve permitir:
- Criar um cliente
- Editar um cliente
- Obter um cliente específico
- Listar clientes

Um Cliente deve ter os seguintes campos:
- nome
- data de nascimento
- sexo 
- [ problemas de saúde ]
- data de criação
- data de atualização

Problemas de Saúde
- nome
- grau do problema (de 1 a 2)
  
    ```
    ex: diabetes, grau 2
    ```

Criar um endpoint para trazer os 10 clientes com maior risco de saúde, no qual o cálculo é:
    
    ```
        sd = soma do grau dos problemas
        score = (1 / (1 + eˆ-(-2.8 + sd ))) * 100
    ```

# Requisitos
- Todas as respostas da API devem ser JSON
- Fornece um arquivo README.md com instruções de uso (como executar, endpoints etc)

# Recomendações
- Tests, tests and tests
- SOLID
- Código e commits em inglês (métodos, classes, variáveis, etc)

# Avaliação
- Estrutura, arquitetura e organização do projeto
- Boas práticas de programação
- Alcance dos objetivos propostos.

# Instruções de uso

## Observações:

- A aplicação roda na porta 3000, se for necessário pode alterar a porta, alterando a variável de ambiente no arquivo .env.

- Realizar o clone do projeto: 

  ```
  git clone git@github.com:Vitor-Hugo-Dev/teste-dev-backend.git
  ```

- acessar o diretório do projeto:

  ```
  cd teste-dev-backend/dev
  ```

- Instalar as dependências:

  ```
  npm install
  ```

- rodar a aplicação:

  ```
  npm start
  ```

- O banco de dados da aplicação é o mongoDB.

- A aplicação esta linkada com um banco de dados hospedado no Atlas.

- Caso haja algum problema para se conectar com o atlas,  É necessário rodar o mongoDB localmente e criar um banco com o nome "Oli_Clientes"

# Endpoints

## Para criar um cliente: 

```
POST	http://localhost:3000/clients
```

É necessário passar um json no body da requisição no seguinte formato:

```
{
	"name": "string",
	"birthDate": "MM/DD/YYYY",
	"gender": "string",
	"problems": [array],
	"creationDate": "MM/DD/YYYY",
	"editedDate": "MM/DD/YYYY"
}
```

O retorno será um json com o cliente cadastrado.

## Para listar todos os clientes:

```
GET	http://localhost:3000/clients/
```

O retorno será um Json com um array com todos os clientes.



## Para listar um cliente especifico:

```
GET	http://localhost:3000/clients/:id
```

- É necessário passar um id valido como parâmetro.

​	O retorno será um json com o cliente requisitado.

##  Para editar um cliente:

```
PUT	http://localhost:3000/clients/:id
```

- É necessário passar um id valido como parâmetro.

- É necessário passar um json no body da requisição no seguinte formato:

  ```
  {
  	"name": "string",
  	"birthDate": "MM/DD/YYYY",
  	"gender": "string",
  	"problems": [array],
  	"creationDate": "MM/DD/YYYY",
  	"editedDate": "MM/DD/YYYY"
  }
  ```

O retorno será um json com o cliente editado.

## Para obter os 10 com maior risco de saúde:

```
GET	http://localhost:3000/clients/critical
```

O retorno sera um Json com um array com os 10 clientes em estado mais crítico.
