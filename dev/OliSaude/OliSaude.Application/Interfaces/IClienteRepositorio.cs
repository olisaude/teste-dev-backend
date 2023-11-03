using OliSaude.Domain.Entities;

namespace OliSaude.Application.Interfaces
{
    public interface IClienteRepositorio
    {
        Task<int> SaveAsync(Cliente cliente, CancellationToken cancellationToken);
        IEnumerable<Cliente> GetAllClientes();
        Cliente GetCliente(int id);
        Task UpdateCliente(Cliente cliente, CancellationToken cancellationToken); 
        void DeleteCliente(Cliente cliente);
    }
}
