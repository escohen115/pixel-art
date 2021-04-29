import React, { useState, useEffect } from 'react'
import Artwork from './Artwork'

export default function ArtworkGrid({ user, saved, setSaved }) {
    const [allDrawings, setAllDrawings] = useState([])
    
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_BASE_URL}drawings`)
        .then(response => response.json())
        .then(drawings => {
            const artwork = drawings.map(drawing => {
                return (
                    <Artwork 
                        key={drawing.id}
                        drawing_id={drawing.id}
                        colorGrid={drawing.color_array} 
                        saved={saved}
                        setSaved={setSaved}
                        user={user}
                    />
                )
            })
            setAllDrawings(artwork)
        })
    },[saved, setSaved, user])
    
    return (
        <div className="artwork-container">
            {allDrawings}
        </div>
    )
}