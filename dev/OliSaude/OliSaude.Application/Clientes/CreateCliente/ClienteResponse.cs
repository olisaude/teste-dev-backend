using OliSaude.Application.Commom;

namespace OliSaude.Application.Clientes.CreateCliente
{
    public class ClienteResponse : Response
    {
        public ClienteResponse()
        {
            
        }
        public ClienteResponse(ResponseData obj, string mensagem, bool isSucess)
        {
            Data =  obj;
            Mensagem = mensagem;
            IsSucess = isSucess;
        }
        public ClienteResponse(string mensagem, bool isSucess)
        {
            Mensagem = mensagem; 
            IsSucess = isSucess;
        }
        public ResponseData? Data { get; set; }
    }

    public class ResponseData
    {
        public int Id { get; set; }
        public string Nome { get; set; }
    }
}
