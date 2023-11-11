using MediatR;
using OliSaude.Application.Clientes.UpdateUser;
using OliSaude.Application.Interfaces;
using OliSaude.Domain.ValueObject;

namespace OliSaude.Application.Clientes.UpdateCliente
{
    public class UpdateClienteHandler : IRequestHandler<UpdateClienteCommand, UpdateResponse>
    {
        private readonly IClienteRepositorio _repositoio;

        public UpdateClienteHandler(IClienteRepositorio repositorio)
        {
            _repositoio = repositorio;
        }

        public async Task<UpdateResponse> Handle(UpdateClienteCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var cliente = await _repositoio.GetClienteAsync(request.Id);

                if (cliente is null)
                    return new UpdateResponse("Cliente invalido", 400);

                var problema = new ProblemaSaude(request.NomeProblema, request.GrauProblema);
                cliente.UpdateCliente(request.Nome, request.DataNascimento, problema);
                await _repositoio.UpdateClienteAsync(cliente, cancellationToken);
                
                var data = new UpdateData(cliente.Id, 
                    cliente.Nome,
                    Enum.GetName(cliente.Sexo), 
                    cliente.DataNascimento,
                    cliente.ProblemaDeSaude.Nome, 
                    cliente.ProblemaDeSaude.Grau, 
                    cliente.DataCriacao, 
                    cliente.DataActualizacao);

                return new UpdateResponse(data, "Cliente actualizado com sucesso"); 
            }catch (Exception ex)
            {
                return new UpdateResponse(ex.Message, 500); 
            }

        }
    }
}
