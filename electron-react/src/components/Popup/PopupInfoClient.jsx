import React from "react";
import "./PopupInfo.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function PopupInfoClient(props){
    

    return (props.trigger) ? (
        <div className="popupinfo">
            <div className="popup-innerinfo">
            <h3>Client Informations</h3>
                <div className="formulerinfo">
                <div className="formleft">
            
            <div className="forminfo">
                <div className="infoname">
            <PersonOutlineIcon className="iconinfo" fontSize="small"/><span>Client Name:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
           
            <div className="forminfo">
                <div className="infoname">
            <PersonPinCircleIcon className="iconinfo" fontSize="small"/><span>Address:</span>
            </div>
            <div className="attribinfo">{props.data.address}</div>
            </div>
            </div>
            <div className="formright">
                
            <div className="forminfo">
                <div className="infoname">
            <PhoneIphoneIcon className="iconinfo" fontSize="small"/><span>Phone Number:</span>
            </div>
            <div className="attribinfo">{props.data.telf}</div>
            </div>
            <div className="forminfo">
                <div className="infoname">
            <HelpOutlineOutlinedIcon className="iconinfo" fontSize="small"/><span>Status:</span>
            </div>
            <div className="attribinfo">{props.data.status}</div>
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
export default PopupInfoClient;