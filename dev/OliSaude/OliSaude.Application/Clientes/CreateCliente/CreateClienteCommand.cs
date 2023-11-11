using MediatR;
using OliSaude.Domain.Enums;

namespace OliSaude.Application.Clientes.CreateCliente
{
    public  class CreateClienteCommand : IRequest<ClienteResponse>
    {
        public string Nome { get; set; }
        public DateTime DataNascimento { get; set; }
        public ESexo Sexo { get; set; }
        public string NomeProblema { get; set; }
        public int GrauProblema { get; set; }

    }
}
