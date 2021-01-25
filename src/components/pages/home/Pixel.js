import React,{useState} from "react"

export default function Pixel({color, mouseDown, colorState, colorGrid, setColorGrid}){

    const [currentColor, setCurrentColor] = useState(color)
    
    function handleColorChange(e){
        if (e.type === 'mousedown'){
            setCurrentColor(colorState)
            setColorGrid([...colorGrid, colorState])
        }

        if (mouseDown === true){
            setCurrentColor(colorState)
            setColorGrid([...colorGrid, colorState])
        }


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