import React from "react";

// setting the standard url to api/category
const baseUrl = 'https://localhost:5001/api/Category';

// function to fetch and return our base url
export const getAllCats = () => {
    return fetch (`${baseUrl}`)
    .then((response) => response.json())
};

export const getCatById = (id) => {
    return fetch (`${baseUrl}/${id}`)
    .then((response) => response.json())
};

export const editCat = (category) => {
    return fetch(`${baseUrl}/${category.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
    .then(getAllCats)
}
