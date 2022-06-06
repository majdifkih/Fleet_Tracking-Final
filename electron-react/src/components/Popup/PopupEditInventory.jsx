import React from "react";
import "./PopupEdit.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
function PopupEditInventory(props){
    return (props.trigger) ? (
        <div className="popupedit">
            <div className="popup-inneredit">
            <h3> Edit product</h3>
                <div className="formuleredit">
                <div className="formleft">
            <div className="form">
            <label for="nameedit"/>Name
            <div className="formicon">
            <Inventory2OutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Barcode
            <div className="formicon">
            <QrCode2OutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Barcode" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconedit" fontSize="small"/> <div className="formedit"><input type="text" placeholder="Edit Quantity" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Price
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Price" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameedit"/>ID
            <div className="formicon">
            <FeedOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit" ><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameedit"/>Status
            <div className="formicon">
            <InventoryOutlinedIcon className="iconedit" fontSize="small"/><div className="formedit"><input type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopedit">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddedit" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditInventory;