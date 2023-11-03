using MediatR;
using OliSaude.Application.Interfaces;

namespace OliSaude.Application.Clientes.DeleteCliente
{
    public class DeleteClienteHandler : IRequestHandler<DeleteClienteCommand>
    {
        private readonly IClienteRepositorio _repo;

        public DeleteClienteHandler(IClienteRepositorio repo)
        {
            _repo = repo;
        }

        public async Task Handle(DeleteClienteCommand request, CancellationToken cancellationToken)
        {
            var cliente = await _repo.GetClienteAsync(request.Id);
            if (cliente is null)
                throw new Exception("Não um cliente com esse Id"); 
            _repo.DeleteCliente(cliente);
        }
    }
}
