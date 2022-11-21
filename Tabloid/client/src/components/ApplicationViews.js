import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import TagList from "./TagList";
import DeleteTag from "./DeleteTag";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/TagManagement" element={<TagList />} />
        <Route path="/DeleteTag/:id" element={<DeleteTag />} />
      </Routes>
   );
 
}
