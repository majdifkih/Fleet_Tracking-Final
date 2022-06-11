import React from "react";
import "./PopupInfo.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';

function PopupInfoInventory(props){
    

    return (props.trigger) ? (
        <div className="popupinfo">
            <div className="popup-innerinfo">
            <h3>Product Informations</h3>
                <div className="formulerinfo">
                <div className="formleft">
            
            <div className="forminfo">
                <div className="infoname">
            <Inventory2OutlinedIcon className="iconinfo" fontSize="small"/><span>Product Name:</span>
            </div>
            <div className="attribinfo">{props.data.productName}</div>
            </div>
           
            <div className="forminfo">
                <div className="infoname">
            <QrCode2OutlinedIcon className="iconinfo" fontSize="small"/><span>Barcode:</span>
            </div>
            <div className="attribinfo">{props.data.barCode}</div>
            </div>

            <div className="forminfo">
                <div className="infoname">
            <ProductionQuantityLimitsOutlinedIcon className="iconinfo" fontSize="small"/><span>Quantity:</span>
            </div>
            <div className="attribinfo">{props.data.productQuantity}</div>
            </div>
            </div>
            <div className="formright">
                
            <div className="forminfo">
                <div className="infoname">
            <AttachMoneyOutlinedIcon className="iconinfo" fontSize="small"/><span>Price:</span>
            </div>
            <div className="attribinfo">{props.data.productPrice}</div>
            </div>
            <div className="forminfo">
                <div className="infoname">
            <LocalOfferOutlinedIcon className="iconinfo" fontSize="small"/><span>Category:</span>
            </div>
            <div className="attribinfo">{props.data.category}</div>
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
export default PopupInfoInventory;