import axios from "axios";
import React, { useState } from "react";
import "./PopupAlert.scss";

function PopupAlert(props){
    const fixed = (id,type)=>{
       const date=new Date();
        axios.get(`http://localhost:3001/VehiculeAPI/alerts?id=${id}&type=${type}&date=${date}`).then(res=>{
            if(res.data.success){
                console.log(res.data.alerts);
            }
        }
        )



    }

    return (props.trigger) ? (
        <div className="popupalert">
            <div className="popup-alert">
            <p>  {props.type} Fixed ? </p>

                <div className="buttonpopupalert">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel</button>
                <button className="btnlog" onClick={()=> fixed(props.id,props.type)} >Yes</button>
                </div>
            </div>

        </div>
    ) : "";
}
export default PopupAlert;