import React, {useEffect, useState} from "react";
import { getAllProfiles } from "../../Managers/UserProfileManager";
import DeactivatedUserProfile from "./UserProfileDeactivated";
import { Link } from "react-router-dom";
const DeactivatedProfileList = () => {
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
             <Link to={`/profiles`} style={{color: "gray" }}>View Active</Link>
            </div>
          {profile.map((profile) => (
              <tr>
                <td >
                  <DeactivatedUserProfile key={profile.id} profile={profile} get={getProfiles} />
                </td>
                  </tr>
              ))}
              </div>
        </div>
      </div>
    </>
  );
};

export default DeactivatedProfileList;