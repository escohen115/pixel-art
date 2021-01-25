import React from 'react'

export default function Artwork({ colorGrid }) {

    console.log(colorGrid)

    const pixels = colorGrid.map(color => {
        return (
            <div className="pixel" style= {{background: color}}>
            </div>
        )
    })

    return (
        <div className="saved-grid-container">
            {pixels}
        </div>
    )
}
