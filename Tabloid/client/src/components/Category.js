import React from "react";
import {Button} from "reactstrap";
import { useNavigate } from "react-router-dom";

// Our category object? I think?
const Category = ({cat}) => {
    const navigate = useNavigate();
    return (
    <tr  style={{padding: 5}}>
       <td style={{minWidth: 130}}> {cat.name}</td><td><Button size="sm" onClick = {() => {navigate(`/ListPostsByCategory/${cat.id}`)}}>See Posts</Button></td>
    </tr>
    )
}

// Exporting the category object for use elsewhere
export default Category