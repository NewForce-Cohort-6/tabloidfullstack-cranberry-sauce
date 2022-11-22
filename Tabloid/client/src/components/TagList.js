import React, { useEffect, useState } from "react";
import getAllTags from "../Managers/TagManager.js";

const TagList = () =>{
    const [tags, setTags]=useState([]);

    const gettingTags=()=>{
    getAllTags().then(tags => setTags(tags));
    }

    useEffect(()=>{
        gettingTags();
    },[])
    
    return(
        <div className="container" >
            {tags.map(t => <div className ="row"><div className = "column"> {t.name} </div></div>)}
        </div>
    );

};
export default TagList;