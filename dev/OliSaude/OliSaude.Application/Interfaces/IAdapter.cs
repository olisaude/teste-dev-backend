namespace OliSaude.Application.Interfaces
{
    public interface IAdapter<in TSource, out TDestiny>
    {
        TDestiny Adapte(TSource source);
    }
}
