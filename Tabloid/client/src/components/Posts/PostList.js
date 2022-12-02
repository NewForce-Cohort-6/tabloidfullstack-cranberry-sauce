import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import React from "react"
import { Link } from "react-router-dom"
import { PostForm } from "./PostForm"


export const PostList = () => {
    const [posts, setPosts] = useState([])
    const { postId } = useParams();
    const navigate = useNavigate()
    useEffect (() => {
        fetch ("https://localhost:5001/api/Post") // url of api
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
        return <div> <Link to={`/post/details/${singlePostObject.id}`}>{singlePostObject.title}</Link>
        , {singlePostObject.userProfile.fullName} <br></br>
        
        {singlePostObject.category.name}
        <br></br>
        <br></br>
        </div> 

         
       })}

       </>
   
          )
}