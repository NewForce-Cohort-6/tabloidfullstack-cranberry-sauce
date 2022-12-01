import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import { getAllTags } from "../../Managers/TagManager";
import { PostList } from "./PostList";
import { SearchByTag } from "./SearchByTag";

export const PostContainer=()=>{
    
    const [tagSearch, setTagSearch]=useState(0)
    return(
        <>
        <SearchByTag setterFunction = {setTagSearch} />
        <PostList tagSearchState={tagSearch} />
        
        </>
    )
};