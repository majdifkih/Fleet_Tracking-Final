import React from "react";
import "./PopupEditProvider.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

function PopupEditProvider(props){
    return (props.trigger) ? (
        <div className="popupeditprovider">
            <div className="popup-innereditprovider">
            <h3> Edit Provider</h3>
                <div className="formulereditprovider">
                <div className="formleft">
            <div className="for">
            <label for="nameeditprovider"/>Provider Name
            <div className="formicon">
            <PersonOutlineIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Contact" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconeditprovider" fontSize="small"/> <div className="formeditprovider"><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="for">
            <label for="nameeditprovider"/>Prodcut
            <div className="formicon">
            <Inventory2OutlinedIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Product" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Quantity" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>Product category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditprovider">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditprovider" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditProvider;