import "./StoreTable.scss";
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FullTable from "../../components/table/FullTable";

function createData(name, status) {
  return { name, status };
}

const rows = [
  createData('Frozen yoghurt','NonReg'),
  createData('Ice cream sandwich','Reg'),
  createData('Eclair','Reg'),
  createData('Cupcake','Reg'),
  createData('Gingerbread','NonReg'),
  createData('Frozen yoghurt','NonReg'),
  createData('Ice cream sandwich','Reg'),
  createData('Eclair','Reg'),
  createData('Cupcake','Reg'),
  createData('Gingerbread','NonReg'),
  createData('Frozen yoghurt','NonReg'),
  createData('Ice cream sandwich','Reg'),
  createData('Eclair','Reg'),
  createData('Cupcake','Reg'),
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
<button className="del" ><DeleteIcon fontSize="small"/>Delete</button>

</div>

 <FullTable rows={rows} type="non" stat="status" title="nom de store"/>
  </div>
  </div>
  
  );
}
export default StoreTable
