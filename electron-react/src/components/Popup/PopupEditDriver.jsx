import React from "react";
import "./PopupEditDriver.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
function PopupEditDriver(props){
    return (props.trigger) ? (
        <div className="popupeditdriver">
            <div className="popup-innereditdriver">
            <h3> Edit Driver</h3>
                <div className="formulereditdriver">
                <div className="formleft">
            <div className="form">
            <label for="nameeditdriver"/>Driver Name
            <div className="formicon">
            <PersonOutlineIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input  type="text" placeholder={props.id} /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditdriver"/>Password
            <div className="formicon">
            <LockIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input type="text" placeholder="Edit Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditdriver"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="iconeditdriver" fontSize="small"/> <div className="formeditdriver"><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameeditdriver"/>Hiring date
            <div className="formicon">
            <EventNoteIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditdriver"/>Adress
            <div className="formicon">
            <PersonPinCircleIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input type="text" placeholder="Edit Adress" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditdriver"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="iconeditdriver" fontSize="small"/><div className="formeditdriver"><input type="text" placeholder="Edit Number" /></div>
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