import SavedGrid from './pages/home/SavedGrid'
import React, {useEffect, useState} from "react"

export default function PortfolioNav({colorGrid, saved, setSaved, setColorGrid, updateGrid, user, setCommentsDrawingId}){

    const [savedGrid, setSavedGrid] = useState([])

    
    function handleDelete(id){
        
        if (window.confirm("Are you sure you'd like to delete this drawing?")){
        
            let confObj = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }
            fetch(`http://localhost:3000/drawings/${id}`, confObj)
            .then(response=>response.json())
            .then(data=>{
                setSaved(!saved)
                })
            }
        }

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
                                handleDelete={handleDelete}
                                id={drawing.id}
                                setCommentsDrawingId={setCommentsDrawingId}
                            />
                        )
                    })
                    setSavedGrid(newGrid)  
                })
        }
        else
        {
            setSavedGrid([])
        }
    }, [saved])


    return(
        <div className="div4">
            {savedGrid}
        </div>
    )


}

