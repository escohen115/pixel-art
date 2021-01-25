import React,{useState, useEffect} from "react"

export default function Pixel({color, mouseDown, colorState, colorGrid, setColorGrid, index}){

    
    function handleColorChange(e){
        if (e.type === 'mousedown'){
            updateGrid()
        }

        if (mouseDown === true){
            updateGrid()
        }


    }

    function updateGrid(){
        let newColorGrid = [...colorGrid]
        newColorGrid[index] = colorState
        setColorGrid(newColorGrid)
    }
    
    return(
        <div 
            className="pixel" 
            style= {{background: color}}
            onMouseOver={handleColorChange}
            onMouseDown={(e)=>handleColorChange(e)}
        >
        </div>
    )
}