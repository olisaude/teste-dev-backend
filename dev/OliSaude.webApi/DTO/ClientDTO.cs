using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OliSaude.webApi.DTO
{
    public class ClientDTO
    {
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string Sex { get; set; }
        public Guid IdHealthProblem { get; set; }
    }
}
