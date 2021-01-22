import CanvasContainer from "./CanvasContainer"
import CommentsContainer from "./CommentsContainer"
import Toolbar from "./Toolbar"
import React, { useState } from 'react'

export default function HomeParent(){
    const [colorState, setColorState] = useState()

    function handleColorSelection(color) {
        setColorState(color)
        console.log(colorState)
    }

    return (
        <>
            <CanvasContainer colorState={colorState}/>
            <CommentsContainer/>
            <Toolbar handleColorSelection={handleColorSelection}/>
        </>

    )
}