

import './App.css'
import BarChart from './Components/BarChart/BarChart'
import Footer from './Components/footer/Footer'
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
      <h1 className='text text-center text text-4xl m-4 p-2'>Gym Price Option</h1>
      <PriceOption></PriceOption>
      <h1 className='text text-center text text-4xl m-4 p-2'>Marks in Line Chart</h1>

      <LineChart></LineChart>
      <h1 className='text text-center text text-4xl m-4 p-2'>Marks in Bar Chart</h1>
      <BarChart></BarChart>
      <h1 className='text text-center text text-4xl m-4 p-2'>Marks in Radar Chart</h1>
      <Phones></Phones>
      <Footer></Footer>
    </>
  )
}

export default App
