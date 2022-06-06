import React from "react";
import "./PopupEditProvider.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import axios from "axios";
import { useState } from "react";
function PopupEditProvider(props){
    const [newVehiculeName, setnewVehiculeName] = useState("");
    const [newVehiculeStatus, setnewVehiculeStatus] = useState("");
    const [newVehiculeMatricule, setnewVehiculeMatricule] = useState("");
    const [newVehicleMarque, setnewVehicleMarque] = useState("");
    const [newCreationDate, setnewCreationDate] = useState("");
    const [newVehiculeCategory, setnewVehiculeCategory] = useState("");
    const updateProvider = async(ID) => {
        const dataF = {
            name:newVehiculeName,
            status:newVehiculeStatus ,
            Matricule:newVehiculeMatricule ,
            VehicleMarque:newVehicleMarque,
            CreationDate:newCreationDate,
            Category:newVehiculeCategory
        }
       
 await axios.put(`http://localhost:3001/VehiculeAPI/vehicules?id=${ID}`,dataF).then((res) => {
                if (res.data.status === 'success') {
                    props.setTrigger(false);
                }
                 }   ).catch((err) => {  console.log(err) }  )
          }
    return (props.trigger) ? (
        <div className="popupeditprovider">
            <div className="popup-innereditprovider">
            <h3> Edit Provider</h3>
                <div className="formulereditprovider">
                <div className="formleft">
            <div className="for">
            <label for="nameeditprovider"/>Provider Name
            <div className="formicon">
            <PersonOutlineIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Name" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Contact" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="iconeditprovider" fontSize="small"/> <div className="formeditprovider"><input type="text" placeholder="Edit ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="for">
            <label for="nameeditprovider"/>Prodcut
            <div className="formicon">
            <Inventory2OutlinedIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Product" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Quantity" /></div>
            </div>
            </div>
            <div className="for">
            <label for="nameeditprovider"/>Product category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconeditprovider" fontSize="small"/><div className="formeditprovider"><input type="text" placeholder="Edit Category" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditprovider">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditprovider" onClick={() => props.setTrigger(true)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditProvider;