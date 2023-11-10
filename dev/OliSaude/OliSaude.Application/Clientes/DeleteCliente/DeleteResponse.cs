using OliSaude.Application.Commom;

namespace OliSaude.Application.Clientes.DeleteCliente
{
    public class DeleteResponse : Response
    {
        public DeleteResponse()
        {

        }
        public DeleteResponse(string mensagem, int status)
        {
            Mensagem = mensagem;
            StatusCode = status;
        }

        public DeleteResponse(DeleteData data, string mensagem)
        {
            Data = data;
            Mensagem = mensagem;
            StatusCode = 200; 
        }

        public DeleteData?  Data { get; set; }

    }

    public record DeleteData(int Id, string Name, string Problema); 
}
