import React from "react";
import "./PopupEditUser.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonPinIcon from '@mui/icons-material/PersonPin';
function PopupEditUser(props){
    return (props.trigger) ? (
        <div className="popupedituser">
            <div className="popup-inneredituser">
            <h3> Edit User</h3>
                <div className="formuleredituser">
                <div className="formleft">
            <div className="form">
            <label for="nameedituser"/>User Name
            <div className="formicon">
            <PersonOutlineIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedituser"/>Password
            <div className="formicon">
            <LockIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="password" placeholder="Edit Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedituser"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="iconedituser" fontSize="small"/> <div className="formedituser"><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameedituser"/>Hiring date
            <div className="formicon">
            <EventNoteIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedituser"/>Adress
            <div className="formicon">
            <PersonPinIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="text" placeholder="Edit Adress" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedituser"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="iconedituser" fontSize="small"/><div className="formedituser"><input type="text" placeholder="Edit Number" /></div>
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