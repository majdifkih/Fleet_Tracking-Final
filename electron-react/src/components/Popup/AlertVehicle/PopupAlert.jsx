import React from "react";
import "./PopupAlert.scss";

function PopupAlert(props){
    
    return (props.trigger) ? (
        <div className="popupalert">
            <div className="popup-alert">
            <p>  {props.name}Oil maintenance successfully? </p>

                <div className="buttonpopupalert">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel</button>
                <button className="btnlog"  >Yes</button>
                </div>
            </div>

        </div>
    ) : "";
}
export default PopupAlert;