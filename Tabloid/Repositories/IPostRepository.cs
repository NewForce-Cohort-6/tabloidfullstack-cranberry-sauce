using System.Collections.Generic;
using Tabloid.Models;


namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        
        //void DeletePost(int id);
        //void UpdatePost(Post post);
        List<Post> GetAllPublishedPosts();

        void AddPost(Post post);

        void DeletePost(int id);
        List<Post> GetUserPosts(int id);
        Post GetPublishedPostById(int id);
        Post GetPostById(int id);
         
    }
}