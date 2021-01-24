import PixelGrid from './PixelGrid'

export default function CanvasContainer({ colorState, colorGrid, setColorGrid, handleSave }){

    return(
        <div className="div1">
            <button className="save" onClick={handleSave}>save</button>
            <PixelGrid colorState={colorState} colorGrid={colorGrid} setColorGrid={setColorGrid}/>
        </div>
    )
}




