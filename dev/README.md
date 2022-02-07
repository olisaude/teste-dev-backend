# Readme
Projeto proposto pela Oli SAúde, para testar habilidades na construção de APIs.

---

![Oli Saúde|100x397,20%](https://hs-7708371.f.hubspotfree.net/hub/7708371/hubfs/logo-olisaude.png?upscale=true&width=288&upscale=true&name=logo-olisaude.png)

## Instruções de uso

  - [Repositório do projeto](https://github.com/camila-dornas/teste-dev-backend)
  - Banco utilizado: MondgoDB.

# Executando na sua máquina

  1. Clone o repositório
    - `git clone git@github.com:camila-dornas/teste-dev-backend.git`
  2. Instale as dependências
    - `npm install`
  3. Dê o start
  - ` node . `

# Endpoints

  1. Criar um cliente:
  `app.post('/clients/add', addClientController);`

  - JSON necessário no corpo da aplicação:

  ``
  {
		"name": "",
		"birthDate": "DD/MM/AAAA",
		"gender": "",
		"healthProblems": [],
  }
  ``

  Obs: O id e a data de criação do cliente no sistema, serão criados automaricamente, não devem ser inseridos no corpo da aplicação.

  - Retorno da API:

    ``
   {
		"_id": "",
		"name": "",
		"birthDate": "DD/MM/AAAA",
		"gender": "",
		"healthProblems": [],
		"creationDate": "DD/MM/AAAA",
  	}
   ``

  2. Editar um cliente
  `app.put('/clients/:id', updateClientController);`

  - Deverá ter o seguinte retorno:

  ``	
  {
		"_id": "",
		"name": "",
		"birthDate": "DD/MM/AAAA",
		"gender": "",
		"healthProblems": [],
		"creationDate": "DD/MM/AAAA",
		"update": "DD/MM/AAAA",
	}
  ``

  3. Obter um cliente específico
  `app.get('/clients/:id', findClientControllers);`

  4. Listar clientes
  `app.get('/clients', listClientsController);`

  5. Listar os 10 clientes mais críticos
  `app.get('/clients/healthrisk', healthRiskController);`
  - Deverá retornar os 10 clientes com maior risco de saúde:
  obs: No JSON deverá aparecer o valor do Score de cada cliente.

  ``
  	{
	"_id": "",
		"name": "",
		"birthDate": "DD/MM/AAAA",
		"gender": "",
		"healthProblems": [],
		"creationDate": "DD/MM/AAAA",
		"update": "DD/MM/AAAA",
		"score": valor
	}
  ``
 



