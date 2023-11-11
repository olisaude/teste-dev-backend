using AutoMapper;
using OliSaude.Domain.Entities;

namespace OliSaude.Application.Dto.Mapper
{
    public class ProfileMaping : Profile
    {
        public ProfileMaping()
        {

            CreateMap<Cliente, ClienteDto>()
                .ForMember(c=>c.NomeProblema, opt =>opt.MapFrom(ob=>ob.ProblemaDeSaude.Nome))
                .ForMember(c => c.GrauProblema, opt => opt.MapFrom(ob => ob.ProblemaDeSaude.Grau))
                .ForMember(c=>c.DataRegisto, opt=>opt.MapFrom(ob=>ob.DataCriacao)).ReverseMap();
        }
    }
}
