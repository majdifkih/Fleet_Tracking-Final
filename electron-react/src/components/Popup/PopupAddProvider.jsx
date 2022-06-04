import React from "react";
import "./PopupAddProvider.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupProvider(props){
    return (props.trigger) ? (
        <div className="popupprovider">
            <div className="popup-innerprovider">
            <h3> Add New Provider</h3>
                <div className="formulerprovider">
                <div className="formleft">
            <div className="for">
            <label for="nameprovider"/>Provider Name
            <div className="formicon">
            <StorefrontIcon className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter name" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter contact" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>Provider Owner
            <div className="formicon">
            <PersonOutlineIcon className="iconprovider" fontSize="small"/> <div className="formprovider"><input type="text" placeholder="Enter provider owner" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="for">
            <label for="nameprovider"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter ID number" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>Type
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter type" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>Position
            <div className="formicon">
            <RoomOutlinedIcon className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter position" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopprovider">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddprovider" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupProvider;