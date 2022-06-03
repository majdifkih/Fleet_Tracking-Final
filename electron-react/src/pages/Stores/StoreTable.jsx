import "./StoreTable.scss";
import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import Popup from "../../components/Popup/Popup";
import PopupStore from "../../components/Popup/PopupAddStore";
import FullTableStore from "../../components/table/FullTableStores";

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
 function StoreTable() {
  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupstore, setAddPopupstore] = useState(false);
  return (

  <div className="Tabstoremain">
    <div className="side"><Sidebar/></div>
    <div className="Tabstore">
    <Navbar/>

<div className="headTabstore">
      <div className="titleTabstore">
      Stores
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<div className="butt">
<button className="add" onClick={() => setAddPopupstore(true)}><AddBusinessIcon fontSize="small"/>Add</button>
<div className="popstore">
<PopupStore trigger={addPopupstore} setTrigger={setAddPopupstore}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>

 <FullTableStore rows={rows} type="non" stat="status" title="nom de store"/>
  </div>
  </div>
  
  );
}
export default StoreTable
