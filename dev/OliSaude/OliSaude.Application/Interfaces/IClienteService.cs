using OliSaude.Application.Dto;
using OliSaude.Domain.Entities;

namespace OliSaude.Application.Interfaces
{
    public interface IClienteService
    {

        IEnumerable<ClienteDto> GetClientesMaiorRisco();

    }
}
