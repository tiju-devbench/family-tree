using System.Collections.Generic;

namespace family_tree_API.Models
{

    public class QueryResult<T>
    {
        public int TotalItems { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}
