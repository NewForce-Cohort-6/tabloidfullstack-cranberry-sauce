import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import Post from "./Post";
// add props
const PostDetails = () => {
  const [post, setPost] = useState();
  const { postId } = useParams();
const navigate = useNavigate()
  useEffect(() => {
 fetch(`https://localhost:5001/api/post/${postId}`)
 .then((res) => res.json())
    .then(setPost)
  }, []);

// const getPostById = () => {
//     return fetch(`https://localhost:5001/api/post/${postId}`)
//         .then((res) => res.json())};

  if (!post) {
    return null;
  }

  return (
    <div>
        Title
    <p>{post.title}</p>
        Content
    <p>{post.content} </p>
    <p>{post.publishDateTime}</p>
        Author
    <p>{post.userProfile.firstName}{post.userProfile.lastName}</p>
    
            <p>
              {/* {
              post.userProfile.map(profile =>
                <div key={[post].id} >{profile.firstName} {profile.lastName}</div> )
              } */}
            </p>
            </div>
  );
            };


export default PostDetails;