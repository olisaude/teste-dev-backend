using OliSaude.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OliSaude.webApi.Interfaces
{
    public interface IClientRepository
    {
        void Create(Client client);

        IEnumerable<Client> Read();

        Client SearchById(Guid id);

        IEnumerable<ClientResult> ReadByRisk();

        void Update(Client client);

        void Delete(Guid id);
    }
}
