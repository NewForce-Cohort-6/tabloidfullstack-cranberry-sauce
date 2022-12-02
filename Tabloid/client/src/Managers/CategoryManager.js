// setting the standard url to api/category
const baseUrl = 'https://localhost:5001/api/Category';

// all categories
export const getAllCats = () => {
    return fetch (`https://localhost:5001/api/Category`)
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
