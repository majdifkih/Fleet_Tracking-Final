import React from "react";
import "./Popupform.scss";
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import axios from 'axios';
import { useState } from "react";

function PopupAddDemand(props){

    const [Pqnty, setPqnty] = useState("");
    const [product, setproduct] = useState("");
  
    const dataI = {
        product:product ,
        productQuantity:Pqnty,
    
        
        }
        const addProduct = async () => {
            try {
                await axios.post('https://qlogisticsapp.herokuapp.com/ProductAPI/products',dataI ).then((res) => {

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
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add Demand</h3>
                <div className="formulera">
                <div className="formleft">
                <div className="form">
            <label for="namea"/>Product
            <div className="formicon">
            <Inventory2OutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setproduct(event.target.value);}} >
                <option disabled selected>Choose Product</option>
                <option value="Online">Online</option>
                
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
                <button className="btna" onClick={addProduct} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupAddDemand;