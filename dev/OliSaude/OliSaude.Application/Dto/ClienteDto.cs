using OliSaude.Domain.Enums;

namespace OliSaude.Application.Dto
{
    public class ClienteDto
    {
        public int Id { get; set; }
        public string Nome { get;  set; }
        public DateTime DataNascimento { get;  set; }
        public ESexo Sexo { get;  set; }
        public DateTime DataRegisto { get; set; }
        public DateTime DataActualizacao { get; set; }
        public string NomeProblema { get; set; }
        public int GrauProblema { get;  set; }
    }
}
