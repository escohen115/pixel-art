import React, { useState } from 'react' 
import ColorGrid from './ColorGrid'

export default function Toolbar({ handleColorSelection }){

    const colorPalette = [ "black", "lightgrey", "white","SaddleBrown","orange", "red", 
    "yellow", "Chartreuse",  "limegreen","turquoise","Aquamarine", "mediumblue", "indigo", "BlueViolet", "violet", "pink" ]

    const colorGrid = colorPalette.map(color => {
        return <ColorGrid key={Math.random()} color={color} handleColorSelection={handleColorSelection}/>
    })
    
    return(
        <div className="div2">
            <div className="color-selector-container">
                {colorGrid}
                
            </div>
        </div>
    )
}