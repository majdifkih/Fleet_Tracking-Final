import React from "react";
import "./Popupform.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import axios from 'axios';
import { useState } from "react";
import Swal from "sweetalert2";

function PopupInventory(props){
    const [Pname, setPname] = useState("");
    const [barCode, setbarCode] = useState("");
    const [Pqnty, setPqnty] = useState("");
    const [Price, setPrice] = useState("");
    const [alertC, setalertC] = useState("");
    const [Pcategory, setPcategory] = useState("");
    const dataI = {
        barCode:barCode ,
        productName:Pname ,
        
        productQuantity:Pqnty,
        productPrice:Price,
        category:Pcategory,
        alertCondition:alertC
        
        }
        const addProduct = async () => {
            if (Pname === "" || barCode === "" || Pqnty === "" || Price === "" || Pcategory === "") {
                Swal.fire({
                    title: "Error",
                    text: "Please fill all the fields",
                    icon: "error",
                    confirmButtonText: "Ok"
                });
            }
            else {
            try {
                await axios.post('http://localhost:3001/ProductAPI/products',dataI ).then((res) => {

                        if (res.data.success) { 
                            props.setTrigger(!props.trigger);

                            Swal.fire({
                                    
                                    title: "Success",
                                    text: "Product added successfully",
                                    icon: "success",
                                    confirmButtonText: "Ok"
                                });
                            console.log("ok")
                        }
                    }
                );
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            }}
        }
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add product</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Product Name
            <div className="formicon">
            <Inventory2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Name" onChange={(event)=> {
  setPname(event.target.value);
}} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Barcode
            <div className="formicon">
            <QrCode2OutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="number" placeholder="Enter Barcode" onChange={(event)=> {
  setbarCode(event.target.value);
}} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="number" onChange={(event)=> {
  setPqnty(event.target.value);
}} placeholder="Enter Quantity" /></div>
            </div>
            </div>
            
            </div>
            <div className="formright">
            <div className="form">
            <label for="namea"/>Price
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="number" placeholder="Enter Price" onChange={(event)=> {
  setPrice(event.target.value);
}} /></div>
            </div>
            </div>
            
            <div className="form">
            <label for="namea"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Category"onChange={(event)=> {
  setPcategory(event.target.value);
}} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Quantity Alert
            <div className="formicon">
            <CampaignIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
  setalertC(event.target.value);
}} type="text" placeholder="Enter Condition" /></div>
            </div>
            </div>
           
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addProduct} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupInventory;