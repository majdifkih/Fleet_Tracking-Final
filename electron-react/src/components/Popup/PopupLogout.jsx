import axios from "axios";
import React from "react";
import "./PopupLogout.scss";

function PopupLogout(props){
    const Delete = (id,api,apis) => {
        axios.delete(`https://qlogisticsapp.herokuapp.com/${api}API/${apis}?id=${id}`) }
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <p> Are you sure to log out ?</p>
                <div className="buttonpop">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnlogout" onClick={() => Delete(props.id,props.API,props.APIs)} >Disconnect</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupLogout;