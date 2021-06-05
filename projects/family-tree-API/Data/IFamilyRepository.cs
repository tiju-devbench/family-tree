using System.Collections.Generic;
using System.Threading.Tasks;
using family_tree_API.Models;

namespace family_tree_API.Data
{
    public interface IFamilyRepository
    {
         Task<Family> CreateFamily(Family family);
         Task<Family> UpdateFamily(Family family);
         Task<bool> DeleteFamily(Family family);
         //Task<QueryResult<Family>> GetFamilies(FamilyQuery filter);
         Task<Family> GetFamily(int id, bool includeRelated = true);

    }
}
