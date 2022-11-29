using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetAll();
        Tag GetTagById(int id);
        public void AddTag(Tag tag);
        public void DeleteTag(int tagId);
        public void EditTag(Tag tag);
    }
}
