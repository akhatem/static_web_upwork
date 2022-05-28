import React from 'react'
import { MarkerTipIcon } from '../../components'
import "./style.css"




const LandingPage = () => {
  return (
    <div className="weather">
      <span className="cloud-1"></span>
      <span className="cloud-2"></span>
      <span className="cloud-3"></span>
      <span className="cloud-4"></span>
      <span className="sun"></span>
      <MarkerTipIcon className="tip1" />
      <MarkerTipIcon className="tip2" />
      <MarkerTipIcon className="tip3" />
    </div>
  )
}

export default LandingPage