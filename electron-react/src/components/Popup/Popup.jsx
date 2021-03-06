import axios from "axios";
import React from "react";
import "./Popup.scss";

function Popup(props){
    const Delete = (id,api,apis) => {
        axios.delete(`https://qlogisticsapp.herokuapp.com/${api}API/${apis}?id=${id}`) 
props.setTrigger(!props.trigger)
    }
    return (props.trigger) ? (
        <div className="popupp">
            <div className="popup-inne">
            <p> Are you sure to delete  {props.name}?</p>
                <div className="buttonpopup">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnlog" onClick={() => Delete(props.id,props.API,props.APIs)} >Delete</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default Popup;