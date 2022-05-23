import React from 'react'
import "./style.css"
const LandingPage = () => {
    return (

        <div className="weather">
            <span className="cloud-1"></span>
            <span className="cloud-2"></span>
            <span className="cloud-3"></span>
            <span className="cloud-4"></span>
            <span className="sun"></span>
            <div style={{ position: "relative" }}>

            <div className="tip1">
                    <div className="item-hints"><div className="hint" data-position="2">
                        <span className="hint-radius" />
                        <span className="hint-dot"><img src={require("../../assets/images/pin.png")} width="60px" /></span>
                        <div className="hint-content do--split-children">
                            <p><img src={require("../../assets/images/pop.jpeg")} /></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="tip2">
                    <div className="item-hints"><div className="hint" data-position="2">
                        <span className="hint-radius" />
                        <span className="hint-dot"><img src={require("../../assets/images/pin.png")} width="60px" /></span>
                        <div className="hint-content do--split-children">
                            <p><img src={require("../../assets/images/pop.jpeg")} /></p>
                        </div>
                    </div>
                    </div>
                </div>
               
            </div>
        </div>

    )
}

export default LandingPage