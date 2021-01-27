import Pixel from './Pixel'
import React, { useState } from "react"


export default function SavedGrid({ grid, updateGrid}){


    const pixels = grid.map(color => {
        return (
        <div 
            className="pixel" 
            style= {{background: color}}
        >
        </div>
        )
    })

    function handleUpdate(){
        updateGrid(grid)
    }

    return(
        <div 
            className="saved-grid-container"
            onClick={handleUpdate}>
            {pixels}
        </div>
    )

}