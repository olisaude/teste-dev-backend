using AutoMapper;
using MediatR;
using OliSaude.Application.Dto;
using OliSaude.Application.Interfaces;
using OliSaude.Domain.Entities;

namespace OliSaude.Application.Clientes.Queries
{
    public class GetClienteMaiorRiscoQuery : IRequest<IEnumerable<ClienteDto>>
    {
       
    }

    public class GetClienteMaiorRiscoHandler : IRequestHandler<GetClienteMaiorRiscoQuery, IEnumerable<ClienteDto>>
    {
        private readonly IClienteRepositorio _repo;
        private readonly IMapper _mapper;

        public GetClienteMaiorRiscoHandler(IClienteRepositorio repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;   
        }

        public async Task<IEnumerable<ClienteDto>> Handle(GetClienteMaiorRiscoQuery request, CancellationToken cancellationToken)
        {
            await Task.CompletedTask;
            var clientes = _repo.GetAllClientes().OrderByDescending(cliente => CalculoScore(cliente)).Take(10);

            return _mapper.Map<IEnumerable<ClienteDto>>(clientes);
        }
        private double CalculoScore(Cliente cliente)
        {
            var sd = cliente.ProblemaDeSaude.Grau;
            var denominador = 1 + Math.Pow(Math.E, -(-2.8 + sd));
            var score = (1 / denominador) * 100;
            return score;
        }
    }
}
