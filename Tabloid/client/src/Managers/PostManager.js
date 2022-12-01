
export const getPostsByCategory =(categoryId)=>{
    return fetch (`https://localhost:5001/api/Post/GetByCategory?categoryId=${categoryId}`)
    .then((res)=>res.json())
};

export const getPostsByTag=(tagId)=>{
    return fetch (`https://localhost:5001/api/Post/GetByTag?tagId=${tagId}`)
    .then((res)=>res.json())
}