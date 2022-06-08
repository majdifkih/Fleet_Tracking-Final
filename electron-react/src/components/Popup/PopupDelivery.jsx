import React from "react";
import "./Popupform.scss";

import StorefrontIcon from '@mui/icons-material/Storefront';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
function PopupDelivery(props){
    const [Vstore,setstore] = React.useState("");
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add Delivery</h3>
                <div className="formulera">
                <div className="formleft">
                <div className="form">
            <label for="namea"/>Store
            <div className="formicon">
            <StorefrontIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setstore(event.target.value);}} >
                <option disabled selected>Choose Store</option>
                <option value="Online">Online</option>
                
                </select>
                </div>
            </div>
            </div>
         
            </div>
            <div className="formright">
            
            
            <div className="form">
            <label for="namea"/>Vehicle
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setstore(event.target.value);}} >
                <option disabled selected>Choose Vehicle</option>
                <option value="Online">Online</option>
                
                </select>
                </div>
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
export default PopupDelivery;