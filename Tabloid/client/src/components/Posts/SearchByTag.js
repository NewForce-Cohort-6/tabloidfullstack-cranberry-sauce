import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { getAllTags } from "../../Managers/TagManager";

export const SearchByTag=({setterFunction})=>{
    const [tags, setTags]=useState([]);

    
        useEffect(()=>{
            getAllTags()
            .then(tags => setTags(tags))                       
        },[])

       
    
    return(
        <>
         <fieldset>
            <label>List Posts by Tag: </label>
            <select onChange={(evt)=>{setterFunction(evt.target.value)}}>
                <option value="0">Select a tag</option>                
                {tags.map((tag)=>{
                    return(
                        <option value={tag.id}>{tag.name}</option>
                    )
                })}
            </select>
         </fieldset>
        </>
    )
}