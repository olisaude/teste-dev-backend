using OliSaude.Application.Commom;

namespace OliSaude.Application.Clientes.UpdateCliente
{
    public class UpdateResponse : Response
    {
        public UpdateResponse()
        {

        }
        public UpdateResponse(string mensagem, int status)
        {
            Mensagem = mensagem;
            StatusCode = status;
        }

        public UpdateResponse(UpdateData data, string mensagem)
        {
            Data = data;
            Mensagem = mensagem;
            StatusCode = 200;
        }

        public UpdateData? Data { get; set; }
    }

    public record UpdateData(int Id,
        string Name,
        string Sexo,
        DateTime DataNascimento,
        string Problema,
        int Grau,
        DateTime DataCriacao,
        DateTime DataActualizacao);
}
