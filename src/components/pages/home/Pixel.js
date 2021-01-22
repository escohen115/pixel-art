import React,{useState} from "react"

export default function Pixel({style}){

    const [currentColor, setCurrentColor] = useState(style)

    function handleColorChange(){
        setCurrentColor("white")
    }
    
    return(
        <div 
            className="pixel" 
            style= {{background: currentColor}}
            onMouseDown={handleColorChange}
            onMouseOver={handleColorChange}
            
        >
        </div>
    )
}