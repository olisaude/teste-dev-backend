using Flunt.Notifications;
using Flunt.Validations;
using OliSaude.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OliSaude.webApi.DTO
{
    public class HealthProblemDTO
    {
        public string Name { get; set; }
        public int DegreeOfProblem { get; set; }
    }
}
