using MediatR;
using OliSaude.Application.Interfaces;
using OliSaude.Domain.Entities;
using OliSaude.Domain.ValueObject;

namespace OliSaude.Application.Clientes.CreateCliente
{
    public class CreateClienteHandler : IRequestHandler<CreateClienteCommand, ClienteResponse>
    {
        private readonly IClienteRepositorio _repositorio;

        public CreateClienteHandler(IClienteRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        public  async Task<ClienteResponse> Handle(CreateClienteCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var problema = new ProblemaSaude(request.NomeProblema, request.GrauProblema);
                var cliente = new Cliente(request.Nome, request.DataNascimento, request.Sexo, problema);
                await _repositorio.SaveAsync(cliente, cancellationToken);

                if (cliente.Id == 0)
                    return new ClienteResponse("Não foi possivel salvar o cliente", 404);

                var obj = new ResponseData(cliente.Id, cliente.Nome);

                return new ClienteResponse(obj, "Cliente Salvo com sucesso");

            }catch (Exception ex)
            {
                return new ClienteResponse(ex.Message, 500);
            }
        }
    }
}
