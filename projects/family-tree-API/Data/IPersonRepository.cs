using System.Threading.Tasks;
using family_tree_API.Models;

namespace family_tree_API.Data
{
    public interface IPersonRepository
    {
         Task<Person> CreatePerson(Person person);
         Task<Person> UpdatePerson(Person person);
         bool DeletePerson(Person person);
         Task<Person> GetPerson(int id);
    }
}
