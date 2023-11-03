using Microsoft.EntityFrameworkCore;
using OliSaude.Application.Interfaces;
using OliSaude.Domain.Entities;
using OliSaude.Infra.Data;

namespace OliSaude.Infra.Repostorio;
public class ClienteRepositorio : IClienteRepositorio
{
    private readonly OliSaudeContext _context;

    public ClienteRepositorio(OliSaudeContext context)
    {
        _context = context;
    }

    public IEnumerable<Cliente> GetAllClientes()
    {
        return _context
                .Clientes
                .AsNoTracking()
                .ToList(); 
    }

    public Cliente GetCliente(int id)
    {
       var cliente =  _context.Clientes.FirstOrDefault(c => c.Id == id);
        return cliente; 
    }

    public async Task<int> SaveAsync(Cliente cliente, CancellationToken cancellationToken)
    {
        _context.Add(cliente);
        await _context.SaveChangesAsync();

        return cliente.Id;
    }

    public async Task UpdateCliente(Cliente cliente, CancellationToken cancellationToken)
    {
        _context.Entry(cliente).State = EntityState.Modified; 
       await  _context.SaveChangesAsync(cancellationToken);
    }

    public void DeleteCliente(Cliente cliente)
    {
        _context.Remove(cliente);
        _context.SaveChanges(); 
    }
}
