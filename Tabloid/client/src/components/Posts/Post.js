import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.displayName}</p>
      <p> {post.content} </p>
      <p>{post.CategoryName}</p>
      <CardImg top src={post.imageUrl} alt={post.Title} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
          <strong>{post.title} 
          
          <button onClick={()=>{navigate(`/post/${post.id}`)}}
                            className="post_edit">Edit
                            </button>

                            <button onClick={()=>{
                            fetch(`http://localhost:8088/post/${post.id}`,{
                            method: "DELETE" 
                             })
                            .then(()=>{getPosts()})
                            }}
                            className="post_delete">Delete
                            </button>
          
          </strong>
          </Link>
        </p>
        <p>{post.caption}</p>
        <p>
          {/* {
          post.categories.map(category => */}
            {/* <div key={category.id} >{category.message}</div> ) */}
          {/* } */}
        </p>
      </CardBody>
    </Card>
  );
};

export default Post;