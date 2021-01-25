import React, { useState, useEffect } from 'react'
import MainNav from './components/MainNav'
import PortfolioNav from './components/PortfolioNav'
import HomeParent from './components/pages/home/HomeParent'
import ArtworkGrid from './components/pages/artIndex/ArtworkGrid'
import './App.css';


function App() {
  
  // useEffect(()=>{},[])

  let defaultGrid = []
    for (let i = 0; i < 599; i++){
        defaultGrid.push("grey")
    }

  const [colorGrid, setColorGrid] = useState([])
  const [colorState, setColorState] = useState('black')
  const [saved, setSaved] = useState([])

  

  useEffect(()=>{
    fetch(`http://127.0.0.1:3000/drawings`)
    .then(response => response.json())
    .then(data => setColorGrid(data[0].color_array))
  },[])


  function handleSave(){
    setSaved([...saved, colorGrid])

  }

  function updateGrid(newGrid) {
    console.log("yo we here")
    setColorGrid(newGrid) 
  }
 
  return (
    <>
        <MainNav/>
        <PortfolioNav 
          saved={saved} 
          colorGrid={colorGrid} 
          updateGrid={updateGrid}
          setColorGrid={setColorGrid}/>
          <HomeParent 
            handleSave={handleSave}
            colorGrid={colorGrid}
            setColorGrid={setColorGrid}
            colorState={colorState} 
            setColorState={setColorState}/>
          <ArtworkGrid />
    </>
  )
}

export default App;
