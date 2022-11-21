import React from "react";
import { Route, Routes } from "react-router-dom";
import { PostList } from "./Posts/PostList";
import Hello from "./Hello.js"


export default function ApplicationViews() {

 return(
      <Routes>
          <Route path="/" element= {<Hello/>} />
       <Route path="/post" element= {<PostList/>} />
      </Routes>
   );
 
}
