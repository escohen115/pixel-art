import Pixel from './Pixel'
import React, { useState } from "react"


export default function SavedGrid({ savedGrid, setColorGrid, updateGrid}){


    const pixels = savedGrid.map(color => {
        return (
        <div 
            className="pixel" 
            style= {{background: color}}
        >
        </div>
        )
    })

    function handleUpdate(){
        updateGrid(savedGrid)
        // setColorGrid(savedGrid)
        // console.log(savedGrid)
        // debugger
    }

    return(
        <div 
            className="saved-grid-container"
            onClick={handleUpdate}>
            {pixels}
        </div>
    )

}