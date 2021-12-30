using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OliSaude.webApi.Domains;
using OliSaude.webApi.DTO;
using OliSaude.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OliSaude.webApi.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;
        private readonly IHealthProblemRepository _healthProblemRepository;

        public ClientsController(IClientRepository clientRepository, IHealthProblemRepository healthProblemRepository)
        {
            _clientRepository = clientRepository;
            _healthProblemRepository = healthProblemRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_clientRepository.Read());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            return Ok(_clientRepository.SearchById(id));
        }

        [HttpGet("risk")]
        public IActionResult GetByRisk()
        {
            return Ok(_clientRepository.ReadByRisk());
        }

        [HttpPost]
        public IActionResult Post(ClientDTO client)
        {
            try
            {
                if(_healthProblemRepository.SearchById(client.IdHealthProblem) == null)
                {
                    return NotFound("Health problem not found");
                }

                Client newClient = new Client(
                    client.Name,
                    client.BirthDate,
                    client.Sex,
                    client.IdHealthProblem
                );

                if (!newClient.IsValid)
                {
                    return BadRequest(
                        new
                        {
                            message = "Enter data correctly",
                            error = newClient.Notifications
                        }
                    );
                }

                _clientRepository.Create(newClient);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPatch("{idClient}")]
        public IActionResult Patch(Guid idClient, ClientDTO client)
        {
            try
            {
                Client clientSearched = _clientRepository.SearchById(idClient);

                if(clientSearched == null)
                {
                    return NotFound("Client not found");
                }

                clientSearched.Update(
                    client.Name,
                    client.Sex,
                    client.IdHealthProblem,
                    _healthProblemRepository.SearchById(client.IdHealthProblem) == null ?
                    null : 
                    client.BirthDate
                );

                _clientRepository.Update(clientSearched);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                if (_clientRepository.SearchById(id) == null)
                {
                    return NotFound("Client not found!");
                }

                _clientRepository.Delete(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
