using Flunt.Notifications;
using Flunt.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace OliSaude.webApi.Domains
{
    public partial class Client : Notifiable<Notification>
    {
        public Client(string name, DateTime birthDate, string sex, Guid idHealthProblems)
        {
            Id = Guid.NewGuid();
            CreationDate = DateTime.Now;
            UpdateDate = DateTime.Now;

            AddNotifications(
            new Contract<Notification>()
               .Requires()

               .IsNotEmpty(name, "Name", "Name cannot be empty")
               .IsNotNull(birthDate, "BirthDatre", "BirthDatre cannot be null")
               .IsNotEmpty(sex, "Sex", "Sex cannot be empty")
               .IsNotNull(idHealthProblems, "IdHealthProblem", "IdHealthProblem cannot be null")
            );

            if (IsValid)
            {
                Name = name;
                BirthDate = birthDate;
                Sex = sex;
                IdHealthProblems = idHealthProblems;
            }
        }

        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public DateTime BirthDate { get; private set; }
        public string Sex { get; private set; }
        public Guid IdHealthProblems { get; private set; }
        public DateTime CreationDate { get; private set; }
        public DateTime UpdateDate { get; private set; }

        public virtual HealthProblem IdHealthProblemsNavigation { get; set; }

        public void Update(string name, string sex, Guid idHealthProblem, DateTime? birthDate = null)
        {
            if (!String.IsNullOrEmpty(name))
                Name = name;

            if (birthDate != null)
                BirthDate = Convert.ToDateTime(birthDate);

            if (!String.IsNullOrEmpty(sex))
                Sex = sex;

            if (idHealthProblem != Guid.Empty)
                IdHealthProblems = idHealthProblem;

            UpdateDate = DateTime.Now;
        }
    }

    public class ClientResult
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public Guid IdHealthProblem { get; set; }
        public HealthProblem IdHealthProblemNavigation { get; set; }
        public int DegreeOfProblem { get; set; }
    }
}
