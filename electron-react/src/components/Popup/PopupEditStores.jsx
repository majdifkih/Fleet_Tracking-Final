import React from "react";
import "./Popupform.scss";
import { useState } from "react";
import axios from "axios";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Swal from "sweetalert2";
function PopupEditStore(props){

    const [newStoreName, setnewStoreName] = useState("");
    const [newStoreType, setnewStoreType] = useState("");
    const [newStoreContact, setnewStoreContact] = useState("");
    const [newStoreAddress, setnewStoreAddress] = useState("");
    const [newStoreOwner, setnewStoreOwner] = useState("");
    const updateStore = async(ID) => {
        const dataS = {
     
            contact:newStoreContact ,
            name:newStoreName ,
            type:newStoreType,
            address:newStoreAddress,
            owner:newStoreOwner
        }
        if (newStoreName === "" || newStoreAddress === "" || newStoreContact === "" || newStoreOwner === "" || newStoreType === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields'
            })
        }
        else {
       await axios.put(`https://qlogisticsapp.herokuapp.com/StoreAPI/stores?id=${ID}`,dataS).then((res) => {
                if (res.data.status === 'SUCCESS') {
                  props.setTrigger(!props.trigger);

                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your store has been updated',
                    showConfirmButton: false,
                    timer: 1500
                    })
                
                  console.log("ok")
                }
                 }   ).catch((err) => {  console.log(err) }  )}
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
            <StorefrontIcon className="icona" fontSize="small"/><div className="forma"><input type="text"  onChange={(event)=> {
      setnewStoreName(event.target.value);}} placeholder="Edit Name"/>
      </div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Contact
            <div className="formicon">
            <MailOutlineIcon   className="icona" fontSize="small"/><div className="forma"><input type="text"  onChange={(event)=> {
      setnewStoreContact(event.target.value); }}placeholder="Edit Contact"/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Store Owner
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/> <div className="forma"><input type="text"  onChange={(event)=> {
      setnewStoreOwner(event.target.value);}} placeholder="Edit Owner"/></div>
            </div>
            </div>
            </div>
            <div className="formright">
           
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
            <RoomOutlinedIcon className="icona" fontSize="small"/><div className="forma"><input type="text"  onChange={(event)=> {
      setnewStoreAddress(event.target.value); }}placeholder="Edit Adress"/></div>
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