using System.Threading.Tasks;

namespace family_tree_API.Data
{
  public class UnitOfWork : IUnitOfWork
  {

    private readonly DataContext _context;
    public UnitOfWork(DataContext context)
    {

      this._context = context;
    }

    public async Task CompleteAsync()
    {
      await _context.SaveChangesAsync();
    }
  }
}
