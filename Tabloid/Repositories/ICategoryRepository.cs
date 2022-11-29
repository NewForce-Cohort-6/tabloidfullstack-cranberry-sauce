using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAllCats();
        public void Delete(int id);
        public Category GetCatById(int id);
    }
}