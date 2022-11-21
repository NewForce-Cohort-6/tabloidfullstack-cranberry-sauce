using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }

        public List<Category> GetAllCats()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Name 
                        FROM Category
                        ORDER BY NAME";

                    var reader = cmd.ExecuteReader();

                    var cat = new List<Category>();
                    while (reader.Read())
                    {
                        cat.Add(new Category()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name")

                        });
                    }
                    reader.Close();
                    return cat;
                }
            }
        }


    }
}
