namespace OliSaude.Domain.ValueObject;
public class ProblemaSaude : ValeuObject
{
    public ProblemaSaude(string nome, int grau)
    {
        Nome = nome;
        Grau = grau;
    }

    public string Nome { get; private set; }
    public int Grau { get; private set; }
}
