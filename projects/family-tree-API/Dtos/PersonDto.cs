using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace family_tree_API.Models
{
    public class PersonDto
    {
  //     public Person()
  //  {
  //    this.Parents = new HashSet<Person>();
  //    this.Siblings = new HashSet<Person>();
  //    this.Children = new HashSet<Person>();
  //  }
        public enum GenderType
        {
            Male,
            Female,
            NotSpecified
        }

                public enum RoleType
        {
            Father,
            Mother,
            Child
        }

        public RoleType Role { get; set; }

        public GenderType Gender { get; set; }
        public int FamilyId { get; set; }
        public Family Family { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Contact Contact { get; set; }

        public Address Address { get; set; }

        public int OwnerId { get; set; }
        public User Owner { get; set; }

    }
}
