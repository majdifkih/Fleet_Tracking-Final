import React from "react";
import "./Popupform.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
function PopupEditInventory(props){
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Edit product</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Name
            <div className="formicon">
            <Inventory2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Barcode
            <div className="formicon">
            <QrCode2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Barcode" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Edit Quantity" /></div>
            </div>
            </div>
            
            </div>
            <div className="formright">
            <div className="form">
            <label for="namea"/>Price
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Price" /></div>
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
            <CampaignIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Condition" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditInventory;