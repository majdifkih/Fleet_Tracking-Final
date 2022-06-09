import React from "react";
import "./Popupform.scss";
import axios from "axios";
import { useState } from "react";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
function PopupEditInventory(props){
    const [newPname, setnewPname] = useState("");
    const [newbarCode, setnewbarCode] = useState("");
    const [newPqnty, setnewPqnty] = useState("");
    const [newPrice, setnewPrice] = useState("");
    const [newalertNum, setnewalertNum] = useState("");
    const [newPcategory, setnewPcategory] = useState("");
    const updateProduct = async(ID) => {
        const dataD = {productName:newPname ,
            barCode:newbarCode ,
            productQuantity:newPqnty,
            productPrice:newPrice,
            category:newPcategory,
            }
       await axios.put(`http://localhost:3001/ProductAPI/products?id=${ID}`,dataD).then((res) => {
                if (res.data.status === 'success') {
                  console.log("ok")
                }
                 }   ).catch((err) => {  console.log(err) }  )
          }
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Edit product</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Product Name
            <div className="formicon">
            <Inventory2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Name"  onChange={(event)=> {
  setnewPname(event.target.value);
}}/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Barcode
            <div className="formicon">
            <QrCode2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="number" placeholder="Edit Barcode" onChange={(event)=> {
  setnewbarCode(event.target.value);
}} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="number" placeholder="Edit Quantity" onChange={(event)=> {
  setnewPqnty(event.target.value);
}}/></div>
            </div>
            </div>
            
            </div>
            <div className="formright">
            <div className="form">
            <label for="namea"/>Price
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="number" placeholder="Edit Price" onChange={(event)=> {
  setnewPrice(event.target.value);
}} /></div>
            </div>
            </div>
           
            <div className="form">
            <label for="namea"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Category" onChange={(event)=> {
  setnewPcategory(event.target.value);
}} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Alert Condition
            <div className="formicon">
            <CampaignIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Condition" onChange={(event)=> {
  setnewalertNum(event.target.value);
}} /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={() => updateProduct(props.id)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditInventory;