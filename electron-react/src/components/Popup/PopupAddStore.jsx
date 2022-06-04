import React from "react";
import "./PopupAddStore.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupStore(props){
    return (props.trigger) ? (
        <div className="popupstore">
            <div className="popup-innerstore">
            <h3> Add New Store</h3>
                <div className="formulerstore">
                <div className="formleft">
            <div className="for">
            <label for="namestore"/>Store Name
            <div className="formicon">
            <StorefrontIcon className="iconstore" fontSize="small"/><div className="formstore"><input type="text" placeholder="Enter name" /></div>
            </div>
            </div>
            <div className="for">
            <label for="namestore"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="iconstore" fontSize="small"/><div className="formstore"><input type="text" placeholder="Enter contact" /></div>
            </div>
            </div>
            <div className="for">
            <label for="namestore"/>Store Owner
            <div className="formicon">
            <PersonOutlineIcon className="iconstore" fontSize="small"/> <div className="formstore"><input type="text" placeholder="Enter store owner" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="for">
            <label for="namestore"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconstore" fontSize="small"/><div className="formstore"><input type="text" placeholder="Enter ID number" /></div>
            </div>
            </div>
            <div className="for">
            <label for="namestore"/>Type
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconstore" fontSize="small"/><div className="formstore"><input type="text" placeholder="Enter type" /></div>
            </div>
            </div>
            <div className="for">
            <label for="namestore"/>Position
            <div className="formicon">
            <RoomOutlinedIcon className="iconstore" fontSize="small"/><div className="formstore"><input type="text" placeholder="Enter position" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopstore">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddstore" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupStore;