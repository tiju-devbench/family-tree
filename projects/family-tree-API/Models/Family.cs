using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace family_tree_API.Models
{
  public class Family
  {
    public int id { get; set; }
    public string Name { get; set; }

    public Address Address { get; set; }

    public bool IsRoot { get; set; }

    public string Description { get; set; }

    public string DisplayImage { get; set; }

  }
}
