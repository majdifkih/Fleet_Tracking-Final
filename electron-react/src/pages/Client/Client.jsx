import "./Client.scss";
import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import FullTableClient from "../../components/table/FullTableClients";
import PopupClient from "../../components/Popup/PopupAddClient";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function createData(name, status) {
  return { name, status };
}

const rows = [
  createData('Baraka','NonReg'),
  createData('Hanout','regular'),
  createData('Carrefour','regular'),
  createData('Aotriya','regular'),
  createData('Hamza shop','NonReg'),
  createData('Nour','NonReg'),
  createData('Mahida shop','regular'),
  createData('Hanout El homa','regular'),
  createData('Magasin','regular'),
  createData('Store','NonReg'),
  createData('Magasin','NonReg'),
  createData('Magasin','regular'),
  createData('Magasin','regular'),
  createData('Magasin','regular'),
  createData('Gingerbread','NonReg'),
];
 function ClientTable() {
  
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
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
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

 <FullTableClient rows={rows} type="non" stat="status" title="Clients Name"/>
  </div>
  </div>
  
  );
}
export default ClientTable
