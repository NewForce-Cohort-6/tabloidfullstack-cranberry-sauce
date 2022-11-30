import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import { PostList } from "./Posts/PostList";
import Hello from "./Hello.js"
import CategoryList from "./CategoryList";
import TagList from "./TagList";
import ProfileList from "./UserProfiles/UserProfileList";


export default function ApplicationViews() {

 return(
      <Routes>
          <Route path="/" element= {<Hello/>} />
       <Route path="/post" element= {<PostList/>} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/add" element={<CategoryForm />} />
        
        <Route path="/TagManagement" element={<TagList />} />
        <Route path= "/profiles" element={<ProfileList />} />
      </Routes>
   );
 
}
