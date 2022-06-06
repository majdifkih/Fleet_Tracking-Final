import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function PopupEditUser(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Edit User</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>User Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Password
            <div className="formicon">
            <LockIcon className="icona" fontSize="small"/><div className="forma"><input type="password" placeholder="Edit Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namea"/>Email
            <div className="formicon">
            <MailOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Adress
            <div className="formicon">
            <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Adress" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Number" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditUser;