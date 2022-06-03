import React from "react";
import "./PopupEditInventory.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
function PopupEditInventory(props){
    return (props.trigger) ? (
        <div className="popupeditinventory">
            <div className="popup-innereditinventory">
            <h3> Edit product</h3>
                <div className="formulereditinventory">
                <div className="formleft">
            <div className="formm">
            <label for="nameeditinventory"/>Name
            <div className="formicon">
            <Inventory2OutlinedIcon className="iconeditinventory" fontSize="small"/><div className="formeditinventory"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameeditinventory"/>Barcode
            <div className="formicon">
            <QrCode2OutlinedIcon className="iconeditinventory" fontSize="small"/><div className="formeditinventory"><input type="text" placeholder="Edit Barcode" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameeditinventory"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconeditinventory" fontSize="small"/> <div className="formeditinventory"><input type="text" placeholder="Edit Quantity" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameeditinventory"/>Price
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="iconeditinventory" fontSize="small"/><div className="formeditinventory"><input type="text" placeholder="Edit Price" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="formm">
            <label for="nameeditinventory"/>ID
            <div className="formicon">
            <FeedOutlinedIcon className="iconeditinventory" fontSize="small"/><div className="formeditinventory" ><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameeditinventory"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconeditinventory" fontSize="small"/><div className="formeditinventory"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameeditinventory"/>Status
            <div className="formicon">
            <InventoryOutlinedIcon className="iconeditinventory" fontSize="small"/><div className="formeditinventory"><input type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditinventory">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditinventory" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditInventory;