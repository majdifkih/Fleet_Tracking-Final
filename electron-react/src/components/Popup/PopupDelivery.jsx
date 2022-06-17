import React from "react";
import "./Popupform.scss";
import axios from 'axios';
import { useState,useEffect } from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
function PopupDelivery(props){
        const [Vstore,setstore] = React.useState("");

        const [VehD,setVehD] = React.useState("");
    const [veh,setveh] = useState({});
    const DATAd = {
        vehicule:VehD,
        store:Vstore    
    }
    const AddDelivery = () => {
        console.log(DATAd)
        axios.post("http://localhost:3001/DeliveryAPI/deliveries",
            DATAd
        ).then(res=>{
            if(res.data.success){
                console.log(res.data.vehicle);
            }
        }
        )
    }


    const getvehicule=()=>{
        axios.get("http://localhost:3001/VehiculeAPI/vehicules").then(res=>{
            if(res.data.success){
                setveh( res.data.existingPosts);

                console.log(veh)
            }
        }
        )
    }
    const [sto,setSto] = useState({});
    const getStore=()=>{
        axios.get("http://localhost:3001/StoreAPI/stores").then(res=>{
            if(res.data.success){
                setSto( res.data.existingPosts);
                 
                console.log(sto)
            }
        }
        )
    }
    useEffect(()=>{
        getvehicule()
        getStore()
    } );
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add Delivery</h3>
                <div className="formulera">
                <div className="formleft">



               

                <div className="form">
            <label for="namea"/>Store
            <div className="formicon">
            <StorefrontIcon className="iconselectsearch" fontSize="small"/><div className="formselect"><div className="searchdrive"><input type="search" placeholder="Search Store"  className="inputsearch"/><select id="select" className="selectsearch" onChange={(event)=> {setstore(event.target.value);}} >
                <option disabled selected>Choose Store</option>{Object.keys(sto).map((val,key) => (
                <option value={sto[val]._id}>{sto[val].name}</option>
                ))}
                
                </select>
                </div>
                </div>
            </div>
            </div>
         
            </div>
            <div className="formright">
            
            
            <div className="form">
            <label for="namea"/>Vehicle
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconselectsearch" fontSize="small"/><div className="formselect"><div className="searchdrive"><input type="search" placeholder="Search Vehicle"  className="inputsearch"/><select id="select" className="selectsearch" onChange={(event)=> {setVehD(event.target.value);}} >
                <option disabled selected>Choose Vehicle</option>
                {Object.keys(veh).map((vl,key) => (
                <option value={veh[vl]._id}>{veh[vl].name}</option>
                ))}
                </select>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={AddDelivery} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupDelivery;