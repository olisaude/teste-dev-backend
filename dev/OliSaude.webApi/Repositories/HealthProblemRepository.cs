using Microsoft.EntityFrameworkCore;
using OliSaude.webApi.Contexts;
using OliSaude.webApi.Domains;
using OliSaude.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OliSaude.webApi.Repositories
{
    public class HealthProblemRepository : IHealthProblemRepository
    {
        private readonly OliSaudeContext _context;

        public HealthProblemRepository(OliSaudeContext context)
        {
            _context = context;
        }

        public void Create(HealthProblem healthProblem)
        {
            _context.HealthProblems.Add(healthProblem);

            _context.SaveChanges();
        }

        public void Delete(Guid id)
        {
            _context.HealthProblems.Remove(SearchById(id));

            _context.SaveChanges();
        }

        public IEnumerable<HealthProblem> Read()
        {
            return _context.HealthProblems
                    .AsNoTracking()
                    .ToList();
        }

        public HealthProblem SearchById(Guid id)
        {
            return _context.HealthProblems
                    .AsNoTracking()
                    .FirstOrDefault(x => x.Id == id);
        }

        public HealthProblem SearchByName(string name)
        {
            return _context.HealthProblems
                    .AsNoTracking()
                    .FirstOrDefault(x => x.Name == name);
        }

        public void Update(HealthProblem healthProblem)
        {
            _context.Entry(healthProblem).State = EntityState.Modified;

            _context.SaveChanges();
        }
    }
}
