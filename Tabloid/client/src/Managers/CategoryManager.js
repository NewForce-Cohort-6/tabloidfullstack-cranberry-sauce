import React from "react";

// setting the standard url to api/category
const baseUrl = 'https://localhost:5001';

// function to fetch and return our base url
export const getAllCats = () => {
    return fetch (`${baseUrl}/api/Category/`)
    .then((response) => response.json())
};

export const deleteCat = (id) => {
    return fetch(`${baseUrl}/api/Category/${id}`, {
      method: "DELETE"
    })
  };

  export const getCatById = (id) => {
    return fetch (`${baseUrl}/api/Category/${id}`)
    .then((response) => response.json())
};