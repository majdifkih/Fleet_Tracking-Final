import React from "react";
import "./PopupEdit.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupEditFleet(props){
    return (props.trigger) ? (
        <div className="popupedit">
            <div className="popup-inneredit">
            <h3> Edit Vehicle</h3>
                <div className="formuleredit">
                <div className="formleft">
            <div className="form">
            <label for="nameedit"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconedit" fontSize="small"/> <div className="formedit"><input type="text" placeholder="Edit Marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameedit"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopedit">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddedit" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditFleet;