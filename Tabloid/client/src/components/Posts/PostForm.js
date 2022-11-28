import { useState } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"

export const PostForm = () => {
    /*
         Add the correct default properties to the
        initial state object
    */
    const [newPost, update] = useState({
        Title: "",
        Content: "",
        CategoryId: 0
    })
    /*
         Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()
    const localTabloidUser = localStorage.getItem("tabloid_user")
    const tabloidUserObject = JSON.parse(localTabloidUser)

    const handleSaveButtonClick = (post) => {
        post.preventDefault()
      
      

        // Create the object to be saved to the API

   
        const postToSendToAPI = {
            UserId: tabloidUserObject,
            Title: newPost.Title,
            Content: newPost.Content,
            CategoryId: newPost.CategoryId
        }



        //  Perform the fetch() to POST the object to the API


        // export const addPost = (singlePost) => {
        return fetch (`https://localhost:5001/api/post/`, {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postToSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/post")
    })
}

    return (
        <form className="postForm">
            <h2 className="postForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={newPost.Title}
                        onChange={
                            (evt) => {
                                const copy = {...newPost}
                                copy.Title =evt.target.value
                                update(copy)
              
    
                            }
                        } 
                        />
                            </div>
                           </fieldset>
                           <fieldset> 
                            <div
                             className="form-group">
                    <label htmlFor="name">Content</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={newPost.Content}
                        onChange={
                            (evt) => {
                                const copy = {...newPost}
                                copy.Content =evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset> 
                            <div
                             className="form-group">
                    <label htmlFor="name">Post Category</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={newPost.CategoryName}
                        onChange={
                            (evt) => {
                                const copy = {...newPost}
                                copy.CategoryId =evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Add Post
            </button>
        </form>
    )
}

