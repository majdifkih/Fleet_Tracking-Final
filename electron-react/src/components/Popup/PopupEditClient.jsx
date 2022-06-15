import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import axios from 'axios';
import { useState } from "react";
function PopupEditClient(props){


  
    const [newclientStatus, setnewclientStatus] = useState("");
    const [newclientName, setnewclientName] = useState("");
    const [newclientAddress, setnewclientAddress] = useState("");
    const [newclientphone, setnewclientphone] = useState("");
    const updateClient = async(ID) => {
        const dataC = {name:newclientName,
            telf:newclientphone ,
            status:newclientStatus ,
            address:newclientAddress,
          
            }
       await axios.put(`https://qlogisticsapp.herokuapp.com/ClientAPI/clients?id=${ID}`,dataC).then((res) => {
                if (res.data.status === 'success') {
                  console.log("ok")
                }
                 }   ).catch((err) => {  console.log(err) }  )
          }
    
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Edit Client</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Client Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Name" onChange={(event)=> {
      setnewclientName(event.target.value);
    }} /></div>
            </div>
            </div>
            
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Address" onChange={(event)=> {
      setnewclientAddress(event.target.value);
    }} /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            
            <div className="form">
            <label for="namea"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Number" onChange={(event)=> {
      setnewclientphone(event.target.value);
    }} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Status
            <div className="formicon">
            <HelpOutlineOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {
      setnewclientStatus(event.target.value);
    }} >
                <option selected>Choose status</option>
                <option>regular</option>
                <option>NonReg</option>
                </select>
                </div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={()=> updateClient(props.id)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditClient;