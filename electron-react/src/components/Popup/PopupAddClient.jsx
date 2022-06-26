import React from "react";
import Swal from "sweetalert2";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useState } from "react";
import axios from "axios";
function PopupClient(props){

    const [clientStatus, setclientStatus] = useState("");
    const [clientName, setclientName] = useState("");
    const [clientAddress, setclientAddress] = useState("");
    const [clientphone, setclientphone] = useState("");
    const dataC = {
        name:clientName,
        telf:clientphone ,
        status:clientStatus ,
        address:clientAddress
       
        }
        const addclient = async () => {
            if (clientName === "" || clientAddress === "" || clientphone === "" || clientStatus === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill all the fields'
                      
                    })}
                    else {
            try {
                await axios.post('https://qlogisticsapp.herokuapp.com/ClientAPI/clients',dataC ).then((res) => {
                    
                      if (res.data.success) {
                        props.setTrigger(!props.trigger);
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your client has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                         console.log("ok")
                       }});
                  
              } catch (error) {
                  if (error.response) {
                      console.log(error.response.data);
                  }
              }}
          }
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add New Client</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Client Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Name" onChange={(event)=> {
      setclientName(event.target.value);
    }} /></div>
            </div>
            </div>
            
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma">
                <input type="text" placeholder="Enter Address" onChange={(event)=> {
      setclientAddress(event.target.value);
    }} /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            
            <div className="form">
            <label for="namea"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Number" onChange={(event)=> {
      setclientphone(event.target.value);
    }} /></div>
            </div>
            </div>

            <div className="form">
            <label for="namea"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {
      setclientStatus(event.target.value);}}>
                <option selected disabled>Choose status</option>
                <option value="regular">regular</option>
                <option value="NonReg">NonReg</option>
                </select>
                </div>
            </div>
            </div>
   
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addclient} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupClient;