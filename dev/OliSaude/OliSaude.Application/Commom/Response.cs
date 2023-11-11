namespace OliSaude.Application.Commom
{
    public abstract class Response
    {
        public string Mensagem { get; set; } = string.Empty;
        public int StatusCode { get; set; } = 400;
        public bool IsSucess => StatusCode >= 200 && StatusCode <= 299;

    }
}
