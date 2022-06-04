import React from "react";
import "./PopupEditUser.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupEditUser(props){
    return (props.trigger) ? (
        <div className="popupedituser">
            <div className="popup-inneredituser">
            <h3> Edit User</h3>
                <div className="formuleredituser">
                <div className="formleft">
            <div className="form">
            <label for="nameedituser"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="text" placeholder="Edit name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedituser"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="text" placeholder="Edit Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedituser"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconedituser" fontSize="small"/> <div className="formedituser"><input type="text" placeholder="Edit marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameedituser"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedituser"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedituser"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopedituser">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddedituser" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditUser;