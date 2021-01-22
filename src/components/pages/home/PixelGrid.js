import Pixel from './Pixel'
import React, { useState } from "react"


export default function PixelGrid(){

    let defaultGrid = []

    for (let i = 0; i < 399; i++){
        defaultGrid.push("grey")
    }

    const [colorGrid, setColorGrid] = useState(defaultGrid)

    const pixels = colorGrid.map(color => {
        return <Pixel style={color}  />
    })

    return(
        <div className="grid-container">
            {pixels}
        </div>
    )
}