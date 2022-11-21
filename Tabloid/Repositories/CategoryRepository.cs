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
        public Category GetCatById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT c.Id, c.Name, p.Id as PostId, p.CategoryId, p.Title 
                        FROM Category c
                        LEFT JOIN Post p
                        ON c.Id = p.CategoryId
                        WHERE c.Id = @id
                        ORDER BY NAME";

                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();

                    Category cat = null;
                    if (reader.Read())
                    {
                        cat = new Category()
                        {
                            Id = id,
                            Name = DbUtils.GetString(reader, "Name")
                        };
                        reader.Close();
                        return cat;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }

        }
        public void UpdateCat(Category category)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Category
                           SET Name = @Name
                            WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Name", category.Name);
                    DbUtils.AddParameter(cmd, "@Id", category.Id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
