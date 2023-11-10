namespace OliSaude.Application.Commom
{
    public abstract class Response
    {
        public string Mensagem { get; set; } = string.Empty;
        public bool IsSucess { get; set; }
    }
}
