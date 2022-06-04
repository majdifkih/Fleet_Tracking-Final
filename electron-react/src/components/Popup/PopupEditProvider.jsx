import React from "react";
import "./PopupEditProvider.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupEditProvider(props){
    return (props.trigger) ? (
        <div className="popupeditprovider">
            <div className="popup-innereditprovider">
            <h3> Edit Provider</h3>
                <div className="formulereditprovider">
                <div className="formleft">
            <div className="for">
            <label for="nameeditprovider"/>Provider Name
            <div className="formicon">
            <StorefrontIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit name" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit contact" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>provider Owner
            <div className="formicon">
            <PersonOutlineIcon className="iconeditprovider" fontSize="small"/> <div className="formeditprovider"><input type="text" placeholder="Edit provider owner" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="for">
            <label for="nameeditprovider"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit ID number" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>Type
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit type" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>Position
            <div className="formicon">
            <RoomOutlinedIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit position" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditprovider">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditprovider" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditProvider;