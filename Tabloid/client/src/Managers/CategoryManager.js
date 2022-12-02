// setting the standard url to api/category
const baseUrl = 'api/category';

// function to fetch and return our base url
export const getAllCats = () => {
    return fetch (`https://localhost:5001/api/Category`)
    .then((response) => response.json())
};

// POST method to add a new category
export const addCat = (singleCat) => {
    return fetch('https://localhost:5001/api/Category', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCat),
    });
};