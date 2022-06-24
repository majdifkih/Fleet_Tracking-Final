import React, { useEffect } from "react";
import "./Popupform.scss";
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import axios from 'axios';
import { useState } from "react";

function PopupAddStock(props){
    const getProduct = async () => {
        axios.get('http://localhost:3001/ProductAPI/products').then(res => {
            if (res.data.success) {
                setProductlist(res.data.existingPosts);

            }
            else {
                alert("Error");
            }
        }
        )
    }
    const [productlist, setProductlist] = useState([]);

    const [Pqnty, setPqnty] = useState("");
    const [product, setproduct] = useState("");
    const dataI = {
    
        products:product,
        quantity:Pqnty,
        status:"GOOD"

        }
        const addProduct = async (IDP) => {
            console.log(product)
            var item = productlist.find(item => item._id = product);
            if (item.productQuantity < Pqnty) {
                alert("Not enough quantity");
            }
            else {
            

            try {
                await axios.put(`http://localhost:3001/VanAPI/vans?id=${IDP}`,dataI ).then((res) => {

                        if (res.data.success) {    
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
        useEffect(() => {
            getProduct();
        }
            );

    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add</h3>
                <div className="formulera">
                <div className="formleft">
                <div className="form">
            <label for="namea"/>Product
            <div className="formicon">
            <select id="select" className="select" onChange={(event)=> {setproduct(event.target.value);}} >
                <option disabled selected>Choose Product</option>
                {(productlist).map((pr) => (
                <option value={pr._id}>{pr.productName}</option>
                ))}

                </select>
                
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
                <button className="btna" onClick={()=>addProduct(props.id)} >Add</button>
                </div>

            </div>

        </div>
    ) : "";
}
export default PopupAddStock;