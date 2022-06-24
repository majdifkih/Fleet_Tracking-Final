import React from "react";
import "./Popupform.scss";
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from "react";

function PopupEditDemand(props){

    const [Pqnty, setPqnty] = useState("");
    const [product, setproduct] = useState("");
    const [productclient, setclient] = useState("");
    const dataI = {
        product:product ,
        productQuantity:Pqnty,
        productclient:productclient ,
        
        }
        const addProduct = async () => {
            if (product === "" || Pqnty === "" || productclient === "") {
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
                                text: "Your demand has been updated",
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
            <h3>Edit</h3>
                <div className="formulera">
                <div className="formleft">
                <div className="form">
            <label for="namea"/>Client
            <div className="formicon">
            <PersonOutlineIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setclient(event.target.value);}} >
                <option disabled selected>Choose Client</option>
                <option value="Online">Online</option>
                
                </select>
                </div>
            </div>
            </div>
                <div className="form">
            <label for="namea"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconselect" fontSize="small"/> <div className="forma"><input type="number" onChange={(event)=> {
  setPqnty(event.target.value);
}} placeholder="Edit Quantity" /></div>
            </div>
            </div>
            
            </div>
            <div className="formright">

            <div className="form">
            <label for="namea"/>Product
            <div className="formicon">
            <Inventory2OutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setproduct(event.target.value);}} >
                <option disabled selected>Edit Product</option>
                <option value="Online">Online</option>
                
                </select>
                </div>
            </div>
            </div>

            


            
           
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addProduct} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditDemand;