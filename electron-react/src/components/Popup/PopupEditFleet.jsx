import React from "react";
import "./Popupform.scss";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import axios from "axios";
import Swal from "sweetalert2";
import {useState } from "react";
function PopupEditFleet(props){
    const [EVname,setEVMarque] = useState("");
    const [EVcategory,setEVcategory] = useState("");
    const [EVmaintenance,setEVmaintenance] = useState("");
    const [EVstatus,setEVstatus] = useState("");
    const [EVmatricule,setEVmatricule] = useState("");
    const [EVdriver,setEdriver] = useState("");
    const [Vdeviceid,setVdeviceid] = React.useState("");
    const dataV = {
        name:EVname,
        status:EVstatus ,
        Matricule:EVmatricule ,
        Maintenance:EVmaintenance,
        Category:EVcategory,
        Driver:EVdriver,
        
    }
const editVehicule = async (ID) => {
   if (EVname === "" || EVcategory === "" || EVmaintenance === "" || EVstatus === "" || EVmatricule === "" || EVdriver === "") {
         Swal.fire({
                icon: 'error',  
                title: 'Oops...',
                text: 'Please fill all the fields'

                })}
                else {

   
    try {
        console.log(dataV)
        
        await axios.put(`http://localhost:3001/VehiculeAPI/vehicules?id=${ID}`,dataV ).then((res) => {
            if (res.data.status === 'SUCCESS') {
                props.setTrigger(!props.trigger);

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Vehicle has been updated',
                    showConfirmButton: false,
                    timer: 1500
                    })
                console.log("ok")
                props.setTrigger(!props.trigger);
            }
        }
    );
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }}

    // await axios.put(`http://localhost:3001/VehiculeAPI/vehicules?id=${ID}`,dataV ).then((res) => {
    //         console.log(dataV)
    //             if (res.data.status === 'SUCCESS') {
    //                 props.setTrigger(!props.trigger);
    //                 alert("Vehicule Updated!")
                    
    //             }
    //         }
    //     );
    
        
    
}

    
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Edit Vehicle</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Vehicle Marque
            <div className="formicon">
            <DirectionsCarFilledOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Marque" onChange={(event)=> {setEVMarque(event.target.value);}} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Matricule
            <div className="formicon">
            <EightMpOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {setEVmatricule(event.target.value);}} type="text" placeholder="Edit Matricule" /></div>
            </div>
            </div>
            
            <div className="form">
            <label for="namea"/>Driver
            <div className="formicon">
            <LocalOfferOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setEdriver(event.target.value);}}  >
                <option disabled selected>Choose Driver</option>
                {props.drivers.map((val,key) => (
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
            <LocalOfferOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="selectcat" onChange={(event)=> {setEVcategory(event.target.value);}}>
                <option selected disabled>Choose Category</option>
                <option value="Camion">Camion</option>
                <option value="Car">Car</option>
                </select>
                </div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Last maintenance
            <div className="formicon">
            <CarCrashOutlinedIcon className="icondate" fontSize="small"/><div className="formdate"><input onChange={(event)=> {setEVmaintenance(event.target.value);}} type="date" className="inputdate" /></div>
            </div>
            </div>

            <div className="form">
            <label for="namea"/>DeviceID
            <div className="formicon">
            <ShareLocationIcon className="icondate" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter ID" onChange={(event)=> {setVdeviceid(event.target.value);}} /></div>
            </div>
            </div>




            {/* <div className="form">
            <label for="namea"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setEVstatus(event.target.value);}} >
            
                <option disabled selected> Choose status</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                </select>
                </div>
            </div>
            </div> */}
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={() => editVehicule(props.id)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditFleet;