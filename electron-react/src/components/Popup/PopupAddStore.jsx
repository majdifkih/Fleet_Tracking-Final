import React from "react";
import "./Popupform.scss";
import { useState } from "react";
import axios from 'axios';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupStore(props){
    
    const [storeName, setStoreName] = useState("");
    const [storeType, setStoreType] = useState("");
    const [storeStatus, setStoreStatus] = useState("");
    const [storeContact, setStoreContact] = useState("");
    const [storeAddress, setStoreAddress] = useState("");
    const [storeOwner, setStoreOwner] = useState("");

    const data = {
        contact:storeContact ,
        name:storeName ,
        type:storeType,
        address:storeAddress,
        owner:storeOwner
        }

    const addstore = async () => {
      try {
          await axios.post('http://localhost:3001/StoreAPI/stores',data ).then((res) => {
              
                if (res.data.status === 'success') {
                   console.log("ok")
                 }});
            
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add New Store</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Store Name
            <div className="formicon">
            <StorefrontIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setStoreName(event.target.value);
    }} type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setStoreContact(event.target.value);
    }} type="text" placeholder="Enter Contact" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Store Owner
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/> <div className="forma"><input onChange={(event)=> {
      setStoreOwner(event.target.value);
    }} type="text" placeholder="Enter Store Owner" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            
            <div className="form">
            <label for="namea"/>Type
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setStoreType(event.target.value);
    }} type="text" placeholder="Enter Type" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <RoomOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Address" onChange={(event)=> {
      setStoreAddress(event.target.value);
    }} /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addstore} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupStore;