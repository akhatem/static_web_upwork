import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from '../containers/landing_page'

const Navigation = () => {
  return (
      <Routes>
          <Route path='/' exact element={<LandingPage />}/>
      </Routes>
  )
}

export default Navigation