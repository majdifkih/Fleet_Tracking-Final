import "./StoreTable.scss";
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FullTable from "../../components/table/FullTable";

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
<button className="add" ><AddBusinessIcon fontSize="small"/>Add</button>
<button className="del" ><DeleteIcon fontSize="small"/>Delete</button>
</div>
</div>

 <FullTable rows={rows} type="non" stat="status" title="nom de store"/>
  </div>
  </div>
  
  );
}
export default StoreTable
