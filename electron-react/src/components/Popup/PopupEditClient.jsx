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


    const [newClientNum, setnewClientNum] = useState("");
    const [newNameStore, setnewNameStore] = useState("");
    const [newclientStatus, setnewclientStatus] = useState("");
    const [newclientName, setnewclientName] = useState("");
    const [newclientAddress, setnewclientAddress] = useState("");
    const [newclientphone, setnewclientphone] = useState("");
    const updateClient = async(ID) => {
        const dataC = {name:newclientName,
            telf:newclientphone ,
            status:newclientStatus ,
            address:newclientAddress,
            idClient:newClientNum,
            storeName:newNameStore
            }
       await axios.put(`http://localhost:3001/ClientAPI/clients?id=${ID}`,dataC).then((res) => {
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
            <label for="namea"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit ID" onChange={(event)=> {
      setnewClientNum(event.target.value);
    }}/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Store Name 
            <div className="formicon">
            <StorefrontIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Edit Store" onChange={(event)=> {
      setnewNameStore(event.target.value);
    }} /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Address" onChange={(event)=> {
      setnewclientAddress(event.target.value);
    }} /></div>
            </div>
            </div>
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
            <HelpOutlineOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Status" onChange={(event)=> {
      setnewclientStatus(event.target.value);
    }} /></div>
            <HelpOutlineOutlinedIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select">
                <option selected>Choose status</option>
                <option>Reguler</option>
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