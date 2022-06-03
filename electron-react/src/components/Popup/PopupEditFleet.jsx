import React from "react";
import "./PopupEditFleet.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupEditFleet(props){
    return (props.trigger) ? (
        <div className="popupeditfleet">
            <div className="popup-innereditfleet">
            <h3> Edit Vehicle</h3>
                <div className="formulereditfleet">
                <div className="formleft">
            <div className="form">
            <label for="nameeditfleet"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input type="text" placeholder="Edit name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditfleet"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input type="text" placeholder="Edit Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditfleet"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconeditfleet" fontSize="small"/> <div className="formeditfleet"><input type="text" placeholder="Edit marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameeditfleet"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditfleet"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditfleet"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditfleet">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditfleet" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditFleet;