using AutoMapper;
using MediatR;
using OliSaude.Application.Dto;
using OliSaude.Application.Interfaces;

namespace OliSaude.Application.Clientes.Queries
{
    public class GetClienteByIdQuery: IRequest<ClienteDto>
    {
        public int Id { get; set; }
    }

    public class GetClienteByIdHandler : IRequestHandler<GetClienteByIdQuery, ClienteDto>
    {
        private readonly IMapper _mapper;
        private readonly IClienteRepositorio _repositorio;

        public GetClienteByIdHandler(IMapper mapper, IClienteRepositorio repositorio)
        {
            _mapper = mapper;
            _repositorio = repositorio;
        }

        public async Task<ClienteDto> Handle(GetClienteByIdQuery request, CancellationToken cancellationToken)
        {
           var cliente = await _repositorio.GetClienteAsync(request.Id);
           return _mapper.Map<ClienteDto>(cliente);
        }
    }
}
