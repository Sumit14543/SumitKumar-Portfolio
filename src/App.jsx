import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<AboutMe/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='project' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
     <Footer/>
    </div>
  )
}

export default App