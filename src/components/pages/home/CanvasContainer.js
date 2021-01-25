import PixelGrid from './PixelGrid'

export default function CanvasContainer({ colorState }){

    return(
        <div className="div1">
            <button className="save">save</button>
            <PixelGrid colorState={colorState}/>
        </div>
    )
}