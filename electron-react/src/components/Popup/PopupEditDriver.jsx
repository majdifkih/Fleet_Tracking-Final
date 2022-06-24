import React from "react";
import "./Popupform.scss";
import Swal from "sweetalert2";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import { useState } from "react";
function PopupEditDriver(props){
    const [newDemail, setnewDemail] = useState("");
    const [newDname, setnewDname] = useState("");
    const [newDtelf, setnewDtelf] = useState("");
    const [newDpassword, setnewDpassword] = useState("");
    const [newDaddress, setnewDaddress] = useState("");
  
    const updateDriver = async(ID) => {
        const dataD = {email:newDemail,
            name:newDname ,
            telf:newDtelf ,
            address:newDaddress,
            password:newDpassword,
            }
            if (newDname === "" || newDaddress === "" || newDtelf === "" || newDemail === "" || newDpassword === "") {

                Swal.fire({

                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill all the fields'
                })
            }
            else {
       await axios.put(`http://localhost:3001/DriverAPI/drivers?id=${ID}`,dataD).then((res) => {
                if (res.data.success) {
                  props.setTrigger(!props.trigger);


                    Swal.fire({
                        

                        position: 'center',
                        icon: 'success',
                        title: 'Your driver has been updated',
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
        <h3> Edit Driver</h3>
            <div className="formulera">
            <div className="formleft">
        <div className="form">
        <label for="namea"/>Driver Name
        <div className="formicon">
        <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
  setnewDname(event.target.value);
}} placeholder="Edit Name" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>Password
        <div className="formicon">
        <LockIcon className="icona" fontSize="small"/><div className="forma"><input type="password" onChange={(event)=> {
  setnewDpassword(event.target.value);
}} placeholder="Edit Password" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea" />Email
        <div className="formicon">
        <MailOutlineIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
  setnewDemail(event.target.value);
}} type="email" placeholder="Edit Email" /></div>
        </div>
        </div>
        </div>
        <div className="formright">

       
        <div className="form">
        <label for="namea"/>Address
        <div className="formicon">
        <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
  setnewDaddress(event.target.value);
}} placeholder="Edit Address" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>Phone Number
        <div className="formicon">
        <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
  setnewDtelf(event.target.value);
}} placeholder="Edit Number" /></div>
        </div>
        </div>
        </div>
        </div>
            <div className="buttonpopa">
            <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
            <button className="btna" onClick={()=> updateDriver(props.id)} >EDIT</button>
            </div>
            
        </div>

    </div>
) : "";
}
export default PopupEditDriver;