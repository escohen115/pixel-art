import React, { useEffect, useState } from 'react'
import Comment from "./Comment"

export default function CommentsContainer({commentsDrawingId, colorGrid}){

    const [comments, setComments] = useState([])


    useEffect(()=>{
        if (commentsDrawingId){
            fetch(`http://localhost:3000/drawings/${commentsDrawingId}`)
            .then(response=>response.json())
            .then(data=> setComments(data.comments))
        }
    },[colorGrid])

    
    let commentsMapped = comments.map(comment=>{
        return(
            <div>
                {comment.description}
                - {comment.commenter}
            </div>
        )
    })
    

    return(
        <div className="div5">
            <h3 className="comments">Comments:</h3>
            {commentsMapped}
        </div>
    )
}