import React from "react";


const MarkerTipIcon = props => {
    const {className} = props
    return(
        <div style={{ position: "relative" }}>
        <div className={className}>
            <div className="item-hints"><div className="hint" data-position="2">
                <span className="hint-radius" />
                <span className="hint-dot"><img src={require("../assets/images/pin.png")} width="60px" alt="pin" /></span>
                <div className="hint-content do--split-children">
                    <p><img src={require("../assets/images/pop.jpeg")} alt = "pop"/></p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export {MarkerTipIcon}