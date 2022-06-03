import React from "react";
import "./PopupEditStores.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupEditStore(props){
    return (props.trigger) ? (
        <div className="popupeditstore">
            <div className="popup-innereditstore">
            <h3> Edit Store</h3>
                <div className="formulereditstore">
                <div className="formleft">
            <div className="for">
            <label for="nameeditstore"/>Store Name
            <div className="formicon">
            <StorefrontIcon className="iconeditstore" fontSize="small"/><div className="formeditstore"><input type="text" placeholder="Edit name" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditstore"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="iconeditstore" fontSize="small"/><div className="formeditstore"><input type="text" placeholder="Edit contact" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditstore"/>Store Owner
            <div className="formicon">
            <PersonOutlineIcon className="iconeditstore" fontSize="small"/> <div className="formeditstore"><input type="text" placeholder="Edit store owner" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="for">
            <label for="nameeditstore"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconeditstore" fontSize="small"/><div className="formeditstore"><input type="text" placeholder="Edit ID number" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditstore"/>Type
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconeditstore" fontSize="small"/><div className="formeditstore"><input type="text" placeholder="Edit type" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditstore"/>Position
            <div className="formicon">
            <RoomOutlinedIcon className="iconeditstore" fontSize="small"/><div className="formeditstore"><input type="text" placeholder="Edit position" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditstore">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditstore" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditStore;