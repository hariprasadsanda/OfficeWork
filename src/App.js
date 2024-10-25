import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Venue from './Components/Venue/Venue'
import Speaker from './Components/Speaker/Speaker'
import Contact from './Components/Contact/Contact'  
import Register from './Components/Register/Register'
import Aesthetic from './Components/Events/Aesthetic/Aesthetic'
import Dentaloral from './Components/Events/Dentaloral/Dentaloral'
import Dentalpharmacology from './Components/Events/Dentalpharmacology/Dentalpharmacology'
import Orthodontics from './Components/Events/Orthodontics/Orthodontics'
import Pediatric from './Components/Events/Pediatric/Pediatric'
import Modern from './Components/Events/Modern/Modern'
import Dentalresearch from './Components/Events/Dentalresearch/Dentalresearch'
import'./App.css'



const App = () => {
  return (
      <>
        <BrowserRouter>
          <Navbar></Navbar>
              <Routes>
                <Route exact path='/' element={<Home></Home>}/>
                <Route exact path='/Venue' element={<Venue></Venue>}/>
                <Route exact path='/Speaker' element={<Speaker></Speaker>}/>
                <Route exact path='/Contact' element={<Contact></Contact>}/>
                <Route exact path='/Register' element={<Register></Register>}/>
                <Route exact path='/Dentaloral' element={<Dentaloral/>}/>
                <Route exact path='/Orthodontics' element={<Orthodontics/>}/>
                <Route exact path='/Pediatric' element={<Pediatric/>}/>
                <Route exact path='/Modern' element={<Modern/>}/>
                <Route exact path='/Dentalresearch' element={<Dentalresearch/>}/>
                <Route exact path='/Astheic' element={<Aesthetic/>}/>
                <Route exact path='/Dentalpharmacology' element={<Dentalpharmacology/>}/>
              </Routes>
          </BrowserRouter>
      </>
  
  )
}

export default App
