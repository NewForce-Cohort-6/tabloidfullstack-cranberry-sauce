using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IUserRepository
    {
        List<UserProfile> getAllProfiles();

        //void Add(UserProfile userProfile);
        UserProfile GetByEmail(string email);
    }
}