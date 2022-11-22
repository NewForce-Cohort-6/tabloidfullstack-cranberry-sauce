import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { addTag } from "../Managers/TagManager";

export const AddTagForm = ()=>{
    const [newTag, setNewTag]=useState({Name: ""});
    const navigate = useNavigate();

    const addATag = () => {
        addTag(newTag).then((t)=>{setNewTag({Name: ""})})
    }


return(
    <Form>
      <fieldset>
        <FormGroup>
          <Label htmlFor="tagName">Add a tag:</Label>
          <Input id="tagName" type="text" onChange={(e) => {
            const copyOfState ={...newTag};
            copyOfState.Name = e.target.value;
            setNewTag(copyOfState)}} />
        </FormGroup>
        <FormGroup>
          <Button onClick={addATag}>Save Tag</Button>
        </FormGroup>
        </fieldset>
    </Form>
)
}