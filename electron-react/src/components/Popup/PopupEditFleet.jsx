import React from "react";
import { useState } from "react";
import axios from "axios";
import "./PopupEditFleet.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function PopupEditFleet(props){
    const [newVehiculeName, setnewVehiculeName] = useState("");
    const [newVehiculeStatus, setnewVehiculeStatus] = useState("");
    const [newVehiculeMatricule, setnewVehiculeMatricule] = useState("");
    const [newVehicleMarque, setnewVehicleMarque] = useState("");
    const [newCreationDate, setnewCreationDate] = useState("");
    const [newVehiculeCategory, setnewVehiculeCategory] = useState("");
    const updateFleet = async(ID) => {
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
        <div className="popupeditfleet">
            <div className="popup-innereditfleet">
            <h3> Edit Vehicle</h3>
                <div className="formulereditfleet">
                <div className="formleft">
            <div className="form">
            <label for="nameeditfleet"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input onChange={(event)=> {
      setnewVehiculeName(event.target.value)}} type="text" placeholder={props.id} /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditfleet"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input onChange={(event)=> {
      setnewVehiculeMatricule(event.target.value)}} type="text" placeholder="Edit Matricule" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditfleet"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconeditfleet" fontSize="small"/> <div className="formeditfleet"><input onChange={(event)=> {
      setnewVehicleMarque(event.target.value)}} type="text" placeholder="Edit Marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameeditfleet"/>Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input type="text" onChange={(event)=> {
      setnewCreationDate(event.target.value)}} placeholder="Edit Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditfleet"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input onChange={(event)=> {
      setnewVehiculeCategory(event.target.value)}} type="text" placeholder="Edit Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameeditfleet"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconeditfleet" fontSize="small"/><div className="formeditfleet"><input onChange={(event)=> {
      setnewVehiculeStatus(event.target.value)}} type="text" placeholder="Edit Status" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopeditfleet">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddeditfleet" onClick={()=>updateFleet(props.id)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditFleet;