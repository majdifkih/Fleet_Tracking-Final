import React from "react";
import "./Popup.scss";

function Popup(props){
    return (props.trigger) ? (
        <div className="popupp">
            <div className="popup-inne">
            <p> Are you sure to delete the item?</p>
                <div className="buttonpopup">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnlog" onClick={() => props.setTrigger(true)} >Logout</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default Popup;