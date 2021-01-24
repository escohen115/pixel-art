import React, { useState } from 'react' 
import ColorGrid from './ColorGrid'

export default function Toolbar({ handleColorSelection }){

    const colorPalette = ['black', 'grey', 'white',
    'purple', 'orange', 'red', 'yellow', 'pink', 'blue', 'green', ]

    const colorGrid = colorPalette.map(color => {
        return <ColorGrid key={Math.random()} color={color} handleColorSelection={handleColorSelection}/>
    })
    
    return(
        <div className="div5">
            <div className="colorGrid">
                {colorGrid}
                <button>reverse</button>
                
            </div>
        </div>
    )
}