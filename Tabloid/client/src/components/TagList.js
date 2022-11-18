import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {getAllTags, deleteTag} from "../Managers/TagManager.js";
import { AddTagForm } from "./AddTag.js";   

const TagList = () =>{
    const [tags, setTags]=useState([]);

    const gettingTags=()=>{
    getAllTags().then(tags => setTags(tags));
    }

    useEffect(()=>{
        gettingTags();
    },[])
    
    return(
        <>
        <AddTagForm setTags={setTags}/>
        <div className="container" >
            {tags.map((t) => {
            return <div className ="row"><div className = "column"> {t.name} <div className = "column">
                <Button onClick={() => deleteTag(t.id)}>Delete</Button>
                </div></div></div>})}
        </div>
        </>
    );

};
export default TagList;