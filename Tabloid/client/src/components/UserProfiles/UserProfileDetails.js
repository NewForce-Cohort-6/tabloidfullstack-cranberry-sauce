import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'
import { getProfileById } from '../../Managers/UserProfileManager'

const ProfileDetails = () => {
  const [profile, setProfile] = useState({})
  const { id } = useParams()

  const getSingleProfile = () => {
    getProfileById(id).then((singleProfile) => setProfile(singleProfile))
  }

  const handleNull = (image) => {
    const defaultImage = "http://cdn.onlinewebfonts.com/svg/img_98811.png";
    image.target.src = defaultImage;
}

  useEffect(() => {
    getSingleProfile()
  }, [])

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card-column">
            <>
              <div style={{ marginBottom: '2vw' }}>
                <Card>
                <img
            alt="Post"
            src={profile.imageLocation}
            onError={handleNull}
        />
                  <CardBody>
                    
                    <CardTitle>
                      <h4>{profile.displayName}</h4>
                    </CardTitle>
                    <CardSubtitle>
                      <h6>{profile.userType?.name}</h6>
                    </CardSubtitle>
                    <CardText>
                      {profile.fullName}
                      <br></br>
                      {profile.email}
                      <br></br>
                      {profile.createDateTime}
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileDetails
