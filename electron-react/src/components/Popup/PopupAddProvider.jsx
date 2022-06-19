import React from "react";
import "./Popupform.scss";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import axios from "axios";
import { useState } from "react";
function PopupProvider(props){
    const [ProviderAddress, setProviderAddress] = useState("");
    const [Nameprovider, setNameprovider] = useState("");
    const [ProviderPhone, setProviderPhone] = useState("");
    const [ProviderCategory, setProviderCategory] = useState("");

    const dataP = {
        name:Nameprovider ,
        telf:ProviderPhone ,
        productCategory:ProviderCategory,
        address:ProviderAddress
        }
        const addProvider = async () => {
            try {
                await axios.post('https://qlogisticsapp.herokuapp.com/SupplierAPI/suppliers',dataP ).then((res) => {
                    
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
            <h3> Add New Provider</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Provider Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setNameprovider(event.target.value);
    }} type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setProviderPhone(event.target.value);
    }} type="text" placeholder="Enter Number" /></div>
            </div>
            </div>
            
            </div>
            <div className="formright">
            
            <div className="form">
            <label for="namea"/>Product category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setProviderCategory(event.target.value);
    }} type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <AlternateEmailIcon className="icona" fontSize="small"/> <div className="forma"><input onChange={(event)=> {
      setProviderAddress(event.target.value);
    }} type="text" placeholder="Enter Address" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addProvider} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupProvider;