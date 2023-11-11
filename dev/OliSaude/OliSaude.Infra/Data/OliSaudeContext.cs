using Microsoft.EntityFrameworkCore;
using OliSaude.Domain.Entities;
using System.Reflection;

namespace OliSaude.Infra.Data; 

public class OliSaudeContext : DbContext 
{
    public DbSet<Cliente> Clientes { get; set; }
    public OliSaudeContext(DbContextOptions<OliSaudeContext> options )
        : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly()); 
    }
}
