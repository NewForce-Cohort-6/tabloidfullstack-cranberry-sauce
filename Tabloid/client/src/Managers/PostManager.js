
export const getPostsByCategory =(categoryId)=>{
    return fetch (`https://localhost:5001/api/Post/GetPostsByCategory?categoryId=${categoryId}`)
    .then((res)=>res.json())
};
