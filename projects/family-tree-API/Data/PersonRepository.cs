using System.Threading.Tasks;
using family_tree_API.Models;

namespace family_tree_API.Data
{
  public class PersonRepository : IPersonRepository
  {
    private readonly DataContext _context;
    public PersonRepository(DataContext context)
    {
      _context = context;
    }
    public async Task<Person> CreatePerson(Person person)
    {
      await _context.Persons.AddAsync(person);
      return person;
    }

    public bool DeletePerson(Person person)
    {
      _context.Persons.Remove(person);
      return true;
    }

    public Task<Person> UpdatePerson(Person person)
    {
      throw new System.NotImplementedException();
    }

    public async Task<Person> GetPerson(int id)
    {
        return await _context.Persons.FindAsync(id);
    }
  }
}
