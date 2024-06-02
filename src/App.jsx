import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Catbar from './components/Catbar/Catbar'
import Hero from './components/Hero/Hero'
import ShopByCategory from './components/ShopByCategory/ShopByCategory'
import NewArrival from './components/NewArrival/NewArrival'
import TopSeller from './components/TopSeller/TopSeller'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Catbar/>
      <Hero/>
      <NewArrival/>
      <ShopByCategory/>
      <TopSeller/>
      

    </div>
  )
}

export default App
