import React from "react";
import "./Popupform.scss";
import { useState } from "react";
import axios from "axios";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
function PopupEditStore(props){

    const [newStoreNum, setnewStoreNum] = useState("");
    const [newStoreName, setnewStoreName] = useState("");
    const [newStoreType, setnewStoreType] = useState("");
    const [newStoreContact, setnewStoreContact] = useState("");
    const [newStoreAddress, setnewStoreAddress] = useState("");
    const [newStoreOwner, setnewStoreOwner] = useState("");
    const updateStore = async(ID) => {
        const dataS = {
            num:newStoreNum,
            contact:newStoreContact ,
            name:newStoreName ,
            type:newStoreType,
            address:newStoreAddress,
            owner:newStoreOwner
        }
       await axios.put(`http://localhost:3001/StoreAPI/stores?id=${ID}`,dataS).then((res) => {
                if (res.data.status === 'success') {
                  console.log("ok")
                }
                 }   ).catch((err) => {  console.log(err) }  )
          }
    

    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Edit Store</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Store Name
            <div className="formicon">
            <StorefrontIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder={props.name} onChange={(event)=> {
      setnewStoreName(event.target.value);
    }} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Contact" onChange={(event)=> {
      setnewStoreContact(event.target.value);
    }}/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Store Owner
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/> <div className="forma"><input type="text" placeholder="Edit  Owner" onChange={(event)=> {
      setnewStoreOwner(event.target.value);
    }} /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            <div className="form">
            <label for="namea"/>ID Number
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit ID Number" onChange={(event)=> {
      setnewStoreNum(event.target.value);
    }} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Type
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Type" onChange={(event)=> {
      setnewStoreType(event.target.value);
    }} /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <RoomOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text" placeholder="Edit Address"  onChange={(event)=> {
      setnewStoreAddress(event.target.value);
    }}/></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={()=> updateStore(props.id)} >Edit</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupEditStore;