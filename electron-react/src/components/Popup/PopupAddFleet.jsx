import React from "react";
import "./PopupAddFleet.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';

import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupFleet(props){
    return (props.trigger) ? (
        <div className="popupfleet">
            <div className="popup-innerfleet">
            <h3> Add New Vehicle</h3>
                <div className="formulerfleet">
                <div className="formleft">
            <div className="form">
            <label for="namefleet"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input type="text" placeholder="Enter name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namefleet"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input type="text" placeholder="Enter Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namefleet"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconfleet" fontSize="small"/> <div className="formfleet"><input type="text" placeholder="Enter marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namefleet" />Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namefleet"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input type="text" placeholder="Enter Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namefleet"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input type="text" placeholder="Enter Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopfleet">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddfleet" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupFleet;