import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import MainNav from './components/MainNav'
import PortfolioNav from './components/PortfolioNav'
import HomeParent from './components/pages/home/HomeParent'
import ArtworkGrid from './components/pages/artIndex/ArtworkGrid'
import SignUp from './components/pages/signup/SignUp'
import './App.css';


function App() {
  
  let defaultGrid = []
    for (let i = 0; i < 2099; i++){
        defaultGrid.push("lightgrey")
    }

  const [colorGrid, setColorGrid] = useState(defaultGrid)
  const [colorState, setColorState] = useState('black')
  const [saved, setSaved] = useState([])

  

  function handleSave(){
    setSaved([...saved, colorGrid])
  }

  function updateGrid(newGrid) {
    console.log("yo we here")
    setColorGrid(newGrid)
  }

  function handleClear(){
    setColorGrid(defaultGrid)
    
  }
 
  return (
    <>
     <MainNav/>
      <PortfolioNav 
        saved={saved} 
        colorGrid={colorGrid} 
        updateGrid={updateGrid}
        setColorGrid={setColorGrid}/>
      <Switch> 

          <Route exact path='/'>
            <HomeParent 
              handleSave={handleSave}
              colorGrid={colorGrid}
              setColorGrid={setColorGrid}
              colorState={colorState} 
              setColorState={setColorState}
              handleClear={handleClear}
            />
          </Route>

          <Route path='/signup'> 
            <SignUp/>
          </Route>

          <Route path='/drawings'>
            <ArtworkGrid/>
          </Route>
      </Switch>
    </>
  )
}

export default App;
