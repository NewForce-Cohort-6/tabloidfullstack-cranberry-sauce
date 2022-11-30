
export const getPostsByCategory =(categoryId)=>{
    return fetch (`https://localhost:5001/api/Post/${categoryId}`)
    .then((res)=>res.json())
};
