import React from "react";
import { Link } from "react-router-dom";
import { CardTitle, Row, Table } from "reactstrap";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardSubtitle from "reactstrap/lib/CardSubtitle";
import CardText from "reactstrap/lib/CardText";

export const UserProfile = ({profile}) => {
    return (
        <>
            <div style={{marginBottom: "2vw"}}>
      <Card>
        <CardBody>
          <CardTitle><h4><Link to={`/profiles/details/${profile.id}`} style={{color: "gray"}}>{profile.displayName}</Link></h4></CardTitle>
          <CardSubtitle>{profile.fullName}</CardSubtitle>
        <CardText>{profile.userType.name}</CardText>
        </CardBody>
      </Card>
    </div>
        </>
    )
}



export default UserProfile