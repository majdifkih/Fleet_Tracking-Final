import React from "react";
import "./PopupAddDriver.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import { useState } from "react";
function PopupDriver(props){
    const [Demail, setDemail] = useState("");
    const [Dname, setDname] = useState("");
    const [Dtelf, setDtelf] = useState("");
    const [Dpassword, setDpassword] = useState("");
    const [Daddress, setDaddress] = useState("");
    const [idDriver, setidDriver] = useState("");
    const dataD = {email:Demail,
        name:Dname ,
        telf:Dtelf ,
        address:Daddress,
        idDriver:idDriver,
        password:Dpassword
        }
        const addDriver = async () => {
            try {
                await axios.post('http://localhost:3001/DriverAPI/drivers',dataD ).then((res) => {

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
        <div className="popupdriver">
            <div className="popup-innerdriver">
            <h3> Add New Driver</h3>
                <div className="formulerdriver">
                <div className="formleft">
            <div className="form">
            <label for="namedriver"/>Driver Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
      setDname(event.target.value);
    }} placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Password
            <div className="formicon">
            <LockIcon className="icona" fontSize="small"/><div className="forma"><input type="password" onChange={(event)=> {
      setDpassword(event.target.value);
    }} placeholder="Enter Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input onChange={(event)=> {
      setidDriver(event.target.value);
    }} type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="namedriver" />Hiring date
            <div className="formicon">
            <MailOutlineIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setDemail(event.target.value);
    }} type="email" placeholder="Enter Email" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Adress
            <div className="formicon">
            <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
      setDaddress(event.target.value);
    }} placeholder="Enter Address" /></div>
            </div>
            </div>
            <div className="form">
            <label for="namedriver"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
      setDtelf(event.target.value);
    }} placeholder="Enter Number" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopdriver">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addDriver} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupDriver;