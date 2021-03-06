import React from "react";
import "./Popupform.scss";
import axios from 'axios';
import Swal from "sweetalert2";
import { useEffect,useState } from 'react';
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
function PopupFleet(props){
    const [Vname,setVMarque] = React.useState("");
    const [Vcategory,setVcategory] = React.useState("");
    const [Vmaintenance,setVmaintenance] = React.useState("");
    const [Vstatus,setVstatus] = React.useState("");
    const [Vmatricule,setVmatricule] = React.useState("");
    const [Vdriver,setdriver] = React.useState("");
    const [Vdeviceid,setVdeviceid] = React.useState("");
    const dataV = {
        name:Vname,
        status:Vstatus ,
        Matricule:Vmatricule ,
        Maintenance:Vmaintenance,
        Category:Vcategory,
        Driver:Vdriver,    
        }
        const addVehicule = async () => {
            if
            (Vname === "" || Vcategory === "" || Vmaintenance === "" || Vstatus === "" || Vmatricule === "" || Vdriver === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill all the fields'
                    
                  })}
                  else {
             console.log(dataV)
            try {
                await axios.post('https://qlogisticsapp.herokuapp.com/VehiculeAPI/vehicules',dataV ).then((res) => {

                        if (res.data.success === true) {    
                            props.setTrigger(!props.trigger);

                            console.log("ok")
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your Vehicle has been saved',
                                showConfirmButton: false,
                                timer: 1500
                              })
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
            <h3> Add New Vehicle</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Vehicle Marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Marque" onChange={(event)=> {setVMarque(event.target.value);}} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {setVmatricule(event.target.value);}}  type="text" placeholder="Enter Matricule" /></div>
            </div>
            </div>
            
            <div className="form">
            <label for="namea"/>Driver
            <div className="formicon">
            <PersonOutlineIcon  className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setdriver(event.target.value);}} >
                <option disabled selected>Choose Driver</option>
                {props.Drivers?.map((val,key) => (
                <option value={val._id}>{val.name}</option>
                ))}
                </select>
                </div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namea" />Category
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect">
                <select id="select" className="selectcat"onChange={(event)=> {setVcategory(event.target.value);}} >
                <option disabled selected>Choose Category</option>
                <option value="Camion">Camion</option>
                <option value="Car">Car</option>
                </select>
                </div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Last maintenance
            <div className="formicon">
            <CarCrashOutlinedIcon className="icondate" fontSize="small"/><div className="formdate"><input type="date" className="inputdate" onChange={(event)=> {setVmaintenance(event.target.value);}} /></div>
            </div>
            </div>
           

            <div className="form">
            <label for="namea"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setVstatus(event.target.value);}} >
            
                <option disabled selected> Choose status</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                </select>
                </div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addVehicule} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupFleet;