import React, { useEffect, useState } from 'react'

export default function CommentsContainer({commentsDrawingId, colorGrid}){

    const [comments, setComments] = useState([])


    useEffect(()=>{
        if (commentsDrawingId){
            fetch(`${process.env.REACT_APP_API_BASE_URL}${commentsDrawingId}`)
            .then(response=>response.json())
            .then(data=> setComments(data.comments))
        }
    },[colorGrid, commentsDrawingId])

    
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