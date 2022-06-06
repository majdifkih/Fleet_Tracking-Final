import React from "react";
import "./PopupEdit.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

function PopupEditProvider(props){
    return (props.trigger) ? (
        <div className="popupedit">
            <div className="popup-inneredit">
            <h3> Edit Provider</h3>
                <div className="formuleredit">
                <div className="formleft">
            <div className="form">
            <label for="nameedit"/>Provider Name
            <div className="formicon">
            <PersonOutlineIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Number" /></div>
            </div>
            </div>
            
            </div>
            <div className="formright">
            <div className="form">
            <label for="nameedit"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconedit" fontSize="small"/> <div className="formedit"><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Product category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Category" /></div>
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
export default PopupEditProvider;