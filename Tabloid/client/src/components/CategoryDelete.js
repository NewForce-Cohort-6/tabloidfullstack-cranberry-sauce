import React from "react";
import { deleteCat, getCatById } from "../Managers/CategoryManager";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CategoryDelete = () => {
     // Declaring a new state variable
    const [cat, setCat] = useState({});

    // setting useNavigate to a new variable
    const navigate = useNavigate();

    // access the parameters of the current route
    const {id} = useParams();

    // getting category by id and setting 
    useEffect(
    () => {
        getCatById(id).then((taco) => {setCat(taco)})

    }, [] )

    // deletion handler 
    const handleDelete = () => {
        deleteCat(cat.id).then((event) => {
            navigate('/category')
        })
    }
    // cancellation handler
    const handleCancel = () => {
        navigate('/category')
    }

    // This returns the delete button, the cancel button, and a chance for the user to make absolutely certain that they want to delete the selected category
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="card-column">
            <h5 >Are you sure you want to delete the {cat.name} category?</h5>
            <article style={{marginLeft: '12vw'}}>

            <button style={{appearance: 'none', WebkitAppearance: 'none', width: '250', border: 'none', margin: '3px', padding: '6px', fontWeight: '600', boxShadow: '0 0 15px 4px rgba(0,0,0,0.06)' }} onClick={(event) => {
              // this is pulling from line 24, handleDelete
              handleDelete()
            }}>Delete</button>
            <button style={{appearance: 'none', WebkitAppearance: 'none', width: '250', border: 'none', margin: '3px', padding: '6px', fontWeight: '600', boxShadow: '0 0 15px 4px rgba(0,0,0,0.06)' }} onClick={(event) => {
              // this is pulling from line 30, handleCancel
                handleCancel()
            }}>Cancel</button>
            </article>
            </div>
        </div>
        </div>
    )
}

// exporting for use elsewhere
export default CategoryDelete;