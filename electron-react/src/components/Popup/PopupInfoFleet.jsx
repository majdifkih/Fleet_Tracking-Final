import React from "react";
import "./PopupInfo.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupInfoFleet(props){
    return (props.trigger) ? (
        <div className="popupinfo">
            <div className="popup-innerinfo">
            <h3> Vehicle Informations</h3>
                <div className="formulerinfo">
                <div className="formleft">
               
            <div className="forminfo">
                <div className="infoname">
            <DirectionsCarFilledOutlinedIcon className="iconinfo" fontSize="small"/><span>Vehicle Name:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
            
    
            
            <div className="forminfo">
                <div className="infoname">
            <EightMpOutlinedIcon className="iconinfo" fontSize="small"/><span>Matricule:</span>
            </div>
            <div className="attribinfo">{props.data.Matricule}</div>
            </div>
            
            <div className="forminfo">
                <div className="infoname">
            <DirectionsCarFilledOutlinedIcon className="iconinfo" fontSize="small"/><span>Driver:</span>
            </div>
            <div className="attribinfo">{props.data.VehicleMarque}</div>
            </div>
            </div>
            <div className="formright">
            <div className="forminfo">
                <div className="infoname">
            <LocalOfferOutlinedIcon className="iconinfo" fontSize="small"/><span>Category:</span>
            </div>
            <div className="attribinfo">{props.data.Category}</div>
            </div>
            
            <div className="forminfo">
                <div className="infoname">
            <CarCrashOutlinedIcon className="iconinfo" fontSize="small"/><span>Last maintenance:</span>
            </div>
            <div className="attribinfo">{props.data.maintenance}</div>
            </div>
            <div className="forminfo">
                <div className="infoname">
            <HelpOutlineOutlinedIcon className="iconinfo" fontSize="small"/><span>status:</span>
            </div>
            <div className="attribinfo">{props.data.status}</div>
            </div>
            </div>
            </div>
                <div className="buttonpopinfo">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupInfoFleet;