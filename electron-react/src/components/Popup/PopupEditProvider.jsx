import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

function PopupEditProvider(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Edit Provider</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Provider Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Number" /></div>
            </div>
            </div>
            
            </div>
            <div className="formright">
            <div className="form">
            <label for="namea"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Product category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Category" /></div>
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
export default PopupEditProvider;