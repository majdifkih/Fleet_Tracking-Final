import React from "react";
import "./PopupEdit.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function PopupEditUser(props){
    return (props.trigger) ? (
        <div className="popupedit">
            <div className="popup-inneredit">
            <h3> Edit User</h3>
                <div className="formuleredit">
                <div className="formleft">
            <div className="form">
            <label for="nameedit"/>User Name
            <div className="formicon">
            <PersonOutlineIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Password
            <div className="formicon">
            <LockIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="password" placeholder="Edit Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="iconedit" fontSize="small"/> <div className="formedit"><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameedit"/>Email
            <div className="formicon">
            <MailOutlineIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Adress
            <div className="formicon">
            <PersonPinCircleIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Adress" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Number" /></div>
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
export default PopupEditUser;