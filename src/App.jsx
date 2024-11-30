

import './App.css'
import BarChart from './Components/BarChart/BarChart'
import LineChart from './Components/LineChart/LineChart'
import Nav from './Components/nav/nav'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOption from './Components/PriceOptions/PriceOptions'


function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <Nav></Nav> */}
      <h1 className='text text-5xl bg-amber-300'>Price Option</h1>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <Phones></Phones>
    </>
  )
}

export default App
