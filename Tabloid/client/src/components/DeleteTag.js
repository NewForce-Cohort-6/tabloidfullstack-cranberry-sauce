import { Button} from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {deleteTag, getTagById} from "../Managers/TagManager.js";
import { useParams } from "react-router-dom";

const DeleteTag =()=>{
    
    const [tag, setTag]=useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    
    //get the tag id from the url and fetch the full tag object in order to print the name on the page.
    const whichTag = (id)=>{
    getTagById(id)
    .then((thisTag)=>{setTag(thisTag)})
   };

    useEffect(()=>{
        whichTag(id);
    },[])

    ///to confirm and carry out deletion
    const Yes =()=>{
        deleteTag(id)
        .then(navigate(`/TagManagement`))
    }

    //to cancel deletion and just navigate back to the TagList
    const No =()=>{
        navigate(`/TagManagement`) 
    }
    
console.log(tag)



    return(
        <>
        <div className="container" >
        
        Wait....are you SURE you want to delete "{tag.name}" from the Tags?</div><div className="container" >
        <Button onClick={() => {Yes()}}>Yes</Button> &nbsp; &nbsp; <Button onClick={() => {No()}}>No</Button></div>
        </>
    )
    
};

export default DeleteTag;