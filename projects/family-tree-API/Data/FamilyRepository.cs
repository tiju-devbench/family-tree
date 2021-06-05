using System.Threading.Tasks;
using family_tree_API.Models;
using Microsoft.EntityFrameworkCore;

namespace family_tree_API.Data
{
  public class FamilyRepository : IFamilyRepository
  {

    private readonly DataContext _context;
    public FamilyRepository(DataContext context)
    {
      _context = context;
    }

    public Task<Family> CreateFamily(Family family)
    {
      throw new System.NotImplementedException();
    }

    public Task<bool> DeleteFamily(Family family)
    {
      throw new System.NotImplementedException();
    }

    public Task<Family> UpdateFamily(Family family)
    {
      throw new System.NotImplementedException();
    }
    public async Task<Family> GetFamily(int id, bool includeRelated = true)
    {
      if (!includeRelated)
        return await _context.Families.FindAsync(id);

      return await _context.Families
        .SingleOrDefaultAsync(f => f.id == id);
    }

  }
}
