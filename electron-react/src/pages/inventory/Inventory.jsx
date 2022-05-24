import "./Inventory.scss";
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
  createData('Frozen yoghurt','12313313','111','4.000DT','123454','ELECTRONICS','Low'),
  createData('Ice cream sandwich','123321833','386','4.000DT','123234','ELECTRONICS','GOOD'),
  createData('Eclair','893298','696','4.000DT','1124255','ELECTRONICS','Low'),
  createData('Cupcake','213435711','672','4.000DT','1154644','ELECTRONICS','GOOD'),
  createData('Gingerbread','2564225','226','4.000DT','1154373','ELECTRONICS','Low'),
  createData('Frozen yoghurt','25672','172','4.000DT','116742','ELECTRONICS','GOOD'),
  createData('Ice cream sandwich','1445763454','147','4.000DT','11742','ELECTRONICS','Low'),
  createData('Eclair','1568934','391','4.000DT','115362','ELECTRONICS','GOOD'),
  createData('Cupcake','6323563','973','4.000DT','114662','ELECTRONICS','Low'),
  createData('Gingerbread','131563','537','4.000DT','11632','ELECTRONICS','GOOD'),
  createData('Frozen yoghurt','535633','876','4.000DT','1124536','ELECTRONICS','Low'),
  createData('Ice cream sandwich','65322','314','4.000DT','112462','ELECTRONICS','GOOD'),
  createData('Eclair','563432','555','4.000DT','1153673','ELECTRONICS','Low'),
  createData('Cupcake','143434','222','4.000DT','113572','ELECTRONICS','GOOD'),
  createData('Gingerbread','12342545','231','4.000DT','112265','ELECTRONICS','Low'),
];
 function InventoryListe() {
   
 
  return (

  <div className="inventorymain">
    <div className="side"><Sidebar/></div>
    <div className="inventory">
    <Navbar/>

<div className="headinventory">
      <div className="titleinventory">
      Inventory
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
export default InventoryListe
