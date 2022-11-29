import React from "react";

// setting the standard url to api/category
const baseUrl = 'api/category';

// function to fetch and return our base url
export const getAllCats = () => {
    return fetch (`${baseUrl}`)
    .then((response) => response.json())
};

