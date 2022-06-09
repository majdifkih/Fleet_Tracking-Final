import React from "react";
import "./Popupform.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
function PopupFacture(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add Delivery</h3>
                <div className="formulera">
                <div className="formleft">
                <div className="form">
            <label for="namea"/>Store Name 
            <div className="formicon">
            <StorefrontIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Enter Store" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Quantity" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            
            <div className="form">
            <label for="namea"/>Price
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Price" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Total
            <div className="formicon">
            <PointOfSaleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Total" /></div>
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
export default PopupFacture;