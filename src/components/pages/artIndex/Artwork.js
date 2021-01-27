import React,{useState} from 'react'

export default function Artwork({ colorGrid, handleSave }) {

    const [clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }

    function handlePortfolioClick() {
        handleSave()
    }

    const pixels = colorGrid.map(color => {
        return (
            <div className="pixel" style={{background: color}}>
            </div>
        )
    })

    return (
        <div className="artwork-child-container">

            <div className="artwork" onClick={handleClick}>
                {pixels}
            </div>

            {clicked ? 
            <div>
                <button onClick={handlePortfolioClick}> ⭐ Add to Portfolio </button>
                <button> 🖊️ Leave a Comment </button>
            </div>
            :null}

        </div>
    )
}
