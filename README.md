![Oli Saúde|100x397,20%](https://hs-7708371.f.hubspotfree.net/hub/7708371/hubfs/logo-olisaude.png?upscale=true&width=288&upscale=true&name=logo-olisaude.png)

# Backend Developer Challenge
Este é um desafio simples para testar suas habilidades na construção de APIs.
Os serviços da Oli usam principalmente tecnologias Kotlin e Springboot. No entanto, você pode usar qualquer linguagem e framework que lhe pareça mais confortável.

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
- [ problemas de saude ]
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

# Entrega
Você deve fazer um fork deste repositório e confirmar a solução na pasta de dev. Seu repositório deve ser público.

Enviar um e-mail para tech@olisaude.com.br com a url da sua solução.