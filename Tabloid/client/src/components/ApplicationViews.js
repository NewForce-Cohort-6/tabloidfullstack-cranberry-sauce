import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import { PostList } from "./Posts/PostList";
import { PostForm } from "./Posts/PostForm";
import Hello from "./Hello.js"
import CategoryList from "./CategoryList";
import TagList from "./TagList";
import PostDetails from "./Posts/PostDetails";


export default function ApplicationViews() {

 return(
      <Routes>
          <Route path="/" element= {<Hello/>} />
       <Route path="/post" element= {<PostList/>} />
       <Route path="/post/create" element={<PostForm />} />

       <Route path ="/post/details/:postId" element={<PostDetails />} />

        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/add" element={<CategoryForm />} />
        
        <Route path="/TagManagement" element={<TagList />} />
      </Routes>
   );
 
}
