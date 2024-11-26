

import './App.css'
import Nav from './Components/nav/nav'
import NavBar from './Components/NavBar/NavBar'
import PriceOption from './Components/PriceOptions/PriceOptions'


function App() {
  

  return (
    <>
      <NavBar></NavBar>
      {/* <Nav></Nav> */}
      <h1 className='text text-5xl bg-amber-300'>Price Option</h1>
     <PriceOption></PriceOption>

    </>
  )
}

export default App
