using OliSaude.Application.Commom;

namespace OliSaude.Application.Clientes.CreateCliente
{
    public class ClienteResponse : Response
    {
        public ClienteResponse()
        {
            
        }
        public ClienteResponse(ResponseData obj, string mensagem)
        {
            Data =  obj;
            Mensagem = mensagem;
            StatusCode = 201; 
        }
        public ClienteResponse(string mensagem, int status)
        {
            Mensagem = mensagem; 
            StatusCode=status;
        }
        public ResponseData? Data { get; set; }
    }

    public record ResponseData(int Id, string Nome); 
}
