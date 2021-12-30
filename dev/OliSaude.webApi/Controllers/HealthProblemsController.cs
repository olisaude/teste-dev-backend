using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OliSaude.webApi.Domains;
using OliSaude.webApi.DTO;
using OliSaude.webApi.Interfaces;
using OliSaude.webApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OliSaude.webApi.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    public class HealthProblemsController : ControllerBase
    {
        private readonly IHealthProblemRepository _healthProblem;

        public HealthProblemsController(IHealthProblemRepository healthProblem)
        {
            _healthProblem = healthProblem;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_healthProblem.Read());
        }

        [HttpPost]
        public IActionResult Post(HealthProblemDTO healthProblem)
        {
            if (_healthProblem.SearchByName(healthProblem.Name) != null)
            {
                return BadRequest("there is already a health problem with that name");
            }

            HealthProblem hp = new HealthProblem(healthProblem.Name, healthProblem.DegreeOfProblem);

            _healthProblem.Create(hp);

            return StatusCode(201);
        }

        [HttpPatch("{id}")]
        public IActionResult Patch(Guid id, HealthProblemDTO healthProblem)
        {
            try
            {
                HealthProblem hp = _healthProblem.SearchById(id);

                if (hp == null)
                    return NotFound("Health Problem not found");

                hp.Update(healthProblem.Name, healthProblem.DegreeOfProblem);

                _healthProblem.Update(hp);

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
            if(_healthProblem.SearchById(id) == null)
            {
                return NotFound("Health Problem not found");
            }

            _healthProblem.Delete(id);

            return StatusCode(204);
        }
    }
}
