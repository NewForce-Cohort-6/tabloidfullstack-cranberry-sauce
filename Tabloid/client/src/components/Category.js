import React from "react";

// Our category object? I think?
const Category = ({cat}) => {
    return (
    <p>
        {cat.name}
    </p>
    )
}

// Exporting the category object for use elsewhere
export default Category