namespace OliSaude.Domain.Entities
{
    public abstract class Entity
    {
        protected Entity()
        {
            DataCriacao = DateTime.UtcNow; 
        }
        public int Id { get; private set; }
        public DateTime DataCriacao { get; private set; }
    }
}
