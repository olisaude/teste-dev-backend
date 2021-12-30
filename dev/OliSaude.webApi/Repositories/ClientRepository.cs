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
    public class ClientRepository : IClientRepository
    {
        private readonly OliSaudeContext _context;

        public ClientRepository(OliSaudeContext context)
        {
            _context = context;
        }

        public void Create(Client client)
        {
            _context.Clients.Add(client);

            _context.SaveChanges();
        }

        public void Delete(Guid id)
        {
            _context.Clients.Remove(SearchById(id));

            _context.SaveChanges();
        }

        public IEnumerable<Client> Read()
        {
            return _context.Clients
                .AsNoTracking()
                .Include(c => c.IdHealthProblemsNavigation);
        }

        public IEnumerable<ClientResult> ReadByRisk()
        {
            List<Client> clientList = new List<Client>();

            int degreeHighestValue = 0;

            IEnumerable<HealthProblem> healthProblems = _context.HealthProblems
                            .AsNoTracking()
                            .ToList();

            degreeHighestValue = healthProblems.Max(x => x.DegreeOfProblem);

            for (int i = degreeHighestValue; i > 0; i--)
            {
                if (clientList.Count < 10)
                {
                    var newList = _context.Clients
                            .Where(c => c.IdHealthProblemsNavigation.DegreeOfProblem == i)
                            .Include(x => x.IdHealthProblemsNavigation)
                            .ToList();

                    for (int a = 0; a < newList.Count; a++)
                    {
                        if(clientList.Count < 10)
                        {
                            clientList.Add(newList[a]);
                        }
                    }

                }else
                {
                    break;
                }
            }

            IEnumerable<ClientResult> riskList = clientList.Select(c =>
            {
                return new ClientResult
                {
                    Id = c.Id,
                    Name = c.Name,
                    Sex = c.Sex,
                    CreationDate = c.CreationDate,
                    UpdateDate = c.UpdateDate,
                    IdHealthProblem = c.IdHealthProblems,
                    DegreeOfProblem = c.IdHealthProblemsNavigation.DegreeOfProblem
                };
            });

            return riskList;
        }

        public Client SearchById(Guid id)
        {
            return _context.Clients
                .AsNoTracking()
                .Include(c => c.IdHealthProblemsNavigation)
                .FirstOrDefault(c => c.Id == id);
        }

        public void Update(Client client)
        {
            _context.Entry(client).State = EntityState.Modified;

            _context.SaveChanges();
        }
    }
}
