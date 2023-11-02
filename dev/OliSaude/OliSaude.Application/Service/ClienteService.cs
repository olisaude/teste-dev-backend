using AutoMapper;
using OliSaude.Application.Dto;
using OliSaude.Application.Interfaces;
using OliSaude.Domain.Entities;

namespace OliSaude.Application.Service
{
    public class ClienteService : IClienteService
    {
        private readonly IClienteRepositorio _repo;
        private readonly IMapper _mapper; 

        public ClienteService(IClienteRepositorio repo)
        {
            _repo = repo;
        }

        public IEnumerable<ClienteDto> GetClientesMaiorRisco()
        {

            var clientes = _repo.GetAllClientes().OrderByDescending(cliente =>CalculoScore(cliente)).Take(10); 

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
