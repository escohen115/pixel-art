import MainNav from './components/MainNav'
import PortfolioNav from './components/PortfolioNav'
import HomeParent from './components/pages/home/HomeParent'
import ArtworkGrid from './components/pages/artIndex/ArtworkGrid'
import './App.css';


function App() {
  return (
    <>
      <MainNav/>
      <PortfolioNav/>
      <HomeParent/>
    </>
  )
}

export default App;
