import React from "react";
import "./PopupEditClient.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
function PopupEditClient(props){
    return (props.trigger) ? (
        <div className="popupeditclient">
            <div className="popup-innereditclient">
            <h3> Edit Client</h3>
                <div className="formulereditclient">
                <div className="formleft">
            <div className="form">
            <label for="nameeditclient"/>Client Name
            <div className="formicon">
            <PersonOutlineIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditclient"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditclient"/>Store Name
            <div className="formicon">
            <StorefrontIcon className="iconeditclient" fontSize="small"/> <div className="formeditclient"><input type="text" placeholder="Edit Store" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="form">
            <label for="nameeditclient"/>Adress
            <div className="formicon">
            <PersonPinCircleIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit Adress" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditclient"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit Number" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditclient"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconeditclient" fontSize="small"/><div className="formeditclient"><input type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditclient">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditclient" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditClient;