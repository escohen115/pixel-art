import PixelGrid from './pages/home/PixelGrid'


export default function PortfolioNav({colorGrid, colorState}){
    return(
        <div className="div4">
            <PixelGrid colorGrid={colorGrid} colorState={colorState}/>
        </div>
    )
}