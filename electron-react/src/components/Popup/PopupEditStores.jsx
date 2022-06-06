import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupEditStore(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Edit Store</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Store Name
            <div className="formicon">
            <StorefrontIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Contact" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Store Owner
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Edit  Owner" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="form">
            <label for="namea"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit ID Number" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Type
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Type" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <RoomOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Address" /></div>
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
export default PopupEditStore;