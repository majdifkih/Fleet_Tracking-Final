import "./User.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import PopupUser from "../../components/Popup/PopupAddUser";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FullTable from "../../components/table/FullTable";
import axios from "axios";

 function UserTable() {
   const[API,setAPI]=useState("User");
    const [APIs, setAPIs] = useState('users');
  const [Users, setUsers] = useState([]);
  const getUser=()=>{
    axios.get("http://localhost:3001/UserAPI/users").then(res=>{
      if(res.data.success){
        setUsers( res.data.existingPosts);
        
        console.log(Users)
      }
    })
  } 
  useEffect(()=>{
    getUser() 
  });  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupuser, setAddPopupuser] = useState(false);
  return (

  <div className="Tabusermain">
    <div className="side"><Sidebar/></div>
    <div className="Tabuser">
    <Navbar/>

<div className="headTabuser">
      <div className="titleTabuser">
      Users
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<div className="butt">
<button className="add" onClick={() => setAddPopupuser(true)}><PersonAddAltIcon fontSize="small"/>Add</button>
<div className="popuser">
<PopupUser trigger={addPopupuser} setTrigger={setAddPopupuser}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup} API={API} APIs={APIs}/>
</div>
</div>

 <FullTable ink={""} rows={Users} type="non" stat="status" title="Users name" pos={"non"} add={"non"}/>
  </div>
  </div>
  
  );
}
export default UserTable
