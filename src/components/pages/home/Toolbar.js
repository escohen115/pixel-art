import React, { useState } from 'react' 
import ColorGrid from './ColorGrid'

export default function Toolbar({ handleColorSelection }){

    const colorPalette = ['blue', 'green', 'black', 
    'purple', 'orange', 'red', 'yellow', 'grey', 'pink']

    const colorGrid = colorPalette.map(color => {
        return <ColorGrid key={Math.random()} color={color} handleColorSelection={handleColorSelection}/>
    })

    return(
        <div className="div5">
            <div className="colorGrid">
                <h2>Select a Color</h2>
                {colorGrid}
            </div>
        </div>
    )
}