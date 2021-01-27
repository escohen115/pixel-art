import React, { useState, useEffect } from 'react'
import Artwork from './Artwork'

export default function ArtworkGrid({ handleSave }) {

    const [allDrawings, setAllDrawings] = useState([])

    useEffect(()=>{
        fetch(`http://127.0.0.1:3000/drawings`)
        .then(response => response.json())
        .then(drawings => {
            const artwork = drawings.map(drawing => {
                return <Artwork key={drawing.id} colorGrid={drawing.color_array} handleSave={handleSave}/>
            })
            setAllDrawings(artwork)
        })
    },[])
    
    return (
        <div className="artwork-container">
            {allDrawings}
        </div>
    )
}