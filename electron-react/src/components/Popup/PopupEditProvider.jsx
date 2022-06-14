import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import axios from "axios";
import { useState } from "react";

function PopupEditProvider(props){
    const [newProviderAddress, setnewProviderAddress] = useState("");
    const [newNameprovider, setnewNameprovider] = useState("");
    const [newProviderPhone, setnewProviderPhone] = useState("");
    const [newProviderCategory, setnewProviderCategory] = useState("");
    const updateProvider = async(ID) => {
        const dataP = {
            name:newNameprovider ,
            telf:newProviderPhone ,
            productCategory:newProviderCategory,
            address:newProviderAddress,
            }
       await axios.put(`https://qlogisticsapp.herokuapp.com/SupplierAPI/suppliers?id=${ID}`,dataP).then((res) => {
                if (res.data.status === 'success') {
                  console.log("ok")
                }
                 }   ).catch((err) => {  console.log(err) }  )
          }
    
    return (props.trigger) ? (
        <div className="popupa">
        <div className="popup-innera">
        <h3> Edit Provider</h3>
            <div className="formulera">
            <div className="formleft">
        <div className="form">
        <label for="namea"/>Provider Name
        <div className="formicon">
        <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
  setnewNameprovider(event.target.value);
}} type="text" placeholder="edit Name" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>Phone Number
        <div className="formicon">
        <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
  setnewProviderPhone(event.target.value);
}} type="text" placeholder="edit Number" /></div>
        </div>
        </div>
        
        </div>
        <div className="formright">
        
       
        <div className="form">
        <label for="namea"/>Product category
        <div className="formicon">
        <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
  setnewProviderCategory(event.target.value);
}} type="text" placeholder="edit Category" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>Address
        <div className="formicon">
        <AlternateEmailIcon className="icona" fontSize="small"/> <div className="forma"><input onChange={(event)=> {
  setnewProviderAddress(event.target.value);
}} type="text" placeholder="edit Address" /></div>
        </div>
        </div>
        </div>
        </div>
            <div className="buttonpopa">
            <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
            <button className="btna" onClick={()=> updateProvider(props.id)} >Edit</button>
            </div>
            
        </div>

    </div>
) : "";
}
export default PopupEditProvider;