import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import Nopage from '../pages/Nopage'
import Register from '../pages/Register'
function Logingrouting() {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="*" element={<Nopage />} />
        </Routes>


    </div>
  )
}

export default Logingrouting