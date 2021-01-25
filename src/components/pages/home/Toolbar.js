import React, { useState } from 'react' 
import ColorGrid from './ColorGrid'

export default function Toolbar({ handleColorSelection }){

    const colorPalette = [ "black", "lightgrey", "white","red", "orange", "yellow","green", "blue", "indigo", "violet" ]

    const colorGrid = colorPalette.map(color => {
        return <ColorGrid key={Math.random()} color={color} handleColorSelection={handleColorSelection}/>
    })
    
    return(
        <div className="div5">
            <div className="color-selector-container">
                {colorGrid}
                
            </div>
        </div>
    )
}