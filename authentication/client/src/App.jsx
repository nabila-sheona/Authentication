//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./Signup";
import Login from './Login';
import Home from './Home';
import LandingPage from './LandingPage';

import { BrowserRouter, Routes, Route } from'react-router-dom'

function App() {


  return(
    <BrowserRouter>
    <Routes>
     <Route path='/signup' element={<Signup />}></Route>
     <Route path='/login' element={<Login />}></Route>
     <Route path='/' element={<Home />}></Route>
     <Route path='/home' element={<Home />}></Route>
     <Route path='/landingpage' element={<LandingPage />}></Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App
