using OliSaude.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OliSaude.webApi.Interfaces
{
    public interface IHealthProblemRepository
    {
        void Create(HealthProblem healthProblem);

        IEnumerable<HealthProblem> Read();

        HealthProblem SearchById(Guid id);

        HealthProblem SearchByName(string name);

        void Update(HealthProblem healthProblem);

        void Delete(Guid id);
    }
}
