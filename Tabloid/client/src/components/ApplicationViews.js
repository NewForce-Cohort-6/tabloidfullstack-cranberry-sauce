import React from "react";
import { Route, Routes } from "react-router-dom";

import { PostList } from "./Posts/PostList";
import { PostForm } from "./Posts/PostForm";
import Hello from "./Hello.js"


import CategoryList from "./CategoryList";



export default function ApplicationViews() {

 return(
      <Routes>
          <Route path="/" element= {<Hello/>} />
       <Route path="/post" element= {<PostList/>} />
       <Route path="/post/create" element={<PostForm />} />
        <Route path="/category" element={<CategoryList />} />
      </Routes>
   );
 
}
