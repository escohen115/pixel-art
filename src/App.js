import React, { useState, useEffect } from 'react'
import MainNav from './components/MainNav'
import PortfolioNav from './components/PortfolioNav'
import HomeParent from './components/pages/home/HomeParent'
import ArtworkGrid from './components/pages/artIndex/ArtworkGrid'
import './App.css';


function App() {

  let defaultGrid = []
    for (let i = 0; i < 599; i++){
        defaultGrid.push("grey")
    }
  const [colorGrid, setColorGrid] = useState(defaultGrid)
  const [colorState, setColorState] = useState('black')

  function handleSave(){
    let currentPixels = document.getElementsByClassName('pixel')
    let toBeSaved = []
    for (let i=0;i<currentPixels.length;i++){
      toBeSaved.push(currentPixels[i].style.background)
    }
    setColorGrid(toBeSaved)
  }

  return (
    <>
      <MainNav/>
      <PortfolioNav colorGrid={colorGrid } colorState={colorState} setColorGrid={setColorGrid}/> 
      <HomeParent 
      handleSave={handleSave}
      colorGrid={colorGrid}
      setColorGrid={setColorGrid}
      colorState={colorState} 
      setColorState={setColorState}/>
    </>
  )
}

export default App;
