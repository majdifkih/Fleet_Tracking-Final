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
            <h3> Add Store</h3>
                <div className="formulerstor">
                <div className="formleft">
            
            <label for="namestore"/>Store Name
            <div className="formicon">
            <StorefrontIcon className="iconstore" /><div className="formstore"><input type="text" placeholder="Enter name" /></div>
            </div>
            
            <label for="namestore"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="iconstore"/><div className="formstore"><input type="text" placeholder="Enter contact" /></div>
            </div>
            <label for="namestore"/>Store Owner
            <div className="formicon">
            <PersonOutlineIcon className="iconstore"/> <div className="formstore"><input type="text" placeholder="Enter store owner" /></div>
            </div>
            </div>
            <div className="formright">

            <label for="namestore"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconstore"/><div className="formstore"><input type="text" placeholder="Enter ID number" /></div>
            </div>
            <label for="namestore"/>Type
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconstore"/><div className="formstore"><input type="text" placeholder="Enter type" /></div>
            </div>
            <label for="namestore"/>Position
            <div className="formicon">
            <RoomOutlinedIcon className="iconstore"/><div className="formstore"><input type="text" placeholder="Enter position" /></div>
            </div>
            </div>
            </div>
                <div className="buttonpopstore">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddstore" onClick={() => props.setTrigger(true)} >ADD</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupStore;