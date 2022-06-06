import React from "react";
import "./PopupAddDriver.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
function PopupDriver(props){

    
    return (props.trigger) ? (
        <div className="popupdriver">
            <div className="popup-innerdriver">
            <h3> Add New Driver</h3>
                <div className="formulerdriver">
                <div className="formleft">
            <div className="form">
            <label for="namedriver"/>Driver Name
            <div className="formicon">
            <PersonOutlineIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Password
            <div className="formicon">
            <LockIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="password" placeholder="Enter Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="icondriver" fontSize="small"/> <div className="formdriver"><input type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namedriver" />Hiring date
            <div className="formicon">
            <EventNoteIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="text" placeholder="Enter Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Adress
            <div className="formicon">
            <PersonPinCircleIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="text" placeholder="Enter Adress" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icondriver" fontSize="small"/><div className="formdriver"><input type="text" placeholder="Enter Number" /></div>
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