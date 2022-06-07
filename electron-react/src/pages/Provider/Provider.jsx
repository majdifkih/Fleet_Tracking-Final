import "./Provider.scss";
import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import FullTableProvider from "../../components/table/FullTableProvider";
import PopupProvider from "../../components/Popup/PopupAddProvider";
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
 function ProviderTable() {
  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupprovider, setAddPopupprovider] = useState(false);
  return (

  <div className="Tabprovidermain">
    <div className="side"><Sidebar/></div>
    <div className="Tabprovider">
    <Navbar/>

<div className="headTabprovider">
      <div className="titleTabprovider">
      Provider
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<div className="butt">
<button className="add" onClick={() => setAddPopupprovider(true)}><PersonAddAltIcon fontSize="small"/>Add</button>
<div className="popprovider">
<PopupProvider trigger={addPopupprovider} setTrigger={setAddPopupprovider}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>

 <FullTableProvider rows={rows} type="non" stat="status" title="Providers Name"/>
  </div>
  </div>
  
  );
}
export default ProviderTable
