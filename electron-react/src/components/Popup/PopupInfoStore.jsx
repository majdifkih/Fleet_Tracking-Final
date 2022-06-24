import React, { useEffect,useState } from "react";
import axios from "axios";

import "./PopupInfo.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupInfoStore(props){
    const [theaddress, setTheaddress] = useState("");
    const address= (lat,lon) => {
        console.log(lat,lon)
        axios.get(`http://api.positionstack.com/v1/reverse?access_key=e7b7c50f25c942f3c3bf52e1cf825d3b&query=${lat},${lon}`).then(res => {
            setTheaddress(res.data.data[0].county);
      })}
      const [pos, setPos] = useState('')
    useEffect(() => {
        // setPos(props.data.positionStore.latitude)

        // address(34,12)
    }, [])

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
            <div className="attribinfo">{props.data.contact}</div>
            </div>

            <div className="forminfo">
                <div className="infoname">
            <PersonOutlineIcon className="iconinfo" fontSize="small"/><span>Store Owner:</span>
            </div>
            <div className="attribinfo">{props.data.owner}</div>
            </div>
            </div>
            <div className="formright">
                
            <div className="forminfo">
                <div className="infoname">
            <LocalOfferOutlinedIcon className="iconinfo" fontSize="small"/><span>Type:</span>
            </div>
            <div className="attribinfo">{props.data.type}</div>
            </div>
            <div className="forminfo">
                <div className="infoname">
            <RoomOutlinedIcon className="iconinfo" fontSize="small"/><span>Address:</span>
            </div>
            <div className="attribinfo" value={address(props.data.positionStore.latitude,props.data.positionStore.longitude)}  >{theaddress}</div>
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