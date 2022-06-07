import "./Driver.scss";
import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import PopupDriver from "../../components/Popup/PopupAddDriver";
import FullTableDriver from "../../components/table/FullTableDriver";
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
 function DriverTable() {
  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupdriver, setAddPopupdriver] = useState(false);
  return (

  <div className="Tabdrivermain">
    <div className="side"><Sidebar/></div>
    <div className="Tabdriver">
    <Navbar/>

<div className="headTabdriver">
      <div className="titleTabdriver">
      Drivers
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<div className="butt">
<button className="add" onClick={() => setAddPopupdriver(true)}><PersonAddAltIcon fontSize="small"/>Add</button>
<div className="popdriver">
<PopupDriver trigger={addPopupdriver} setTrigger={setAddPopupdriver}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>

 <FullTableDriver rows={rows} type="non" stat="status" title="Drivers Name"/>
  </div>
  </div>
  
  );
}
export default DriverTable
