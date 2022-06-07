import React from "react";
import "./Popupform.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupFleet(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add New Vehicle</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Enter Marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namea" />Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="selectcat">
                <option selected>Choose Category</option>
                <option>Camion</option>
                <option>Car</option>
                </select>
                </div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Last maintenance
            <div className="formicon">
            <CarCrashOutlinedIcon className="icondate" fontSize="small"/><div className="formdate"><input type="date" className="inputdate" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select">
                <option selected>Choose status</option>
                <option>Online</option>
                <option>Offline</option>
                </select>
                </div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupFleet;