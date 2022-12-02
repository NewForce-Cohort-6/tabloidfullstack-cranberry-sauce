import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, CardTitle, Row, Table } from "reactstrap";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardSubtitle from "reactstrap/lib/CardSubtitle";
import CardText from "reactstrap/lib/CardText";

export const UserProfile = ({profile, get}) => {

const handleProfileActiveStatus = () => {

  const updateProfileActiveStatus = {
    id: profile.id,
    firstName: profile.firstName,
    lastName: profile.lastName,
    displayName: profile.displayName,
    email: profile.email,
    createDateTime: profile.createDateTime,
    imageLocation: profile.imageLocation,
    isActive: false,
    userTypeId: profile.userTypeId,
    userType: {
        id: profile.userType.id,
        name: profile.userType.name
    },
    fullName: profile.fullName

}

return fetch(`https://localhost:5001/api/UserProfile/${profile.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateProfileActiveStatus),
})
  .then((response) => response.json())
  .then((profiles) =>
   get(profiles)
  );

}

  if (profile.isActive){

    return (
      <>
            <div style={{marginBottom: "2vw"}}>
      <Card>
        <CardBody>
          <CardTitle><h4><Link to={`/profiles/details/${profile.id}`} style={{color: "gray"}}>{profile.displayName}</Link></h4></CardTitle>
          <CardSubtitle>{profile.fullName}</CardSubtitle>
        <CardText>{profile.userType.name}</CardText>
        </CardBody>
        <Button onClick={(event) => {
          handleProfileActiveStatus()
        }}>Deactivate</Button>
      </Card>
    </div>
        </>
    )
  } else {
    return (
      <>
            <div style={{marginBottom: "2vw"}}>
      <Card>
        <CardBody>
          <CardTitle><h4><Link to={`/profiles/details/${profile.id}`} style={{color: "gray"}}>{profile.displayName}</Link></h4></CardTitle>
          <CardSubtitle>{profile.fullName}</CardSubtitle>
        <CardText>{profile.userType.name}</CardText>
        </CardBody>
        <Button>Activate</Button>
      </Card>
    </div>
        </>
    )
  }
}



export default UserProfile