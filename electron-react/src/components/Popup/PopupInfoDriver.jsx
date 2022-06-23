import React from "react";
import "./PopupInfo.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function PopupInfoDriver(props){
    

    return (props.trigger) ? (
        <div className="popupinfo">
            <div className="popup-innerinfo">
            <h3>Driver Informations</h3>
                <div className="formulerinfo">
                <div className="formleft">
            
            <div className="forminfo">
                <div className="infoname">
            <PersonOutlineIcon className="iconinfo" fontSize="small"/><span>Driver Name:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
           
            <div className="forminfo">
                <div className="infoname">
            <LockIcon className="iconinfo" fontSize="small"/><span>Password:</span>
            </div>
            <div className="attribinfo">{props.data.password}</div>
            </div>

            <div className="forminfo">
                <div className="infoname">
            <MailOutlineIcon className="iconinfo" fontSize="small"/><span>Email:</span>
            </div>
            <div className="attribinfo">{props.data.email}</div>
            </div>
            </div>
            <div className="formright">
                
            <div className="forminfo">
                <div className="infoname">
            <PersonPinCircleIcon className="iconinfo" fontSize="small"/><span>Address:</span>
            </div>
            <div className="attribinfo">{props.data.address}</div>
            </div>
            <div className="forminfo">
                <div className="infoname">
            <PhoneIphoneIcon className="iconinfo" fontSize="small"/><span>Phone Number:</span>
            </div>
            <div className="attribinfo">{props.data.telf}</div>
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
export default PopupInfoDriver;