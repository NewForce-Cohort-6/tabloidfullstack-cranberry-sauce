using System;
using System.Collections.Generic;
using System.Data;
using System.Reflection.PortableExecutable;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Repositories;
using Tabloid.Utils;




namespace Tabloid.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration config) : base(config) { }
        public List<Post> GetAllPublishedPosts()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT p.Id, p.Title, p.Content, 
                              p.ImageLocation AS HeaderImage,
                              p.CreateDateTime, p.PublishDateTime, p.IsApproved,
                              p.CategoryId, p.UserProfileId,
                              c.[Name] AS CategoryName,
                              u.FirstName, u.LastName, u.DisplayName, 
                              u.Email, u.CreateDateTime, u.ImageLocation AS AvatarImage,
                              u.UserTypeId, 
                              ut.[Name] AS UserTypeName
                         FROM Post p
                              LEFT JOIN Category c ON p.CategoryId = c.id
                              LEFT JOIN UserProfile u ON p.UserProfileId = u.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                        WHERE IsApproved = 1 AND PublishDateTime < SYSDATETIME()
                           Order BY PublishDateTime DESC";


                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();

                    while (reader.Read())
                    {
                        posts.Add(new Post()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            Content = reader.GetString(reader.GetOrdinal("Content")),
                            ImageLocation = reader.GetString(reader.GetOrdinal("HeaderImage")),
                            CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime")),
                            //PublishDateTime = DbUtils.GetNullableDateTime(reader, "PublishDateTime"),
                            CategoryId = reader.GetInt32(reader.GetOrdinal("CategoryId")),
                            IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                            Category = new Category()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Name = reader.GetString(reader.GetOrdinal("Title"))
                            },
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            UserProfile = new UserProfile()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                DisplayName = reader.GetString(reader.GetOrdinal("DisplayName")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime")),
                                ImageLocation = DbUtils.GetString(reader, "HeaderImage"),
                                UserTypeId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                UserType = new UserType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                    Name = reader.GetString(reader.GetOrdinal("DisplayName"))
                                }
                            }
                        }
                        ) ;
                    }

                    reader.Close();

                    return posts;
                }
            }
        }

        public List<Post> GetUserPosts(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id AS PostId, p.Title, p.Content, p.CreateDateTime AS PostDateCreated, p.PublishDateTime,  
                       p.ImageLocation AS PostImageUrl, p.CategoryId, p.UserProfileId, p.IsApproved,
                       up.FirstName, up.LastName, up.DisplayName, up.Email, up.CreateDateTime AS UserProfileDateCreated, 
                       up.ImageLocation AS UserProfileImageUrl,
                        c.[Name] AS CategoryName
                  FROM Post p 
                       LEFT JOIN UserProfile up ON p.UserProfileId = up.id
                       LEFT JOIN Category c ON p.CategoryId = c.id               
                    WHERE p.PublishDateTime < SYSDATETIME()
                        AND p.UserProfileId = @UserProfileId
                        ORDER By p.CreateDateTime DESC";
                    cmd.Parameters.AddWithValue("@UserProfileId" ,id);
                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();

                    while (reader.Read())
                    {
                        posts.Add(NewPostFromReader(reader));
                    }

                    reader.Close();

                    return posts;
                }
            }
        }

        public Post GetPublishedPostById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT p.Id, p.Title, p.Content, 
                              p.ImageLocation AS HeaderImage,
                              p.CreateDateTime, p.PublishDateTime, p.IsApproved,
                              p.CategoryId, p.UserProfileId,
                              c.[Name] AS CategoryName,
                              u.FirstName, u.LastName, u.DisplayName, 
                              u.Email, u.CreateDateTime, u.ImageLocation AS AvatarImage,
                              u.UserTypeId, 
                              ut.[Name] AS UserTypeName
                         FROM Post p
                              LEFT JOIN Category c ON p.CategoryId = c.id
                              LEFT JOIN UserProfile u ON p.UserProfileId = u.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                        WHERE IsApproved = 1 AND PublishDateTime < SYSDATETIME()
                              AND p.id = @id";

                    cmd.Parameters.AddWithValue("@id", id);
                    var reader = cmd.ExecuteReader();

                    Post post = null;

                    if (reader.Read())
                    {
                        post = NewPostFromReader(reader);
                    }

                    reader.Close();

                    return post;
                }
            }
        }

        public Post GetPostById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT p.Id, p.Title, p.Content, 
                              p.ImageLocation AS HeaderImage,
                              p.CreateDateTime, p.PublishDateTime, p.IsApproved,
                              p.CategoryId, p.UserProfileId,
                              c.[Name] AS CategoryName,
                              u.FirstName, u.LastName, u.DisplayName, 
                              u.Email, u.CreateDateTime, u.ImageLocation AS AvatarImage,
                              u.UserTypeId, 
                              ut.[Name] AS UserTypeName
                         FROM Post p
                              LEFT JOIN Category c ON p.CategoryId = c.id
                              LEFT JOIN UserProfile u ON p.UserProfileId = u.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                        WHERE p.id = @id ";

                    cmd.Parameters.AddWithValue("@id", id);
                    //cmd.Parameters.AddWithValue("@userProfileId", userProfileId);
                    var reader = cmd.ExecuteReader();

                    Post post = null;

                    if (reader.Read())
                    {
                        post = NewPostFromReader(reader);
                    }

                    reader.Close();

                    return post;
                }
            }
        }

        public void AddPost(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            INSERT INTO Post (
                                Title, Content, ImageLocation, CreateDateTime, PublishDateTime,
                                IsApproved, CategoryId, UserProfileId )
                            OUTPUT INSERTED.ID
                            VALUES (
                                @Title, @Content, @ImageLocation, @CreateDateTime, null,
                                @IsApproved, @CategoryId, @UserProfileId )";
                    cmd.Parameters.AddWithValue("@Title", post.Title);
                    cmd.Parameters.AddWithValue("@Content", post.Content);
                    cmd.Parameters.AddWithValue("@ImageLocation", post.ImageLocation);
                    cmd.Parameters.AddWithValue("@CreateDateTime", DateTime.Now);
                    //cmd.Parameters.AddWithValue("@PublishDateTime", null);
                    cmd.Parameters.AddWithValue("@IsApproved", true);
                    cmd.Parameters.AddWithValue("@CategoryId", post.CategoryId);
                    cmd.Parameters.AddWithValue("@UserProfileId", post.UserProfileId);

                    post.Id = (int)cmd.ExecuteScalar();
                }
            }
        }


        public void DeletePost(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                DELETE FROM Post
                WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public Post NewPostFromReader(SqlDataReader reader)
        {
            return new Post()
            {
                Id = reader.GetInt32(reader.GetOrdinal("PostId")),
                Title = reader.GetString(reader.GetOrdinal("Title")),
                Content = reader.GetString(reader.GetOrdinal("Content")),
                //ImageLocation = reader.GetString(reader.GetOrdinal("HeaderImage")),
                CreateDateTime = reader.GetDateTime(reader.GetOrdinal("PostDateCreated")),
                //PublishDateTime = DbUtils.GetNullableDateTime(reader, "PublishDateTime"),
                CategoryId = reader.GetInt32(reader.GetOrdinal("CategoryId")),
                IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                Category = new Category()
                {
                    Id = reader.GetInt32(reader.GetOrdinal("PostId")),
                    Name = reader.GetString(reader.GetOrdinal("Title"))
                },
                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                UserProfile = new UserProfile()
                {
                    Id = reader.GetInt32(reader.GetOrdinal("PostId")),
                    FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                    LastName = reader.GetString(reader.GetOrdinal("LastName")),
                    DisplayName = reader.GetString(reader.GetOrdinal("DisplayName")),
                    Email = reader.GetString(reader.GetOrdinal("Email")),
                    CreateDateTime = reader.GetDateTime(reader.GetOrdinal("PostDateCreated")),
                    //ImageLocation = DbUtils.GetString(reader, "HeaderImage"),
                    UserTypeId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                    UserType = new UserType()
                    {
                        Id = reader.GetInt32(reader.GetOrdinal("PostId")),
                        Name = reader.GetString(reader.GetOrdinal("DisplayName"))
                    }
                }
            };
        }
    }
}


