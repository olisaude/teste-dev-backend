# Back-end Developer Challenge - Oli Saúde

## O Desafio

Criação de uma API simples para gerenciar Clientes. Esta API deve permitir:
- Criar um cliente
- Editar um cliente
- Obter um cliente específico
- Listar clientes
- Todas as respostas da API devem ser JSON

### Um Cliente deve ter os seguintes campos:

- nome
- data de nascimento
- sexo 
- [ problemas de saude ]
- data de criação
- data de atualização


### Problemas de Saúde

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

## Instruções para rodar o projeto local

1. Fazer o clone do repositório

- `git clone git@github.com:mariananogueirab/teste-dev-backend.git`
- Entre na pasta do repositório e depois na pasta /dev

2. Instale as dependências

- `npm install`

3. Rode a aplicação

- `npm start` ou
- `npm run dev`

## Coleções

O banco terá uma coleção chamada `clients`.

As requisições serão feitas na rota `/clients`.

As requisições de criação e atualização de cadastro, seguirão o formato:

```json
{
	"name": "Mariana",
	"gender": "Female",
	"healthProblems": ["Pressão alta", "Grau 1", "Refluxo", "Grau 2"],
	"birthDate": "17-03-1994"
}
```
As respostas serão no formato:

```json
{
	"_id": "61f5dea6ee420e33185a8192",
	"name": "Mariana",
	"gender": "Female",
	"healthProblems": [
		"Pressão alta",
		"Grau 1",
		"Refluxo",
		"Grau 2"
	],
	"birthDate": "17-03-1994",
	"creationDate": "29-1-2022",
	"score": "54.98"
}
```

Quando for atualizada, o campo `updateDate` será adicionado:

```json
{
  "updateDate": "31-1-2022"
}
```

A busca por um cliente em específico pode ser realizada tanto pelo id na URL da requisição, como pelo nome e data de nascimento do cliente, no seguinte formato:

`http://localhost:3000/clients/?name=Mariana&birthDate=17-03-1994`

O endpoint que trás os 10 clientes com maior risco de saúde é `clientes/ten`.

## Para testar o projeto

Para testar o projeto, colocar no terminal:

`NAME=<nome_do_arquivo> npm test`