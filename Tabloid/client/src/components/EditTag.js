import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { editTag, getAllTags } from "../Managers/TagManager";

export const EditTagForm = ({setEditedTag, tag})=>{
    const [newTag, setNewTag]=useState({Name: ""});
    const navigate = useNavigate();


    const editTheTag = (e) => {
        e.preventDefault()
        editTag(tag.id)
        .then(getAllTags)
        .then((newTags)=>setEditedTag(newTags))
        .then((t)=>{setNewTag({Name: ""})})
    }


return(<td>
    <Form>
      <fieldset>
        <FormGroup> 
                     
          <Input id="tagName" type="text" placeholder = {tag.name} onChange={(e) => {
            const copyOfState ={...newTag};
            copyOfState.Name = e.target.value;
            setNewTag(copyOfState)}} />        
          <Button className="littleButton" onClick={editTheTag}>Save Tag</Button>
        </FormGroup>
        </fieldset>
    </Form></td>
)
}