//Given the user is in the Tabloid application
//When they select the My Posts menu option
//Then they should be directed to the "My Posts" list page
//And the page should display ALL the Posts authored by the logged-in user
//And each post in the list should display the title, author and category
//And the list should be in order of creation date with the most recent on top




//public void UpdatePost(Post post)
//{
//    using (var conn = Connection)
//    {
//        conn.Open();
//        using (var cmd = conn.CreateCommand())
//        {
//            cmd.CommandText = @"
//                    UPDATE Post
//                            SET
//                                 Title = @title,
//                                  Content = @content,
//                                  ImageLocation = @imageLocation,
//                                  CategoryId = @categoryId
//                            WHERE Id = @id";

//            cmd.Parameters.AddWithValue("@title", post.Title);
//            cmd.Parameters.AddWithValue("@content", post.Content);
//            cmd.Parameters.AddWithValue("@imageLocation", DbUtils.ValueOrDBNull(post.ImageLocation));
//            cmd.Parameters.AddWithValue("@categoryId", post.CategoryId);
//            cmd.Parameters.AddWithValue("@id", post.Id);

//            cmd.ExecuteNonQuery();
//        }
//    }
//}




//public void AddTagToPost(SqlDataReader reader)
//{
//    using (var conn = Connection)
//    {
//        conn.Open();
//        using (var cmd = conn.CreateCommand())
//        {
//            cmd.CommandText = @"
//                DELETE FROM Post
//                WHERE Id = @id";

//            cmd.Parameters.AddWithValue("@id", id);

//            cmd.ExecuteNonQuery();
//        }
//    }
//}




