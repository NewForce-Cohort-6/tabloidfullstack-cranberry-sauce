import React, {useEffect, useState} from "react";
import { getAllProfiles } from "../../Managers/UserProfileManager";
import UserProfile from "./Userprofile";
import { Link } from "react-router-dom";

const ProfileList = () => {
const [profile, setProfile] = useState([])

const getProfiles = () => {
    getAllProfiles().then((allProfiles) => setProfile(allProfiles))
}

useEffect(() => {
    getProfiles()
}, [])

return (
    <>
      <div className="container">
        <div className="row justify-content-center">
            <div className="card-column">
           <div style={{textAlign: "center"}}>
             <Link to={`/profiles/deactivated`} style={{color: "gray" }}>View Deactivated</Link>
            </div>
          {profile.map((profile) => (
              <tr>
                <td >
                  <UserProfile key={profile.id} profile={profile} get={getProfiles} />
                </td>
                  </tr>
              ))}
              </div>
        </div>
      </div>
    </>
  );
};

export default ProfileList;