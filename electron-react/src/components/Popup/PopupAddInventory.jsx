import React from "react";
import "./PopupAddInventory.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import axios from 'axios';
import { useState } from "react";

function PopupInventory(props){
    const [Pname, setPname] = useState("");
    const [barCode, setbarCode] = useState("");
    const [Pqnty, setPqnty] = useState("");
    const [Price, setPrice] = useState("");
    const [alertNum, setalertNum] = useState("");
    const [Pcategory, setPcategory] = useState("");
    const dataI = {
        productName:Pname ,
        barCode:barCode ,
        productQuantity:Pqnty,
        productPrice:Price,
        category:Pcategory,
        
        }
        const addProduct = async () => {
            try {
                await axios.post('http://localhost:3001/ProductAPI/products',dataI ).then((res) => {

                        if (res.data.status === 'success') {    
                            console.log("ok")
                        }
                    }
                );
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            }
        }
    return (props.trigger) ? (
        <div className="popupinventory">
            <div className="popup-innerinventory">
            <h3> Add product</h3>
                <div className="formulerinventory">
                <div className="formleft">
            <div className="formm">
            <label for="nameinventory"/>Name
            <div className="formicon">
            <Inventory2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Name" onChange={(event)=> {
  setPname(event.target.value);
}} /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameinventory"/>Barcode
            <div className="formicon">
            <QrCode2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="number" placeholder="Enter Barcode" onChange={(event)=> {
  setbarCode(event.target.value);
}} /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameinventory"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="number" onChange={(event)=> {
  setPqnty(event.target.value);
}} placeholder="Enter Quantity" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="formm">
            <label for="nameinventory"/>ID
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="number" placeholder="Enter Price" onChange={(event)=> {
  setPrice(event.target.value);
}} /></div>
            </div>
            </div>
            <div className="formm">
            <label for="nameinventory"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Category"onChange={(event)=> {
  setPcategory(event.target.value);
}} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Alert Condition
            <div className="formicon">
            <CampaignIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Condition" /></div>
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
                <button className="btna" onClick={addProduct} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupInventory;