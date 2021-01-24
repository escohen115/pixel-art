import Pixel from './Pixel'
import React, { useState } from "react"


export default function PixelGrid({ colorState, colorGrid, setColorGrid }){

    const [mouseDown, setMouseDown] = useState(false)

    const pixels = colorGrid.map(color => {
        return (
        <Pixel color={color} 
        mouseDown={mouseDown} 
        colorState={colorState} 
        setColorGrid={setColorGrid}/>)
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