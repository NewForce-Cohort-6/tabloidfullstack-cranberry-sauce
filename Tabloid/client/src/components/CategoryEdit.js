import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCat, getCatById } from "../Managers/CategoryManager";

const CatEdit = () => {
    // initial state
    const [cat, setCat] = useState({});
    // assign useNav to new const variable
    const navigate = useNavigate
    // useParams to get Id from URL
    const {id} = useParams();

// Use getCatById from CategoryManager to get the id of the category the user wants to edit
useEffect(
() => {
    getCatById(id).then((cat) => {setCat(cat)})
}, [])

const saveCatEdit = (event) => {
    event.preventDefault();
    
}







}