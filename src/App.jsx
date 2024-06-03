import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Catbar from './components/Catbar/Catbar'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact.jsx'
import Account from './pages/Account/Account.jsx'
import Cart from './pages/Cart/Cart.jsx'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Catbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/cart' element={<Cart/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
