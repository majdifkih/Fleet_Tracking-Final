import React from "react";
import "./PopupInfo.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupInfoStore(props){
    

    return (props.trigger) ? (
        <div className="popupinfo">
            <div className="popup-innerinfo">
            <h3>Store Informations</h3>
                <div className="formulerinfo">
                <div className="formleft">
            
            <div className="forminfo">
                <div className="infoname">
            <StorefrontIcon className="iconinfo" fontSize="small"/><span>Store Name:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
           
            <div className="forminfo">
                <div className="infoname">
            <MailOutlineIcon className="iconinfo" fontSize="small"/><span>Contact:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>

            <div className="forminfo">
                <div className="infoname">
            <PersonOutlineIcon className="iconinfo" fontSize="small"/><span>Store Owner:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
            </div>
            <div className="formright">
                
            <div className="forminfo">
                <div className="infoname">
            <LocalOfferOutlinedIcon className="iconinfo" fontSize="small"/><span>Type:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
            <div className="forminfo">
                <div className="infoname">
            <RoomOutlinedIcon className="iconinfo" fontSize="small"/><span>Address:</span>
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
export default PopupInfoStore;