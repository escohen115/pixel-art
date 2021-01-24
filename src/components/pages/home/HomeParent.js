import CanvasContainer from "./CanvasContainer"
import CommentsContainer from "./CommentsContainer"
import Toolbar from "./Toolbar"
import React, { useState } from 'react'

export default function HomeParent({handleSave, colorGrid, setColorGrid, colorState, setColorState}){



    function handleColorSelection(color) {
        setColorState(color)
        console.log(colorState)
    }

    
    return (
        <>
            <CanvasContainer 
            colorState={colorState} 
            colorGrid={colorGrid} 
            setColorGrid={setColorGrid}
            handleSave={handleSave}
            setColorState={setColorState}/>
            <CommentsContainer/>
            <Toolbar handleColorSelection={handleColorSelection}/>
        </>

    )
}