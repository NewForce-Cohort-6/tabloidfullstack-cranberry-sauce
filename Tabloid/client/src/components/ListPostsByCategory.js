import React, { useEffect, useState } from "react";
import { Table, Button} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import {getPostsByCategory} from "../Managers/PostManager";

export const ListPostsByCategory=()=>{
    const [posts, setPosts] = useState([]);
    const { categoryId } = useParams();

    

    useEffect(()=>{
        getPostsByCategory(categoryId)
        .then((p)=>setPosts(p))
    },[])
    
    const navigate = useNavigate();

    return(
        <>
        <Table>
        {posts.map((p) => {
            return (
            <tr> 
               <td>
                {p.title}
                </td>
               <td>
                <Button size="sm" onClick={() => {navigate(`/post/${p.id}`)}}>Go to GIF</Button>
                </td>
            </tr> )
                 
            })}

        </Table>
        </>
    )
}