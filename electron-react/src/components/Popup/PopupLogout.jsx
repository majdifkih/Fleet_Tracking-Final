import React from "react";
import "./PopupLogout.scss";

function PopupLogout(props){
  
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <p> Are you sure to log out ?</p>
                <div className="buttonpop">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnlogout"  >Disconnect</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupLogout;