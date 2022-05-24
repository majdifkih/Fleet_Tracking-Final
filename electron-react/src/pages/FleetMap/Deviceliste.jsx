import "./Deviceliste.scss";
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
  createData('Frozen yoghurt','Offline'),
  createData('Ice cream sandwich','Online'),
  createData('Eclair','Online'),
  createData('Cupcake','Online'),
  createData('Gingerbread','Offline'),
  createData('Frozen yoghurt','Offline'),
  createData('Ice cream sandwich','Online'),
  createData('Eclair','Online'),
  createData('Cupcake','Online'),
  createData('Gingerbread','Offline'),
  createData('Frozen yoghurt','Offline'),
  createData('Ice cream sandwich','Online'),
  createData('Eclair','Online'),
  createData('Cupcake','Online'),
  createData('Gingerbread','Offline'),
];
 function DeviceListe() {
   
 
  return (

  <div className="devicemain">
    <div className="side"><Sidebar/></div>
    <div className="device">
    <Navbar/>

<div className="headdevice">
      <div className="titledevice">
      Fleet
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<button className="del" ><DeleteIcon fontSize="small"/>Delete</button>

</div>

 <FullTable rows={rows} type="oui" title="Livreur" stat="Online"/>
  </div>
  </div>
  
  );
}
export default DeviceListe
