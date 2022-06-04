import React from "react";
import "./PopupEditDriver.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupEditDriver(props){
    return (props.trigger) ? (
        <div className="popupeditdriver">
            <div className="popup-innereditdriver">
            <h3> Edit Driver</h3>
                <div className="formulereditdriver">
                <div className="formleft">
            <div className="form">
            <label for="nameeditdriver"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input type="text" placeholder="Edit name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditdriver"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input type="text" placeholder="Edit Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditdriver"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconeditdriver" fontSize="small"/> <div className="formeditdriver"><input type="text" placeholder="Edit marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameeditdriver"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditdriver"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditdriver"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditdriver">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditdriver" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditDriver;