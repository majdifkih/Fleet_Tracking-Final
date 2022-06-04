import "./User.scss";
import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import PopupUser from "../../components/Popup/PopupAddUser";
import FullTableUser from "../../components/table/FullTableUsers";
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
 function UserTable() {
  
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
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>

 <FullTableUser rows={rows} type="non" stat="status" title="users name"/>
  </div>
  </div>
  
  );
}
export default UserTable
