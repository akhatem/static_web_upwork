import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from '../containers/landing_page'
import MarsadJazan from '../containers/marsad_jazan'

const Navigation = () => {
  return (
      <Routes>
          <Route path='/' exact element={<LandingPage />}/>
          <Route path='/marsad_jazan' exact element={<MarsadJazan />}/>
      </Routes>
  )
}

export default Navigation