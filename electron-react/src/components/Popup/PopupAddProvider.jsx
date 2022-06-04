import React from "react";
import "./PopupAddProvider.scss";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function PopupProvider(props){
    return (props.trigger) ? (
        <div className="popupprovider">
            <div className="popup-innerprovider">
            <h3> Add New Provider</h3>
                <div className="formulerprovider">
                <div className="formleft">
            <div className="for">
            <label for="nameprovider"/>Provider Name
            <div className="formicon">
            <PersonOutlineIcon className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter Contact" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconprovider" fontSize="small"/> <div className="formprovider"><input type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="for">
            <label for="nameprovider"/>Product
            <div className="formicon">
            <Inventory2OutlinedIcon className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter Product" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter Quantity" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>Product category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconprovider" fontSize="small"/><div className="formprovider"><input type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopprovider">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddprovider" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupProvider;