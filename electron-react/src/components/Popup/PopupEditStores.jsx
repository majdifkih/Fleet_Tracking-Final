import React from "react";
import "./PopupEdit.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupEditStore(props){
    return (props.trigger) ? (
        <div className="popupedit">
            <div className="popup-inneredit">
            <h3> Edit Store</h3>
                <div className="formuleredit">
                <div className="formleft">
            <div className="form">
            <label for="nameedit"/>Store Name
            <div className="formicon">
            <StorefrontIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Contact" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Store Owner
            <div className="formicon">
            <PersonOutlineIcon className="iconedit" fontSize="small"/> <div className="formedit"><input type="text" placeholder="Edit  Owner" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="form">
            <label for="nameedit"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit ID Number" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Type
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Type" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Address
            <div className="formicon">
            <RoomOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Address" /></div>
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
export default PopupEditStore;