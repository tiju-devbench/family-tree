using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace family_tree_API.Models
{
  public class Person
  {


    public int id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string DisplayImage { get; set; }

    public Address Address { get; set; }

    public string Bio { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime Death { get; set; }
    public DateTime WeddingAnniversary { get; set; }

    public bool Gender { get; set; }

  }
}
