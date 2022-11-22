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
//https://localhost:5001/api/Tag/8
 export const deleteTag = (id)=>{
    return fetch (`${apiUrl}/api/Tag/${id}`,{
        method:"DELETE"       
    }).then(()=>{getAllTags()})
 };

 export const getTagById = (id)=>{
    return fetch (`${apiUrl}/api/Tag/${id}`)
    .then((r)=> r.json())
 }

 export const editTag = (tag)=>{
    return fetch (`${apiUrl}/api/Tag/${tag.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tag)
    })
   
    
 }