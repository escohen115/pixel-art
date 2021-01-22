import PixelGrid from './PixelGrid'

export default function CanvasContainer({ colorState }){

    return(
        <div className="div1">
            <PixelGrid colorState={colorState}/>
        </div>
    )
}