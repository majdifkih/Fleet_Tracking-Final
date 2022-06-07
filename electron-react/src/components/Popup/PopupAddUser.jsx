import React from "react";
import "./PopupAddUser.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import { useState } from "react";
function PopupUser(props){
    const [Uemail, setUemail] = useState("");
    const [Uname, setUname] = useState("");
    const [Utelf, setUtelf] = useState("");
    const [Upassword, setUpassword] = useState("");
    const [Uaddress, setUaddress] = useState("");
    const [idUser, setidUser] = useState("");
    const dataU = {email:Uemail,
        name:Uname ,
        telf:Utelf ,
        address:Uaddress,
        idUser:idUser,
        password:Upassword
        }
        const addUser = async () => {
            try {
                await axios.post('http://localhost:3001/UserAPI/users',dataU ).then((res) => {

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
        <div className="popupuser">
            <div className="popup-inneruser">
            <h3> Add New User</h3>
                <div className="formuleruser">
                <div className="formleft">
            <div className="form">
            <label for="nameuser"/>User Name
            <div className="formicon">
            <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
      setUname(event.target.value);
    }} placeholder="Enter Name" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Password
            <div className="formicon">
            <LockIcon className="icona" fontSize="small"/><div className="forma"><input type="password" onChange={(event)=> {
      setUpassword(event.target.value);
    }} placeholder="Enter Password" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>ID
            <div className="formicon">
            <BadgeOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input onChange={(event)=> {
      setidUser(event.target.value);
    }} type="text" placeholder="Enter ID" /></div>
            </div>
            </div>
            </div>
            <div className="formright">

            <div className="form">
            <label for="nameuser" />Hiring date
            <div className="formicon">
            <MailOutlineIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
      setUemail(event.target.value);
    }} type="email" placeholder="Enter Email" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Adress
            <div className="formicon">
            <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
      setUaddress(event.target.value);
    }} placeholder="Enter Address" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameuser"/>Phone Number
            <div className="formicon">
            <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
      setUtelf(event.target.value);
    }} placeholder="Enter Number" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopuser">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btna" onClick={addUser} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupUser;