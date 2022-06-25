import "./Client.scss";
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import FullTable from "../../components/table/FullTable";
import PopupClient from "../../components/Popup/PopupAddClient";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import axios from "axios";
 function ClientTable() {

  const[searchTerm,setSearchTerm]=useState("");
  const [clients, setClients] = useState([]);
  const getClient=()=>{
    axios.get("https://qlogisticsapp.herokuapp.com/ClientAPI/clients").then(res=>{
      if(res.data.success){
        setClients( res.data.existingPosts);
        
        console.log(clients)
      }
    })
  } 
  useEffect(()=>{
    getClient() 
  },[]);   
  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupclient, setAddPopupclient] = useState(false);
  return (

  <div className="Tabclientmain">
    <div className="side"><Sidebar/></div>
    <div className="Tabclient">
    <Navbar/>

<div className="headTabclient">
      <div className="titleTabclient">
      Clients
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech" onChange={(event)=>{
          setSearchTerm(event.target.value);
        }}/>
      <i><SearchIcon/></i></div>
</div>
<div className="butt">
<button className="add" onClick={() => setAddPopupclient(true)}><PersonAddAltIcon fontSize="small"/>Add</button>
<div className="popclient">
<PopupClient trigger={addPopupclient} setTrigger={setAddPopupclient}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>

 <FullTable ink={""} rows={clients} icon={"oui"} type="non" stat="status" title="Clients name" pos={"non"} add={"non"} search={searchTerm}/>
  </div>
  </div>
  
  );
}
export default ClientTable
