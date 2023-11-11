using MediatR;
using OliSaude.Application.Clientes.UpdateCliente;

namespace OliSaude.Application.Clientes.UpdateUser;

public class UpdateClienteCommand : IRequest<UpdateResponse>
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public DateTime DataNascimento { get; set; }
    public string NomeProblema { get; set; }
    public int GrauProblema { get; set; }
}
