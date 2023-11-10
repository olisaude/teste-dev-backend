using OliSaude.Application.Commom;

namespace OliSaude.Application.Clientes.CreateCliente
{
    public class ClienteResponse : Response
    {
        public ClienteResponse()
        {
            
        }
        public ClienteResponse(int id, string mensagem, bool isSucess)
        {
            Id = id;
            Mensagem = mensagem;
            IsSucess = isSucess;
        }
        public ClienteResponse(string mensagem, bool isSucess)
        {
            Mensagem = mensagem; 
            IsSucess = isSucess;
        }
        public int Id { get; set; }
    }
}
