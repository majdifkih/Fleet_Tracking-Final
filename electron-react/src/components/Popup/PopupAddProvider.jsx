import React from "react";
import "./Popupform.scss";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function PopupProvider(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add New Provider</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Provider Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Number" /></div>
            </div>
            </div>
            
            </div>
            <div className="formright">
            <div className="form">
            <label for="namea"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Product category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupProvider;