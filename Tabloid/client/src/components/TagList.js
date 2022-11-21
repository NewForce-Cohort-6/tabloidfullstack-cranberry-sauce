import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {getAllTags, deleteTag} from "../Managers/TagManager.js";
import { AddTagForm } from "./AddTag.js";   
import { Navigate, useNavigate } from "react-router-dom";

const TagList = () =>{
    const [tags, setTags]=useState([]);
    const navigate = useNavigate();

    const gettingTags=()=>{
    getAllTags().then(tags => setTags(tags));
    }

    useEffect(()=>{
        gettingTags();
    },[])
    
    return(
        <>
        <AddTagForm setTags={setTags}/>
        <div className="container">
        <table>
            {tags.map((t) => {
            return (<tr> <td>{t.name}</td><td><Button onClick={() => {navigate(`/DeleteTag/${t.id}`)}}>Delete</Button></td></tr> )
                 
            })}
        </table></div>
        </>
    );

};
export default TagList;