using OliSaude.Domain.Entities;

namespace OliSaude.Application.Interfaces
{
    public interface IClienteRepositorio
    {
        int Save(Cliente cliente);
        IEnumerable<Cliente> GetAllClientes();
        Cliente GetCliente(int id);
        void UpdateCliente(int id); 
        void DeleteCliente(int cliente);
    }
}
