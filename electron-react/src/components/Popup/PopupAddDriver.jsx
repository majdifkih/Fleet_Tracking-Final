import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
function PopupDriver(props){
    const [Demail, setDemail] = useState("");
    const [Dname, setDname] = useState("");
    const [Dtelf, setDtelf] = useState("");
    const [Dpassword, setDpassword] = useState("");
    const [Daddress, setDaddress] = useState("");
 
    const dataD = {email:Demail,
        name:Dname ,
        telf:Dtelf ,
        address:Daddress,

        password:Dpassword
        }
        const addDriver = async () => {
            if (Dname === "" || Daddress === "" || Dtelf === "" || Demail === "" || Dpassword === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill all the fields'
                })
            }
            else {
            try {
                await axios.post('http://localhost:3001/DriverAPI/drivers',dataD ).then((res) => {

                        if (res.data.success) {    
                            props.setTrigger(!props.trigger);

                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your driver has been saved',
                                showConfirmButton: false,
                                timer: 1500
                                })
                            console.log("ok")
                        }
                    }
                );
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            }}
        }
         
    return (props.trigger) ? (
        <div className="popupa">
            <div className="popup-innera">
            <h3> Add New Driver</h3>
                <div className="formulera">
                <div className="formleft">
            <div className="form">
            <label for="namea"/>Driver Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
      setDname(event.target.value);
    }} placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Password
            <div className="formicon">
            <LockIcon className="icona" fontSize="small"/><div className="forma"><input type="password" onChange={(event)=> {
      setDpassword(event.target.value);
    }} placeholder="Enter Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea" />Email
            <div className="formicon">
            <MailOutlineIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setDemail(event.target.value);
    }} type="email" placeholder="Enter Email" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            
            <div className="form">
            <label for="namea"/>Address
            <div className="formicon">
            <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
      setDaddress(event.target.value);
    }} placeholder="Enter Address" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namea"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
      setDtelf(event.target.value);
    }} placeholder="Enter Number" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopa">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addDriver} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupDriver;