using MediatR;
using OliSaude.Application.Clientes.UpdateUser;
using OliSaude.Application.Interfaces;
using OliSaude.Domain.ValueObject;

namespace OliSaude.Application.Clientes.UpdateCliente
{
    public class UpdateClienteHandler : IRequestHandler<UpdateClienteCommand>
    {
        private readonly IClienteRepositorio _repo;

        public UpdateClienteHandler(IClienteRepositorio repo)
        {
            _repo = repo;
        }

        public async Task Handle(UpdateClienteCommand request, CancellationToken cancellationToken)
        {
            var cliente = _repo.GetCliente(request.Id);

            if (cliente is null)
                throw new Exception("Cliente invalido");
            var problema = new ProblemaSaude(request.NomeProblema, request.GrauProblema);
            cliente.UpdateCliente(request.Nome, request.DataNascimento, problema, DateTime.UtcNow);
            await _repo.UpdateCliente(cliente, cancellationToken); 
        }
    }
}
