import React from "react";
import "./Popupform.scss";
import axios from 'axios';
import { useState,useEffect } from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import Swal from "sweetalert2";
function PopupDelivery(props){
        const [Vstore,setstore] = React.useState("");

        const [VehD,setVehD] = React.useState("");
    const [veh,setveh] = useState({});
    const DATAd = {
        vehicule:VehD,
        store:Vstore    
    }
    const AddDelivery = () => {
        if (VehD === "" || Vstore === "") {
            alert("Please fill all fields");
        }
        else {
        console.log(DATAd)
        axios.post("https://qlogisticsapp.herokuapp.com/DeliveryAPI/deliveries",
            DATAd
        ).then(res=>{
            if(res.data.success){
                props.setTrigger(!props.trigger);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Delivery has been saved',
                    showConfirmButton: false,
                    timer: 1500
                    })
                console.log(res.data.vehicle);
            }
        }
        )}
    }


    const getvehicule=()=>{
        axios.get("https://qlogisticsapp.herokuapp.com/VehiculeAPI/vehicules").then(res=>{
            if(res.data.success){
                setveh( res.data.existingPosts);

                console.log(veh)
            }
        }
        )
    }
    const [sto,setSto] = useState({});
    const getStore=()=>{
        axios.get("https://qlogisticsapp.herokuapp.com/StoreAPI/stores").then(res=>{
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
    },[] );
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add Delivery</h3>
                <div className="formulera">
                <div className="formleft">

                <div className="form">
            <label for="namea"/>Store
            <div className="formicon">
            <StorefrontIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setstore(event.target.value);}} >
                <option disabled selected>Choose Store</option>{Object.keys(sto).map((val,key) => (
                <option value={sto[val]._id}>{sto[val].name}</option>
                ))}
                
                </select>
                </div>
              
            </div>
            </div>
            </div>
            
            <div className="formright">
            
            <div className="form">
            <label for="namea"/>Vehicle
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setVehD(event.target.value);}} >
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
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={AddDelivery} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupDelivery;