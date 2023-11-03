using MediatR;
using OliSaude.Application.Dto;
using OliSaude.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OliSaude.Application.Clientes.Queries
{
    public class GetClienteMaiorRiscoQuery : IRequest<IEnumerable<ClienteDto>>
    {
       
    }

    public class GetClienteMaiorRiscoHandler : IRequestHandler<GetClienteMaiorRiscoQuery, IEnumerable<ClienteDto>>
    {
        private readonly IClienteService _service;

        public GetClienteMaiorRiscoHandler(IClienteService service)
        {
            _service = service;
        }

        public async Task<IEnumerable<ClienteDto>> Handle(GetClienteMaiorRiscoQuery request, CancellationToken cancellationToken)
        {
            await Task.CompletedTask; 
            return _service.GetClientesMaiorRisco(); 
        }
    }
}
