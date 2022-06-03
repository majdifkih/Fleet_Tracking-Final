import React from "react";
import "./PopupAddInventory.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
function PopupInventory(props){
    return (props.trigger) ? (
        <div className="popupinventory">
            <div className="popup-innerinventory">
            <h3> Add product</h3>
                <div className="formulerinventory">
                <div className="formleft">
            <div className="formm">
            <label for="nameinventory"/>Name
            <div className="formicon">
            <Inventory2OutlinedIcon className="iconinventory" fontSize="small"/><div className="forminventory"><input type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameinventory"/>Barcode
            <div className="formicon">
            <QrCode2OutlinedIcon className="iconinventory" fontSize="small"/><div className="forminventory"><input type="text" placeholder="Enter Barcode" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameinventory"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconinventory" fontSize="small"/> <div className="forminventory"><input type="text" placeholder="Enter Quantity" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameinventory"/>Price
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="iconinventory" fontSize="small"/><div className="forminventory"><input type="text" placeholder="Enter Price" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="formm">
            <label for="nameinventory"/>ID
            <div className="formicon">
            <FeedOutlinedIcon className="iconinventory" fontSize="small"/><div className="forminventory" ><input type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameinventory"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconinventory" fontSize="small"/><div className="forminventory"><input type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameinventory"/>Status
            <div className="formicon">
            <InventoryOutlinedIcon className="iconinventory" fontSize="small"/><div className="forminventory"><input type="text" placeholder="Enter Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopinventory">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddinventory" onClick={() => props.setTrigger(true)} >ADD</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupInventory;