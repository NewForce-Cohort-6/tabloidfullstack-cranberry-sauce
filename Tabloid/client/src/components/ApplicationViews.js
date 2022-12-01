import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import { PostList } from "./Posts/PostList";
import Hello from "./Hello.js"
import CategoryList from "./CategoryList";
import TagList from "./TagList";
import DeleteTag from "./DeleteTag";
import { ListPostsByCategory } from "./ListPostsByCategory";
import Post from "./Posts/Post";
import { PostContainer } from "./Posts/PostContainer";


export default function ApplicationViews() {

 return(
      <Routes>
          <Route path="/" element= {<Hello/>} />
       <Route path="/post" element= {<PostContainer/>} />
       <Route path="/post/:id" element= {"Not yet implemented"} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/add" element={<CategoryForm />} />
        
        <Route path="/TagManagement" element={<TagList />} />
        <Route path="/DeleteTag/:id" element={<DeleteTag />} />
        <Route path="/ListPostsByCategory/:categoryId" element={<ListPostsByCategory/>}/>
      </Routes>
   );
 
}
