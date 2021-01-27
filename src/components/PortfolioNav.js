import SavedGrid from './pages/home/SavedGrid'
import React, {useEffect, useState} from "react"

export default function PortfolioNav({colorGrid, saved, setColorGrid, updateGrid, user}){

    const [savedGrid, setSavedGrid] = useState([])

    useEffect(() => {
        if (user){
            fetch(`http://localhost:3000/users/${user.id}`)
                .then(r=>r.json())
                .then(data=>{
                    console.log(data)

                    let newGrid = data.drawings.map((drawing)=>{
                        return(
                            <SavedGrid 
                                grid={drawing.color_array} 
                                updateGrid={updateGrid}
                            />
                        )
                    })
                    setSavedGrid(newGrid)
                    console.log(savedGrid)    
                })
            console.log(savedGrid)    
        }
    }, [saved])

    return(
        <div className="div4">
            {savedGrid}
        </div>
    )
}

