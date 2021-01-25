import React from 'react'

export default function ColorGrid({ color, handleColorSelection }){

    function handleColorChange(){
        handleColorSelection(color)
    }

    return (
        <div 
            className="toolbarPixel" 
            style= {{background: color}}
            onClick={handleColorChange}
        >
        </div>
    )
}