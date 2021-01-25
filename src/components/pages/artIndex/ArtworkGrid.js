import React from 'react'
import Artwork from './Artwork'

export default function ArtworkGrid() {

    let allDrawings = []

    fetch(`http://127.0.0.1:3000/drawings`)
        .then(response => response.json())
        .then(drawings => {
            console.log(drawings)
            console.log('hi')
            let allDrawings = drawings.map(drawing => {
                return <Artwork key={drawing.id} colorGrid={drawing.color_array}/>
            })
        })

    return(
        <div className="artwork-container">
            {allDrawings}
        </div>
    )

}