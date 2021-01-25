import SavedGrid from './pages/home/SavedGrid'


export default function PortfolioNav({colorGrid, saved, setColorGrid, updateGrid}){


    let savedGrids = saved.map((savedGrid)=>{
        return(<SavedGrid savedGrid={savedGrid} setColorGrid={setColorGrid} updateGrid={updateGrid}/>  )
    })


    return(
        <div className="div4">
            {savedGrids}
        </div>
    )
}