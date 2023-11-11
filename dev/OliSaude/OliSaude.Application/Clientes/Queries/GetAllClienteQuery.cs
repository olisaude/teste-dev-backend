﻿using AutoMapper;
using MediatR;
using OliSaude.Application.Dto;
using OliSaude.Application.Interfaces;

namespace OliSaude.Application.Clientes.Queries
{
    public class GetAllClienteQuery : IRequest<IEnumerable<ClienteDto>>
    {
        public static bool TryParse(string value, out GetAllClienteQuery result)
        {
            if (!string.IsNullOrWhiteSpace(value))
            {
                result = new GetAllClienteQuery();
                return true;
            }
            result = null; 
            return false; 

        }
    }

    public class GetAllClienteHandler : IRequestHandler<GetAllClienteQuery, IEnumerable<ClienteDto>>
    {
        private readonly IClienteRepositorio _repositorio; 
        private readonly IMapper _mapper;

        public GetAllClienteHandler(IClienteRepositorio repositorio, IMapper mapper)
        {
            _repositorio = repositorio;
            _mapper = mapper;
        }

  
        public async Task<IEnumerable<ClienteDto>> Handle(GetAllClienteQuery request, CancellationToken cancellationToken)
        {
            await Task.CompletedTask;
            var clientes = _repositorio.GetAllClientes();
            var clientesDto = _mapper.Map<IEnumerable<ClienteDto>>(clientes); 

            return clientesDto;
        }
    }
}
