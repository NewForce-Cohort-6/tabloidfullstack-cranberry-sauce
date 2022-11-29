import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"
import { getAllCats } from "../../Managers/CategoryManager"
import { TabContent } from "reactstrap"

export const PostForm = () => {
    /*
         Add the correct default properties to the
        initial state object
    */

        const [categories, setCategories] = useState([])

        useEffect(() => {
            getAllCats().then(setCategories);
        }, []);
    

    const [newPost, update] = useState({
        title: "",
        content: "",
        categoryId: 0,
        userProfileId: 0
    })
    /*
         Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()
    const localTabloidUser = localStorage.getItem("userProfile")
    const tabloidUserObject = JSON.parse(localTabloidUser)

    const handleSaveButtonClick = (e) => {
        e.preventDefault()
      
      

        // Create the object to be saved to the API

   
        const postToSendToAPI = {
    
            title: newPost.title,
            content: newPost.content,
            categoryId: newPost.categoryId,
            userProfileId: tabloidUserObject.id,
            imageLocation: newPost.imageLocation
        }



        //  Perform the fetch() to POST the object to the API

debugger
        // export const addPost = (singlePost) => {
        return fetch (`https://localhost:5001/api/post`, {
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
                        value={newPost.title}
                        onChange={
                            (evt) => {
                                const copy = {...newPost}
                                copy.title =evt.target.value
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
                        value={newPost.content}
                        onChange={
                            (evt) => {
                                const copy = {...newPost}
                                copy.content =evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="ImageLocation">Header Image URL:</label>
                    <input
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="www.example.com"
                        value={newPost.imageLocation}
                        onChange={(changeEvent) => {
                            const copy = {...newPost}
                            copy.imageLocation = changeEvent.target.value
                            update(copy)
                        }} />
                </div>
            </fieldset>



            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select required className="form-control" 
                            value={newPost.categoryId} 
                            onChange={(changeEvent) => {
                                const copy = {...newPost}
                                copy.categoryId = parseInt(changeEvent.target.value)
                                update(copy)
                            }}>
                        <option value="0">Choose a category</option>
                        {categories?.map(c => <option value={c.id}>{c.name}</option>)}
                    </select>
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

