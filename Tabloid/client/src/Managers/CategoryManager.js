import React from "react";

// setting the standard url to api/category
const baseUrl = 'https://localhost:5001/api/Category';

// all categories
export const getAllCats = () => {
    return fetch (`${baseUrl}`)
    .then((response) => response.json())
};
// category by id
export const getCatById = (id) => {
    return fetch (`${baseUrl}/${id}`)
    .then((response) => response.json())
};
// edit category
export const editCat = (category) => {
    return fetch(`${baseUrl}/${category.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category),
    }).then(getAllCats)}