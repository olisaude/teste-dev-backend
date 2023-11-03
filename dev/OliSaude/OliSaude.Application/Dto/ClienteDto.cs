using AutoMapper;
using OliSaude.Domain.Entities;
using OliSaude.Domain.Enums;

namespace OliSaude.Application.Dto
{
    public class ClienteDto
    {
        public int Id { get; set; }
        public string Nome { get;  set; }
        public DateTime DataNascimento { get;  set; }
        public ESexo Sexo { get;  set; }
        public string NomeProblema { get; set; }
        public int GrauProblema { get;  set; }

        private class Map : Profile
        {
            public Map() {
                CreateMap<ClienteDto, Cliente>().ReverseMap(); 
            }
        }
    }
}
