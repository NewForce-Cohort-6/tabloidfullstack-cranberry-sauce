import React, { useEffect, useState } from "react";
import { Table, Button} from "reactstrap";
import { useNavigate } from "react-router-dom";

export const ListPostsByCategory=()=>{
    const [posts, setPosts] = useState([]);
    
    const navigate = useNavigate();

    return(
        <>
        <Table>
        {posts.map((p) => {
            return (
            <tr> 
               <td>
                {p.Title}
                </td>
               <td>
                <Button size="sm" onClick={() => {navigate(`/ViewPost/${p.id}`)}}>Go to GIF</Button>
                </td>
            </tr> )
                 
            })}

        </Table>
        </>
    )
}