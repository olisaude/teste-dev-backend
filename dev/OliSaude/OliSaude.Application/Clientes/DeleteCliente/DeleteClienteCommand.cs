using MediatR;

namespace OliSaude.Application.Clientes.DeleteCliente
{
    public class DeleteClienteCommand : IRequest
    {
        public int Id { get; set; }
    }
}
