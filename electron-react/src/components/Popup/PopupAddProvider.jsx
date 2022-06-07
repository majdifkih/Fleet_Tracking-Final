import React from "react";
import "./PopupAddProvider.scss";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from "axios";
import { useState } from "react";
function PopupProvider(props){
    const [ProviderNum, setProviderNum] = useState("");
    const [Nameprovider, setNameprovider] = useState("");
    const [ProviderPhone, setProviderPhone] = useState("");
    const [ProviderCategory, setProviderCategory] = useState("");

    const dataP = {num:ProviderNum,
        name:Nameprovider ,
        telf:ProviderPhone ,
        productCategory:ProviderCategory
        }
        const addProvider = async () => {
            try {
                await axios.post('http://localhost:3001/SupplierAPI/suppliers',dataP ).then((res) => {
                    
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
        <div className="popupprovider">
            <div className="popup-innerprovider">
            <h3> Add New Provider</h3>
                <div className="formulerprovider">
                <div className="formleft">
            <div className="for">
            <label for="nameprovider"/>Provider Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setNameprovider(event.target.value);
    }} type="text" placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>Contact
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setProviderPhone(event.target.value);
    }} type="text" placeholder="Enter Number" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="for">
            <label for="nameprovider"/>Product
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input onChange={(event)=> {
      setProviderNum(event.target.value);
    }} type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameprovider"/>Quantity
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setProviderCategory(event.target.value);
    }} type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopprovider">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addProvider} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupProvider;