using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAllCats();
        public void UpdateCat(Category category);
        public Category GetCatById(int id);
        public void Add(Category cat);
    }
}