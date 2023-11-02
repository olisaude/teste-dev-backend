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

    public int Save(Cliente cliente)
    {
        _context.Add(cliente);
        _context.SaveChanges();

        return cliente.Id;
    }

    public void UpdateCliente(int id)
    {
       var cliente = _context.Clientes.FirstOrDefault(x => x.Id == id);
        _context.Entry(cliente).State = EntityState.Modified; 
        _context.SaveChanges();
    }

    public void DeleteCliente(int id)
    {
        var cliente = _context.Clientes.FirstOrDefault(x=>x.Id ==id);
        _context.Remove(cliente);
        _context.SaveChanges(); 
    }
}
