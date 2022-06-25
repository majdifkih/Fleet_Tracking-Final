import React from "react";
import "./Popupform.scss";
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import axios from 'axios';
import { useState,useEffect } from "react";
import Swal from "sweetalert2";
function PopupAddDemand(props){
    
    const addProduct = (r,q,InventoryQ,id,p) => {
       
        console.log(r,q,InventoryQ,id,p)
        if (q > InventoryQ) {
            Swal.fire({
                title: "Not enough quantity",
                text: "quantity is greater than the quantity limit",
                icon: "error",
                confirmButtonText: "OK"
            });
        
        

        }else{
            props.setTrigger(!props.trigger);
        props.setData(current => [...current ,{name:r,price:p*q,products:id,quantity:q}])}}

    const [Pqnty, setPqnty] = useState("");
    const [product, setproduct] = useState("");
  
     
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add Demand</h3>
                <div className="formulera">
                <div className="formleft"> 
                <div className="form">
            <label for="namea"/>Product
            <div className="formicon">
            <Inventory2OutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {const list = props.ro.filter((val)=>  val._id == event.target.value)
                console.log(list);
                 setproduct(list);}} >

                <option selected>Choose Product</option>
                {(props.ro).map((srow) => (
                <option value={srow._id}>{srow.productName}</option> 
                ))}
                
                </select>
                </div>
            </div>
            </div>
            
            </div>
            <div className="formright">
           
            
            <div className="form">
            <label for="namea"/>Quantity
            <div className="formicon">
                
            <ProductionQuantityLimitsOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input type="number" onChange={(event)=> {
  setPqnty(event.target.value);
}} placeholder="Enter Quantity" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={()=>addProduct(product[0].productName,Pqnty,product[0].productQuantity,product[0]._id,product[0]?.productPrice)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupAddDemand;