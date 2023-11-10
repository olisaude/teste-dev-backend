using MediatR;
using OliSaude.Application.Interfaces;

namespace OliSaude.Application.Clientes.DeleteCliente
{
    public class DeleteClienteHandler : IRequestHandler<DeleteClienteCommand, DeleteResponse>
    {
        private readonly IClienteRepositorio _repositorio;

        public DeleteClienteHandler(IClienteRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        public async Task<DeleteResponse> Handle(DeleteClienteCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var cliente = await _repositorio.GetClienteAsync(request.Id);
                if (cliente is null)
                    return new DeleteResponse("Não foi encontrado um cliente com esse Id", 400);
                _repositorio.DeleteCliente(cliente);

                var data = new DeleteData(cliente.Id, cliente.Nome, cliente.ProblemaDeSaude.Nome); 

                return new DeleteResponse(data, "Cliente Removido com sucesso");
            }catch (Exception ex)
            {
                return new DeleteResponse(ex.Message, 500);
            }
           
        }
    }
}
