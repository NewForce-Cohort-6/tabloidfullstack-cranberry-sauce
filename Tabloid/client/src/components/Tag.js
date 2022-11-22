import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
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


return(<><tr> 
  <td>{tag.name}</td><td><Button onClick={() => {navigate(`/DeleteTag/${tag.id}`)}}>Delete</Button></td>
  <td><Button onClick={() => {setEdit(true)}}>Edit</Button></td>
  <td>{edit?
    <td>
    <Form>
      <fieldset>
        <FormGroup> 
                     
          <Input id="tagName" type="text" placeholder = {tag.name} onChange={(e) => {
            const copyOfState ={...newTag};
            copyOfState.name = e.target.value;
            setNewTag(copyOfState)}} />        
          <Button className="littleButton" onClick={editTheTag}>Save Tag</Button>
        </FormGroup>
        </fieldset>
    </Form></td>
    :""} </td>
</tr></>
)
}