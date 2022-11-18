import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryDelete from "./CategoryDelete";
import CategoryList from "./CategoryList";
import Hello from "./Hello";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/delete/:id" element={<CategoryDelete/>}/>
      </Routes>
   );
 
}
