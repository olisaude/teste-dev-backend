using OliSaude.Domain.Entities;

namespace OliSaude.Application.Interfaces
{
    public interface IClienteRepositorio
    {
        Task<int> SaveAsync(Cliente cliente, CancellationToken cancellationToken);
        IEnumerable<Cliente> GetAllClientes();
        Task<Cliente> GetClienteAsync(int id);
        Task UpdateClienteAsync(Cliente cliente, CancellationToken cancellationToken); 
        void DeleteCliente(Cliente cliente);
    }
}
