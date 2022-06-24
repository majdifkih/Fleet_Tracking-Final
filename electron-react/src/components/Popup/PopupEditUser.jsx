import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';
function PopupEditUser(props){


    const [newUemail, setnewUemail] = useState("");
    const [newUname, setnewUname] = useState("");
    const [newUtelf, setnewUtelf] = useState("");
    const [newUpassword, setnewUpassword] = useState("");
    const [newUaddress, setnewUaddress] = useState("");
   
    const updateUser = async(ID) => {
        const dataU = {email:newUemail,
            name:newUname ,
            telf:newUtelf ,
            address:newUaddress,
            password:newUpassword,
            }
            if (newUname === "" || newUaddress === "" || newUtelf === "" || newUemail === "" || newUpassword === "") {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill all the fields'
                })
            }
            else {
       await axios.put(`http://localhost:3001/UserAPI/users?id=${ID}`,dataU).then((res) => {
                if (res.data.success) {
                  props.setTrigger(!props.trigger);

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your user has been updated',
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
        <h3> Edit User</h3>
            <div className="formulera">
            <div className="formleft">
        <div className="form">
        <label for="namea"/>User Name
        <div className="formicon">
        <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
  setnewUname(event.target.value);
}} placeholder="Edit Name" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>Password
        <div className="formicon">
        <LockIcon className="icona" fontSize="small"/><div className="forma"><input type="password" onChange={(event)=> {
  setnewUpassword(event.target.value);
}} placeholder="Edit Password" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea" />Email
        <div className="formicon">
        <MailOutlineIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
  setnewUemail(event.target.value);
}} type="email" placeholder="Edit Email" /></div>
        </div>
        </div>
        </div>
        <div className="formright">

        
        <div className="form">
        <label for="namea"/>Address
        <div className="formicon">
        <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
  setnewUaddress(event.target.value);
}} placeholder="Edit Address" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>Phone Number
        <div className="formicon">
        <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
  setnewUtelf(event.target.value);
}} placeholder="Edit Number" /></div>
        </div>
        </div>
        </div>
        </div>
            <div className="buttonpopa">
            <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
            <button className="btna" onClick={()=> updateUser(props.id)} >EDIT</button>
            </div>
            
        </div>

    </div>
) : "";
}
export default PopupEditUser;