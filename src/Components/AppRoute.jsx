import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Service from './Service'

const AppRoute = () => {
  return (
    <div>

<Routes>
        <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
        </Routes>

    </div>
  )
}

export default AppRoute