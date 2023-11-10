using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OliSaude.Application.Clientes.CreateCliente;
using OliSaude.Application.Clientes.DeleteCliente;
using OliSaude.Application.Clientes.Queries;
using OliSaude.Application.Clientes.UpdateCliente;
using OliSaude.Application.Clientes.UpdateUser;
using OliSaude.Application.Dto;
using OliSaude.Application.Dto.Mapper;
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
            services.AddAutoMapper(Assembly.GetExecutingAssembly())
                    .AddAutoMapper(typeof(ProfileMaping));

            services.AddScoped<IClienteRepositorio, ClienteRepositorio>();
            services.AddScoped<IRequestHandler< GetAllClienteQuery, IEnumerable < ClienteDto >>,GetAllClienteHandler>();
            services.AddScoped<IRequestHandler< GetClienteByIdQuery, ClienteDto >,GetClienteByIdHandler >();
            services.AddScoped<IRequestHandler< GetClienteMaiorRiscoQuery, IEnumerable < ClienteDto >>, GetClienteMaiorRiscoHandler >();

            services.AddScoped< IRequestHandler<CreateClienteCommand, ClienteResponse>, CreateClienteHandler >();
            services.AddScoped< IRequestHandler < UpdateClienteCommand >, UpdateClienteHandler >();
            services.AddScoped< IRequestHandler < DeleteClienteCommand, DeleteResponse >, DeleteClienteHandler >();

            return services;
        }
    }
}
