import React from "react";
import { CardTitle, Row, Table } from "reactstrap";
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
          <CardTitle><h4> <a href="/profiles" style={{color: "gray"}}>{profile.displayName}</a></h4></CardTitle>
          <CardSubtitle>{profile.fullName}</CardSubtitle>
          <CardText>{profile.userType.name}</CardText>
        </CardBody>
      </Card>
    </div>
        </>
    )
}

export default UserProfile