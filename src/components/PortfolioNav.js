import SavedGrid from './pages/home/SavedGrid'
import React, {useEffect, useState} from "react"
import { useCallback } from 'react'

export default function PortfolioNav({colorGrid, saved, setSaved, setColorGrid, updateGrid, user, setCommentsDrawingId}){

    const [savedGrid, setSavedGrid] = useState([])

    
    const handleDelete = useCallback ((id) => {
        if (window.confirm("Are you sure you'd like to delete this drawing?")){
            let confObj = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }
            fetch(`${process.env.REACT_APP_API_BASE_URL}users/${id}`, confObj)
            .then(response=>response.json())
            .then(data=>{
                setSaved(!saved)
                })
            }
        },[saved, setSaved])
        
    useEffect(() => {

        if (user){
            fetch(`${process.env.REACT_APP_API_BASE_URL}users/${user.id}`)
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
    }, [saved, setCommentsDrawingId, updateGrid, user, handleDelete])


    return(
        <div className="div4">
            {savedGrid}
        </div>
    )


}

