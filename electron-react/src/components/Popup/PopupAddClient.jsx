import React from "react";
import "./PopupAddClient.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupClient(props){
    return (props.trigger) ? (
        <div className="popupclient">
            <div className="popup-innerclient">
            <h3> Add New Client</h3>
                <div className="formulerclient">
                <div className="formleft">
            <div className="form">
            <label for="nameclient"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameclient"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameclient"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconclient" fontSize="small"/> <div className="formclient"><input type="text" placeholder="Enter marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameclient" />Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameclient"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameclient"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopclient">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddclient" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupClient;