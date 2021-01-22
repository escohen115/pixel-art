import Pixel from './Pixel'
import React, { useState } from "react"


export default function PixelGrid({ colorState }){

    const [mouseDown, setMouseDown] = useState(false)

    let defaultGrid = []

    for (let i = 0; i < 399; i++){
        defaultGrid.push("grey")
    }

    const [colorGrid, setColorGrid] = useState(defaultGrid)
    
    const pixels = colorGrid.map(color => {
        return <Pixel color={color} mouseDown={mouseDown}  colorState={colorState}/>
    })

    return(
        <div 
        onMouseDown={()=>setMouseDown(true)} 
        onMouseUp={()=>setMouseDown(false)} 
        className="grid-container">
            {pixels}
        </div>
    )
}