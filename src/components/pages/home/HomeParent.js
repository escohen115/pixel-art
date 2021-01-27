import CanvasContainer from "./CanvasContainer"
import CommentsContainer from "./CommentsContainer"
import Toolbar from "./Toolbar"
import React from 'react'

export default function HomeParent({handleSave, colorGrid, setColorGrid, colorState, setColorState, handleClear}){

    function handleColorSelection(color) {
        setColorState(color)
    }
    
    return (
        <>
            <CanvasContainer 
                colorState={colorState} 
                colorGrid={colorGrid} 
                setColorGrid={setColorGrid}
                handleSave={handleSave}
                setColorState={setColorState}
                handleClear={handleClear}
            />
            <CommentsContainer/>
            <Toolbar handleColorSelection={handleColorSelection}/>
        </>
    )
}