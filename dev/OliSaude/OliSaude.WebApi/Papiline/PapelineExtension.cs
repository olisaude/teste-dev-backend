using MediatR;
using Microsoft.AspNetCore.Mvc;
using OliSaude.Application.Clientes.CreateCliente;
using OliSaude.Application.Clientes.DeleteCliente;
using OliSaude.Application.Clientes.Queries;
using OliSaude.Application.Clientes.UpdateUser;

namespace OliSaude.WebApi.Papiline
{
    public static class PapelineExtension
    {
        public static void Endpoints(this WebApplication app)
        {
            app.MapGet("/api/v1/clientes", async ([AsParameters] GetAllClienteQuery query,
                [FromServices] IMediator mediator) =>
            {
            
                var result = await mediator.Send(query);
                if (result is null)
                    return Results.NotFound("Resultado não encontrado");
                return Results.Ok(result);
            });

            app.MapGet("/api/v1/clientes/{id:int}", async ([AsParameters] GetClienteByIdQuery query,
                [FromServices] IMediator mediator) =>
            {

                var result = await mediator.Send(query);
                if (result is null)
                    return Results.BadRequest("Resultado não encontrado");
                return Results.Ok(result);
            });

            app.MapGet("/api/v1/clientes/maiorRisco", async ([AsParameters] GetClienteMaiorRiscoQuery query,
                [FromServices] IMediator mediator) =>
            {

                var result =await mediator.Send(query);
                if (result is null)
                   return Results.NotFound("Resultado não encontrado");
                return Results.Ok(result);
            });

            app.MapPost("/api/v1/clientes", async ([FromBody] CreateClienteCommand command,
                [FromServices] IMediator mediator) =>
            { 
                var result = await mediator.Send(command);
                if (!result.IsSucess)
                    return Results.BadRequest(result); 
                return Results.Created($"/api/v1/cliente/{result.Data.Id}", result);
            });

            app.MapPut("/api/v1/clientes", async ([FromBody] UpdateClienteCommand command,
                [FromServices] IMediator mediator) =>
            {
               var result = await mediator.Send(command);
                if (!result.IsSucess)
                    return Results.NotFound(result);

                return Results.Ok(result);
            });

            app.MapDelete("/api/v1/clientes", async ([FromBody] DeleteClienteCommand command,
                    [FromServices] IMediator mediator) =>
           {
                 var result = await mediator.Send(command);
               if (!result.IsSucess)
                   return Results.Json(result, statusCode: result.StatusCode); 
               return Results.Ok(result);
            });
        }
    }
}
