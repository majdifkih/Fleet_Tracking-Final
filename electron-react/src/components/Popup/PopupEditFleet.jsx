import React from "react";
import "./Popupform.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupEditFleet(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Edit Vehicle</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Edit Marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namea"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditFleet;