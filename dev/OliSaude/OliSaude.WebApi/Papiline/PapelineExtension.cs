﻿using MediatR;
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
            app.MapGet("/api/v1/clientes", async (GetAllClienteQuery query,
                [FromServices] IMediator mediator) =>
            {

                var result = await mediator.Send(query);
                if (result is null)
                    return Results.NotFound("Resultado não encontrado");
                return Results.Ok(result);
            });

            app.MapGet("/api/v1/clientes/{id}", async (GetClienteByIdQuery query,
                [FromServices] IMediator mediator) =>
            {

                var result = await mediator.Send(query);
                if (result is null)
                    return Results.BadRequest("Resultado não encontrado");
                return Results.Ok(result);
            });

            app.MapGet("/api/v1/clientes/maiorRisco", async (GetClienteMaiorRiscoQuery query,
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
                if (result > 1)
                    throw new Exception("Erro ao salvar o cliente"); 
                return Results.Created($"/{result}", result);
            });

            app.MapPut("/api/v1/clientes", async ([FromBody] UpdateClienteCommand command,
                [FromServices] IMediator mediator) =>
            {
                await mediator.Send(command);
            });

            app.MapDelete("/api/v1/clientes", async ([FromBody] DeleteClienteCommand command,
                    [FromServices] IMediator mediator) =>
           {
                await mediator.Send(command);
            });

        }
    }
}
