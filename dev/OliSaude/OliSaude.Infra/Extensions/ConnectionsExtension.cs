using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OliSaude.Application.Clientes.Queries;
using OliSaude.Application.Interfaces;
using OliSaude.Infra.Data;
using OliSaude.Infra.Repostorio;
using System.Reflection;

namespace OliSaude.Infra.Extensions
{
    public static class ConnectionsExtension
    {
        public static IServiceCollection AddDependece(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<OliSaudeContext>(options => 
                options.UseSqlite(configuration.GetConnectionString("DefaultConnetion")));
            services.AddMediatR(cfg => 
                cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            services.AddScoped<IClienteRepositorio, ClienteRepositorio>();

            return services;
        }
    }
}
