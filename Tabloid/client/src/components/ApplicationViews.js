import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryList from "./CategoryList";
import Hello from "./Hello";
import TagList from "./TagList";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/TagManagement" element={<TagList />} />
      </Routes>
   );
 
}
