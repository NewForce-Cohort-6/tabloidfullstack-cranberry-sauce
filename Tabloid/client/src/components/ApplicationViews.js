import React from "react";
import { Route, Routes } from "react-router-dom";
import { PostList } from "./Posts/PostList";


export default function ApplicationViews() {

 return(
      <Routes>
       <Route path="/" element= {<PostList/>} />
      </Routes>
   );
 
}
