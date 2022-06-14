import React from "react";
import "./Popupform.scss";
import axios from 'axios';
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function PopupFleet(props){
    const [Vname,setVMarque] = React.useState("");
    const [Vcategory,setVcategory] = React.useState("");
    const [Vmaintenance,setVmaintenance] = React.useState("");
    const [Vstatus,setVstatus] = React.useState("");
    const [Vmatricule,setVmatricule] = React.useState("");
    const [Vdriver,setdriver] = React.useState("");
    const dataV = {
        name:Vname,
        status:Vstatus ,
        Matricule:Vmatricule ,
        Maintenance:Vmaintenance,
        Category:Vcategory,
        driver:Vdriver,    
        }
        const addVehicule = async () => {
            try {
                await axios.post('https://qlogisticsapp.herokuapp.com/VehiculeAPI/vehicules',dataV ).then((res) => {

                        if (res.data.status === 'success') {    
                            console.log("ok")
                        }
                    }
                );
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            }
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
            <PersonOutlineIcon className="iconselectsearch" fontSize="small"/><div className="formselect"><div className="searchdrive"><input type="search" placeholder="choose"  className="inputsearch"/><select id="select" className="selectsearch" onChange={(event)=> {setdriver(event.target.value);}} >
                <option disabled selected>Choose Driver</option>
                <option value="Online">Online</option>
                
                </select>
                </div>
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