import React from "react";
import "./PopupAddUser.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
function PopupUser(props){
    return (props.trigger) ? (
        <div className="popupuser">
            <div className="popup-inneruser">
            <h3> Add New User</h3>
                <div className="formuleruser">
                <div className="formleft">
            <div className="form">
            <label for="nameuser"/>User Name
            <div className="formicon">
            <PersonOutlineIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Password
            <div className="formicon">
            <LockIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="password" placeholder="Enter Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="iconuser" fontSize="small"/> <div className="formuser"><input type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameuser" />Hiring date
            <div className="formicon">
            <EventNoteIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="text" placeholder="Enter Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Adress
            <div className="formicon">
            <PersonPinCircleIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="text" placeholder="Enter Adress" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="iconuser" fontSize="small"/><div className="formuser"><input type="text" placeholder="Enter Number" /></div>
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