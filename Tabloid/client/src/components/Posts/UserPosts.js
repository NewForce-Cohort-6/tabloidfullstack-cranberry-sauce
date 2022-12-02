import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Post from "./Post";



// export const getUserPosts = (currentUser) => { 
//     return fetch(`/api/post/User/${currentUser.id}`)
//       .then((res) => res.json())
//   };

const MyPostList = () => {
    const [posts, setPosts] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    const localUser = localStorage.getItem("userProfile")
    const currentUser = JSON.parse(localUser)


 const getUserPosts = (currentUser) => { 
        return fetch(`/api/post/User/${currentUser.id}`)
          .then((res) => res.json())
      };

    const getPosts = () => {
        //get current user from local storage
        // pass currentUser object as paramater in getUserPost function.
        getUserPosts(currentUser).then( all => setPosts(all))
    };
    useEffect(() => {
        getPosts();
    }, []);


    return (     <>

            <h2 className="text-center">My Posts</h2> 
            <div className="col m-2 p-2 justify-content-center">
            {posts.map((p) => (
                  <div style={{display: 'flex'}}>
                    <Post key={p.id} post={p} />                   
                    </div>
                    ))}
            </div>

        </>
    );
};

export default MyPostList;