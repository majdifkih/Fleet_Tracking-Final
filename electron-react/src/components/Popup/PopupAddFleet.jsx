import React from "react";
import "./PopupAddFleet.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import axios from 'axios';
import { useState } from "react";
function PopupFleet(props){
    const [VehicleName, setVehicleName] = useState("");
    const [Matricule, setMatricule] = useState("");
    const [VehicleMarque, setVehicleMarque] = useState("");
    const [Category, setCategory] = useState("");
    const [CreationDate, setCreationDate] = useState("");
    const [Status, setStatus] = useState("");
    
    const dataVehicule = {name:VehicleName,
        status:Status ,
        Matricule:Matricule ,
        VehicleMarque:VehicleMarque,
        CreationDate:CreationDate,
        Category:Category
        }
    const addvehicule = async () => {
        try {
            await axios.post('http://localhost:3001/VehiculeAPI/vehicules',dataVehicule ).then((res) => {
                
                  if (res.data.status === 'success') {
                     console.log(res.data)
                   }});
              
          } catch (error) {
              if (error.response) {
                  console.log(error.response.data);
              }
          }
      }

    return (props.trigger) ? (
        <div className="popupfleet">
            <div className="popup-innerfleet">
            <h3> Add New Vehicle</h3>
                <div className="formulerfleet">
                <div className="formleft">
            <div className="form">
            <label for="namefleet"/>Vehicle Name
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input type="text" placeholder="Enter Name" onChange={(event)=> {
      setVehicleName(event.target.value);
    }} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namefleet"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input type="text" placeholder="Enter Matricule" onChange={(event)=> {
      setMatricule(event.target.value);
    }}/></div>
            </div>
            </div>
            <div className="form">
            <label for="namefleet"/>Vehicle marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="iconfleet" fontSize="small"/> <div className="formfleet"><input onChange={(event)=> {
      setVehicleMarque(event.target.value);
    }} type="text" placeholder="Enter Marque" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namefleet" />Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input onChange={(event)=> {
      setCategory(event.target.value);
    }} type="text" placeholder="Enter Category" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namefleet"/>Creation Date
            <div className="formicon">
            <CarCrashOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input onChange={(event)=> {
      setCreationDate(event.target.value);
    }} type="text" placeholder="Enter Date" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namefleet"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconfleet" fontSize="small"/><div className="formfleet"><input type="text" placeholder="Enter Status" onChange={(event)=> {
      setStatus(event.target.value);
    }}/></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopfleet">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddfleet" onClick={addvehicule} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupFleet;