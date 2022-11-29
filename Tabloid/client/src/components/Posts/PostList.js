import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"
import { Link } from "react-router-dom"
// import { PostForm } from "./PostForm"


export const PostList = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    useEffect (() => {
        fetch ("https://localhost:5001/api/post") // url of api
            .then((response) => response.json())
            .then((postArray) => {
                setPosts(postArray);
            });
       }, []);

          return(<>
   <h2 className="taskHeader">Post List</h2>
   <header>
    
</header>
   <button
       className="createPost"
       onClick={() => {
           navigate("/post/create");
           
       }}

       >
           Create Post
       </button>
       {posts.map(singlePostObject => {
        return <div>{singlePostObject.title} , {singlePostObject.userProfile.fullName} <br></br>
        {singlePostObject.category.name}
        <br></br>
        <br></br>
        </div> 

         
       })}

       </>
   
          )
}