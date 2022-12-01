import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"
import { Button } from "reactstrap"
import { getPostsByTag } from "../../Managers/PostManager"
// import { PostForm } from "./PostForm"


export const PostList = ({tagSearchState}) => {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFiltered]=useState([])
    
    const navigate = useNavigate()

    useEffect (() => {
        fetch ("https://localhost:5001/api/post") // url of api
            .then((response) => response.json())
            .then((postArray) => {
                setPosts(postArray);
            });
       }, []);        
      
       let tagId=parseInt(tagSearchState)
       
    useEffect(()=>{
    //   let tagId=parseInt(tagSearchState)
       getPostsByTag(tagId)
       .then((postArray)=>       
        setFiltered(postArray)
        )
        
    },
    [tagSearchState])



          return(
          <>
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
       <div>
       {
       tagId==0
       ?
       posts.map(singlePostObject => {
        return <div>{singlePostObject.title} , {singlePostObject.userProfile.fullName} <br></br>
        {singlePostObject.category.name}
        <br></br>
        <br></br>
        </div>          
       })
        
       :   
              
       filteredPosts.map(singlePostObject => {
        return <div>
            <br></br>
            {singlePostObject.title} 
            <Button size="sm" onClick={() => {navigate(`/post/${singlePostObject.id}`)}}>Go to Post
            </Button>
            <br></br>
        </div>          
       })
    }
    </div>
       </>
   
          )
}