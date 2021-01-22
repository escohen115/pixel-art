import React,{useState} from "react"

export default function Pixel({color, mouseDown}){

    const [currentColor, setCurrentColor] = useState(color)
    

    function handleColorChange(){
        if (mouseDown === true){
        setCurrentColor("white")
        }
    }

    return(
        <div 
            className="pixel" 
            style= {{background: currentColor}}
            onMouseOver={handleColorChange}
            onMouseDown={()=>setCurrentColor("white")}
        >
        </div>
    )
}