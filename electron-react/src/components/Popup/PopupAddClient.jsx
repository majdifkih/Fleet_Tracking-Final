import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useState } from "react";
import axios from "axios";
function PopupClient(props){
    const [ClientNum, setClientNum] = useState("");
    const [NameStore, setNameStore] = useState("");
    const [clientStatus, setclientStatus] = useState("");
    const [clientName, setclientName] = useState("");
    const [clientAddress, setclientAddress] = useState("");
    const [clientphone, setclientphone] = useState("");
    const dataC = {name:clientName,
        telf:clientphone ,
        status:clientStatus ,
        address:clientAddress,
        idClient:ClientNum,
        storeName:NameStore
        }
        const addclient = async () => {
            try {
                await axios.post('http://localhost:3001/ClientAPI/clients',dataC ).then((res) => {
                    
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
            <label for="namea"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter ID" onChange={(event)=> {
      setClientNum(event.target.value);
    }}/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Store Name 
            <div className="formicon">
            <StorefrontIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Enter Store" onChange={(event)=> {
      setNameStore(event.target.value);
    }} /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Address" onChange={(event)=> {
      setclientAddress(event.target.value);
    }} /></div>
            </div>
            </div>
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
            <HelpOutlineOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Enter Status" onChange={(event)=> {
      setclientStatus(event.target.value);
    }} /></div>
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