import PixelGrid from './PixelGrid'

export default function CanvasContainer({ colorState, colorGrid, setColorGrid, handleSave, handleClear}){

    return(
        <div className="div1">
            <button className="save" onClick={handleSave}> 💾</button>
            <button className='clear'onClick={handleClear}>🧻 </button>
            <PixelGrid colorState={colorState} colorGrid={colorGrid} setColorGrid={setColorGrid} />
        </div>
    )
}




