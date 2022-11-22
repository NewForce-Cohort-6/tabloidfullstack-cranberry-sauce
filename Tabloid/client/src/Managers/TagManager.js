const apiUrl = "https://localhost:5001";

 const getAllTags = ()=>{
    return fetch(`${apiUrl}/api/Tag`)
    .then((res)=>res.json())
};

export default getAllTags;
