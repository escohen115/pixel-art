import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom";
import MainNav from './components/MainNav'
import PortfolioNav from './components/PortfolioNav'
import HomeParent from './components/pages/home/HomeParent'
import ArtworkGrid from './components/pages/artIndex/ArtworkGrid'
import SignUp from './components/pages/signup/SignUp'
import LogIn from './components/pages/login/LogIn'
import './App.css';

 const defaultGrid = []
    for (let i = 0; i < 600; i++){
        defaultGrid.push("lightgrey")
    }

function App() {
  const [colorGrid, setColorGrid] = useState(defaultGrid)
  const [colorState, setColorState] = useState('black')
  const [user, setUser] = useState(null)
  const [saved, setSaved] = useState(false)
  const [commentsDrawingId, setCommentsDrawingId] = useState(null)

  function handleSave(){
    setSaved(!saved)
    if (user) {
      let drawing = {
          color_array: colorGrid,
          user_id: user.id
      }
     let confObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(drawing),
        }
        fetch('http://localhost:3000/drawings', confObj)
          .then(response=>response.json())
          .then(data=>console.log(data))
    }
  }


  function updateGrid(newGrid) {
    setColorGrid(newGrid)
  }

  function handleClear(){
    setColorGrid(defaultGrid)
  }

 
  return (
    <>
     <MainNav user={user} setUser={setUser} saved={saved} setSaved={setSaved}/>
      <Switch> 
        <Route exact path='/'>
          <HomeParent 
            handleSave={handleSave}
            colorGrid={colorGrid}
            setColorGrid={setColorGrid}
            colorState={colorState} 
            setColorState={setColorState}
            handleClear={handleClear}
            commentsDrawingId={commentsDrawingId}
          />
        <PortfolioNav 
            saved={saved} 
            setSaved={setSaved}
            user = {user}
            colorGrid={colorGrid} 
            updateGrid={updateGrid}
            setColorGrid={setColorGrid}
            setCommentsDrawingId={setCommentsDrawingId}
            />
        </Route>

        <Route path='/login'> 
          <LogIn user={user} setUser={setUser}/>
        </Route>

        <Route path='/signup'> 
          <SignUp user={user} setUser={setUser}/>
        </Route>

        <Route path='/drawings'>
          <ArtworkGrid saved={saved} setSaved={setSaved} user={user}/>
            <PortfolioNav 
            saved={saved} 
            setSaved={setSaved}
            colorGrid={colorGrid} 
            updateGrid={updateGrid}
            setColorGrid={setColorGrid}/>
        </Route>
      </Switch>
    </>
  )
}

export default App;
