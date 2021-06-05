using System;
using System.Threading.Tasks;

namespace family_tree_API.Data
{
    public interface IUnitOfWork
   {
    Task CompleteAsync();
  }
}
