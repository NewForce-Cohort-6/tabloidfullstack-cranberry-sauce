

import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCatById, editCat} from "../Managers/CategoryManager";

const CategoryEdit = () => {
    const [cat, setCat] = useState({});

    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(
    () => {
        getCatById(id).then((c) => {setCat(c)})        
    },
    []
    )

    const handleSaveEdit = () => {
        const updatedCat = {
            name: cat.name,
            id: cat.id
        }
        editCat(updatedCat).then((e) => {
            navigate('/category')
        })
    }

    const handleCancel = () => {
        navigate('/category')
    }

    return (
        <div style={{}}>
            <h5 style={{}}>Edit a Category</h5>
            <h6 style={{}}>Selected: {cat.name}</h6>
            <fieldset>
            <input
             style={{}}
              type="text"
              placeholder="Enter a new name..."
              onChange={(e) => {
                const copy = {...cat}
                copy.name = e.target.value
                setCat(copy);}
              }
            />
          </fieldset>
            <button style={{}} onClick={(e) => {
                handleSaveEdit()
            }}>Save</button>
            <button onClick={(e) => {
                handleCancel()
            }}>Cancel</button>
            </div>
    )
}

export default CategoryEdit;