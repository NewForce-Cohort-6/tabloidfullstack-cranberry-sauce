using System.Collections.Generic;
using Tabloid.Models;


namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        //void Add(Post post);
        //void DeletePost(int id);
        //void UpdatePost(Post post);
        List<Post> GetAllPublishedPosts();
        List<Post> GetUserPosts(int id);
        Post GetPublishedPostById(int id);
        Post GetUserPostById(int id, int userProfileId);
        List<Post> ListPostsByCategory(int categoryId);
    }
}