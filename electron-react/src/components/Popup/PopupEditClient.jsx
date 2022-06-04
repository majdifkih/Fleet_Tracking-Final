import React from "react";
import "./PopupEditClient.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupEditClient(props){
    return (props.trigger) ? (
        <div className="popupeditclient">
            <div className="popup-innereditclient">
            <h3> Edit Client</h3>
                <div className="formulereditclient">
                <div className="formleft">
            <div className="form">
            <label for="nameeditclient"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditclient"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditclient"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconeditclient" fontSize="small"/> <div className="formeditclient"><input type="text" placeholder="Edit marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameeditclient"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditclient"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditclient"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditclient">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditclient" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditClient;