const apiUrl = "https://localhost:5001";

export const getAllTags = ()=>{
    return fetch(`${apiUrl}/api/Tag`)
    .then((res)=>res.json())
};

 export const addTag =(tag)=>{
    return fetch (`${apiUrl}/api/Tag`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tag)
    })
    .then((r)=> r.json())
 };
