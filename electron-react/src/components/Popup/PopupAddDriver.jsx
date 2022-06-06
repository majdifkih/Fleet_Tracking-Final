import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function PopupDriver(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add New Driver</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Driver Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Password
            <div className="formicon">
            <LockIcon className="icona" fontSize="small"/><div className="forma"><input type="password" placeholder="Enter Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namea" />Email
            <div className="formicon">
            <MailOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Email" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Address" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Number" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupDriver;