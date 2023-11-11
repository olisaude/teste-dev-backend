using MediatR;

namespace OliSaude.Application.Clientes.DeleteCliente
{
    public class DeleteClienteCommand : IRequest<DeleteResponse>
    {
        public int Id { get; set; }
    }
}
