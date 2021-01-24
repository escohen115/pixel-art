import React,{useState} from "react"

export default function Pixel({color, mouseDown, colorState, setColorGrid}){

    const [currentColor, setCurrentColor] = useState(color)
    
    function handleColorChange(){
        if (mouseDown === true){
            setCurrentColor(colorState)
        }
    }
    
    return(
        <div 
            className="pixel" 
            style= {{background: currentColor}}
            onMouseOver={handleColorChange}
            onMouseDown={()=>setCurrentColor(colorState)}
        >
        </div>
    )
}