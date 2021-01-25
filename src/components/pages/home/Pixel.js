import React,{useState, useEffect} from "react"

export default function Pixel({color, mouseDown, colorState, colorGrid, setColorGrid, index}){

 
    const [currentColor, setCurrentColor] = useState(color)

    
    function handleColorChange(e){
        if (e.type === 'mousedown'){
            setCurrentColor(colorState)
            updateGrid()
        }

        if (mouseDown === true){
            setCurrentColor(colorState)
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
            style= {{background: currentColor}}
            onMouseOver={handleColorChange}
            onMouseDown={(e)=>handleColorChange(e)}
        >
        </div>
    )
}