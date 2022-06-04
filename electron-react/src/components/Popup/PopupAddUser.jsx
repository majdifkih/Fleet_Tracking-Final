import React from "react";
import "./PopupAddUser.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupUser(props){
    return (props.trigger) ? (
        <div className="popupuser">
            <div className="popup-inneruser">
            <h3> Add New User</h3>
                <div className="formuleruser">
                <div className="formleft">
            <div className="form">
            <label for="nameuser"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="text" placeholder="Enter name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="text" placeholder="Enter Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconuser" fontSize="small"/> <div className="formuser"><input type="text" placeholder="Enter marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameuser" />Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="text" placeholder="Enter Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="text" placeholder="Enter Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopuser">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnadduser" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupUser;