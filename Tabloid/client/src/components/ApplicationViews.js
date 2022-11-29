import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryDelete from "./CategoryDelete";
import { PostList } from "./Posts/PostList";
import Hello from "./Hello.js"
import CategoryList from "./CategoryList";
import TagList from "./TagList";


export default function ApplicationViews() {

 return(
      <Routes>
          <Route path="/" element= {<Hello/>} />
       <Route path="/post" element= {<PostList/>} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/delete/:id" element={<CategoryDelete/>}/>
        <Route path="/TagManagement" element={<TagList />} />
      </Routes>
   );
 
}
