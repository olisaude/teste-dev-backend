using MediatR;
using OliSaude.Application.Interfaces;
using OliSaude.Domain.Entities;
using OliSaude.Domain.ValueObject;

namespace OliSaude.Application.Clientes.CreateCliente
{
    public class CreateUserHandler : IRequestHandler<CreateClienteCommand, int>
    {
        private readonly IClienteRepositorio _repo;

        public CreateUserHandler(IClienteRepositorio repo)
        {
            _repo = repo;
        }

        public  async Task<int> Handle(CreateClienteCommand request, CancellationToken cancellationToken)
        {
            var problema = new ProblemaSaude(request.NomeProblema, request.GrauProblema);
            var cliente = new Cliente(request.Nome, request.DataNascimento, request.Sexo, problema); 
            return await _repo.SaveAsync(cliente, cancellationToken);
                
        }
    }
}
