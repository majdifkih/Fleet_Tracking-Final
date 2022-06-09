import React from "react";
import "./PopupInfo.scss";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
function PopupInfoProvider(props){
    

    return (props.trigger) ? (
        <div className="popupinfo">
            <div className="popup-innerinfo">
            <h3>Provider Informations</h3>
                <div className="formulerinfo">
                <div className="formleft">
            
            <div className="forminfo">
                <div className="infoname">
            <PersonOutlineIcon className="iconinfo" fontSize="small"/><span>Provider Name:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
           
            <div className="forminfo">
                <div className="infoname">
            <PhoneIphoneIcon className="iconinfo" fontSize="small"/><span>Phone Number:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>

            </div>
            <div className="formright">
                
            <div className="forminfo">
                <div className="infoname">
            <LocalOfferOutlinedIcon className="iconinfo" fontSize="small"/><span>Product category:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
            <div className="forminfo">
                <div className="infoname">
            <AlternateEmailIcon className="iconinfo" fontSize="small"/><span>Address:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
            
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupInfoProvider;