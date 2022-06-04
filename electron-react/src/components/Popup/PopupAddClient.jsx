import React from "react";
import "./PopupAddClient.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupClient(props){
    return (props.trigger) ? (
        <div className="popupclient">
            <div className="popup-innerclient">
            <h3> Add New Client</h3>
                <div className="formulerclient">
                <div className="formleft">
            <div className="form">
            <label for="nameclient"/>Client Name
            <div className="formicon">
            <PersonOutlineIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameclient"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameclient"/>Store Name 
            <div className="formicon">
            <StorefrontIcon className="iconclient" fontSize="small"/> <div className="formclient"><input type="text" placeholder="Enter Store" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="form">
            <label for="nameclient"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopclient">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddclient" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupClient;