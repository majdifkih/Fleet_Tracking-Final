import React from "react";
import "./PopupAddDriver.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupDriver(props){
    return (props.trigger) ? (
        <div className="popupdriver">
            <div className="popup-innerdriver">
            <h3> Add New Driver</h3>
                <div className="formulerdriver">
                <div className="formleft">
            <div className="form">
            <label for="namedriver"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="text" placeholder="Enter name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="text" placeholder="Enter Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="icondriver" fontSize="small"/> <div className="formdriver"><input type="text" placeholder="Enter marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namedriver" />Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="text" placeholder="Enter Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="text" placeholder="Enter Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopdriver">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnadddriver" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupDriver;