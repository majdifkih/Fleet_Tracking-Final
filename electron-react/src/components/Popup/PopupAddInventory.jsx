import React from "react";
import "./Popupform.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import CampaignIcon from '@mui/icons-material/Campaign';

function PopupInventory(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add product</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Name
            <div className="formicon">
            <Inventory2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Barcode
            <div className="formicon">
            <QrCode2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Barcode" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Enter Quantity" /></div>
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
            <label for="namea"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Alert Condition
            <div className="formicon">
            <CampaignIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Condition" /></div>
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
export default PopupInventory;