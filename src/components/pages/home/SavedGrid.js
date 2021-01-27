import Pixel from './Pixel'
import React, { useState } from "react"


export default function SavedGrid({ grid, updateGrid, handleDelete, id, setCommentsDrawingId}){


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
        setCommentsDrawingId(id)
    }

    return(
        <div>
            <div 
                className="saved-grid-container"
                onClick={handleUpdate}>
                {pixels}
            </div>
            <button className="delete" onClick={()=>handleDelete(id)}>🗑️</button>
        </div>
        
    )

}