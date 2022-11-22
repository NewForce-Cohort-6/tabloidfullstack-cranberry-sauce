import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {getAllTags, deleteTag} from "../Managers/TagManager.js";
import { AddTagForm} from "./AddTag";   
import {Tag} from "./Tag";
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
            return (
            <tr> 
                <Tag tag={t} setTags={setTags}/>
            </tr> )
                 
            })}
        </table></div>
        </>
    );

};
export default TagList;