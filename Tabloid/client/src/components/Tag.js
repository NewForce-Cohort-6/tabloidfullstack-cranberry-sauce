import React, { useEffect, useState } from "react";
import { Table, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { editTag, getAllTags } from "../Managers/TagManager";

export const Tag = ({tag, setTags})=>{
    const [newTag, setNewTag]=useState({name: ""});
    const navigate = useNavigate();
    const [edit, setEdit]=useState(false);


    const editTheTag = (e) => {
        e.preventDefault()
        editTag({id: tag.id, name: newTag.name})
        .then(getAllTags)
        .then((tags)=>setTags(tags))
        .then((newTags)=>setEdit(false))
        .then((t)=>{setNewTag({Name: ""})})

    }


return(<><tr style={{padding: 5}}> 
  <td style={{minWidth: 125}}>{tag.name}</td><td><Button size="sm" onClick={() => {navigate(`/DeleteTag/${tag.id}`)}}>Delete</Button></td>
  <td><Button size="sm" onClick={() => {setEdit(true)}}>Edit</Button></td>
  {edit?
    <td>
    <Form>
      <fieldset>
        <FormGroup> 
                     
          <Input id="tagName" type="text" placeholder = {tag.name} onChange={(e) => {
            const copyOfState ={...newTag};
            copyOfState.name = e.target.value;
            setNewTag(copyOfState)}} />        
          <Button size="sm" onClick={editTheTag}>Save</Button> &nbsp; &nbsp;
          <Button size="sm" onClick={(newTags)=>setEdit(false)}>Cancel</Button>
        </FormGroup>
        </fieldset>
    </Form></td>
    :""} 
</tr></>
)
}