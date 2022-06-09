
import React from "react";
import "./PopupConfirmeDemand.scss";

function PopupConfirmer(props){

    return (props.trigger) ? (
        <div className="popupconf">
            <div className="popup-inneconf">
            <p className="suc"> Adding successfully</p>
                
                <button className="btnok" onClick={() => props.setTrigger(false)}>OK </button>
   
               
            </div>

        </div>
    ) : "";
}
export default PopupConfirmer;