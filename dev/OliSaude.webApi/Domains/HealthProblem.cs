using Flunt.Notifications;
using Flunt.Validations;
using System;
using System.Collections.Generic;

#nullable disable

namespace OliSaude.webApi.Domains
{
    public partial class HealthProblem : Notifiable<Notification>
    {
        public HealthProblem(string name, int degreeOfProblem)
        {
            Clients = new HashSet<Client>();

            Id = Guid.NewGuid();

            AddNotifications(
            new Contract<Notification>()
               .Requires()

               .IsNotEmpty(name, "Name", "Name cannot be empty")
               .IsNotNull(degreeOfProblem, "DegreeOfProblem", "DegreeOfProblem cannot be null")
            );

            if (IsValid)
            {
                Name = name;
                DegreeOfProblem = degreeOfProblem;
            }
        }

        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public int DegreeOfProblem { get; private set; }

        public virtual ICollection<Client> Clients { get; set; }

        public void Update(string name, int? degreeOfProblem = null)
        {
            if (!String.IsNullOrEmpty(name))
            {
                Name = name;
            }

            if (degreeOfProblem != null)
            {
                DegreeOfProblem = Convert.ToInt32(degreeOfProblem);
            }
        }
    }
}
