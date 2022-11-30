import React from "react";
import { CardTitle } from "reactstrap";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardSubtitle from "reactstrap/lib/CardSubtitle";
import CardText from "reactstrap/lib/CardText";
import Button from "reactstrap/lib/Button";

const UserProfile = ({profile}) => {
    return (
        <>
            <div style={{marginBottom: "2vw"}}>
      <Card>
        <CardBody>
          <CardTitle>{profile.fullName}</CardTitle>
          <CardSubtitle>{profile.displayName}</CardSubtitle>
          <CardText>{profile.userType.name}</CardText>
          <a href="/profiles">Details</a>
        </CardBody>
      </Card>
    </div>
        </>
    )
}

export default UserProfile