using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;
using System.Linq;


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
                    SELECT c.id,c.Name, 
                    p.CategoryId, p.Id as PostId, 
                    p.Title, p.Content 
                    FROM Category c 
                    LEFT JOIN Post p 
                    ON c.id = p.CategoryId ";
                    var reader = cmd.ExecuteReader();

                    var category = new List<Category>();

                    while (reader.Read())
                    {
                        Post post = null;
                        Category cat = new Category()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name"))

                        };
                        if (!reader.IsDBNull(reader.GetOrdinal("PostId")))
                        {

                            post = new Post()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("PostId")),
                                Title = reader.GetString(reader.GetOrdinal("Title")),
                                Content = reader.GetString(reader.GetOrdinal("Content")),
                                CategoryId = reader.GetInt32(reader.GetOrdinal("CategoryId"))

                            };

                            cat.Posts.Add(post);
                        }
                        if (!category.Any(p => p.Id == cat.Id))
                        {
                            category.Add(cat); 
                        }
                        else
                        {
                            if (post != null) 
                            {
                                category.FirstOrDefault(p => p.Id == cat.Id).Posts.Add(post);
                            }
                        }
                    }
                    reader.Close();
                    return category;
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    DELETE FROM Category
                    WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
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
                    } else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }
    }
}
