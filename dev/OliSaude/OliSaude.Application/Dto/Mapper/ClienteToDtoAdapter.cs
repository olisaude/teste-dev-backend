using OliSaude.Application.Interfaces;
using OliSaude.Domain.Entities;

namespace OliSaude.Application.Dto.Mapper
{
    public class ClienteToDtoAdapter : IAdapter<Cliente, ClienteDto>
    {
        public ClienteDto Adapte(Cliente source)
        {
            return new ClienteDto
            {
                Id = source.Id,
                Nome = source.Nome,
                DataNascimento = source.DataNascimento,
                Sexo = source.Sexo,
                DataRegisto = source.DataCriacao, 
                DataActualizacao = source.DataActualizacao,
                NomeProblema = source.ProblemaDeSaude.Nome,
                GrauProblema = source.ProblemaDeSaude.Grau
            }; 
        }
    }
}
