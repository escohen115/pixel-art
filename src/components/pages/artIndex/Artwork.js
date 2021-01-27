import React,{ useState } from 'react'

export default function Artwork({ user, drawing_id, colorGrid, saved, setSaved }) {

    const [clicked, setClicked] = useState(false)
    const [commentState, setCommentState] = useState(false)
    const [commentFieldState, setCommentFieldState] = useState('')

    function handleClick(){
        setClicked(!clicked)
    }

    function handlePortfolioClick() {
        setSaved(!saved)
        if (user) {
        let drawing = {
            color_array: colorGrid,
            user_id: user.id
        }

        let confObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(drawing),
            }
            fetch('http://localhost:3000/drawings', confObj)
            .then(response=>response.json())
            .then(data=>console.log(data))
        }
    }

    function handleCommentClick() {
        setCommentState(!commentState)
        console.log(commentState)
    }

    function showCommentForm() {
        return (
            <div>
                <form id="comment-form" onSubmit={(e)=>handleSubmit(e)}>
                    <textarea
                        value={commentFieldState}
                        onChange={handleChange}
                        rows={3}
                        cols={25}
                    />
                    <button type='submit' className="comment-submission-button"> Submit </button>
                </form>
            </div> 
        )
    }

    function handleChange(e) {
        setCommentFieldState(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        let commentObj = {
            user_id: user.id,
            drawing_id: drawing_id,
            commenter: user.username,
            description: commentFieldState
        }

        console.log(commentObj)

        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentObj)
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
            })
        
        setCommentState(false)
    }

    const pixels = colorGrid.map(color => {
        return (
            <div className="pixel" style={{background: color}}>
            </div>
        )
    })

    return (
        <div className="artwork-child-container">

            <div className="artwork" onClick={handleClick}>
                {pixels}
            </div>

            {clicked && user ? 
                <div className="artwork-options">
                    <button onClick={handlePortfolioClick}> ⭐ Add to Portfolio </button>
                    <button onClick={handleCommentClick}> 🖊️ Leave a Comment </button>
                    {commentState ? showCommentForm() : null}
                </div>
            :null}
        </div>
    )
}
