using MediatR;
using OliSaude.Domain.Enums;

namespace OliSaude.Application.Clientes.UpdateUser; 

public class UpdateClienteCommand : IRequest
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public DateTime DataNascimento { get; set; }
    public string NomeProblema { get; set; }
    public int GrauProblema { get; set; }
}
