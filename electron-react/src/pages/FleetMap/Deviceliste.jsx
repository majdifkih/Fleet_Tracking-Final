import "./Deviceliste.scss";
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FullTable from "../../components/table/FullTable";
import truck from './truck.png'
function createData(name, status) {
  return { name, status };
}

const rows = [
  createData('IVECO','Offline'),
  createData('TOYOTA','Online'),
  createData('VOLVO','Online'),
  createData('OM','Online'),
  createData('SCANIA','Offline'),
  createData('RENAULT','Offline'),
  createData('NISSAN','Online'),
  createData('MISUBISHI','Online'),
  createData('MERCEDES','Online'),
  createData('RENAULT','Offline'),
  createData('VOLVO','Offline'),
  createData('MERCEDES','Online'),
  createData('NISSAN','Online'),
  createData('IVECO','Online'),
  createData('IVECO','Offline'),
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
<div className="buttonfleet">
<button className="addfleet" ><img src={truck} width="15" height="20"/>Add</button>
<button className="del" ><DeleteIcon fontSize="small"/>Delete</button>
</div>
</div>

 <FullTable rows={rows} type="oui" title="Livreur" stat="Online"/>
  </div>
  </div>
  
  );
}
export default DeviceListe
