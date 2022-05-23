import "./DevicesInfo.scss";
import engine from './engine.png'
import tires from './tires.png'
import oil from './oil.png'
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TabDevices from "./TabDevices";

import ListStoreDevice from "./ListStoreDevice";

 function DeviceInfo() {
  return (

  <div className="deviceinfomain">
    <div className="side"><Sidebar/></div>
    <div className="devicecenter">
      <Navbar/>
<div className="headfleet">
      <div className="titledeviceinfo">
      Fleet
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
<i><SearchIcon/></i></div>
</div>
<button className="del" ><DeleteIcon fontSize="small"/>Delete</button>

</div>
<div className="info">
  
<div className="deviceinfo" >
<div className="titleinfo" align="center">eeecccc</div>
<div className="infocenter">
<div className="carte" >
  <div className="cartetop" >
<div className="carteCenter" >
  <div className="carteTitle">Distance total</div>
  <div className="carteNumber">19802 Km</div>
  </div>
<div className="carteCenter">
<div className="carteTitle">Heures actif</div>
  <div className="carteNumber">1292 H</div>
</div>
</div>
<div div className="cartebottom">
<div className="carteCenter">
<div className="carteTitle">Averstissements</div>
  <div className="carteNumber"><img 
              src={tires}
              className="circle"
              width="28"
              height="28"
              alt=""/>           
              <img 
              src={engine}
              className="circle"
              width="33"
              height="33"
              alt=""/>
                <img 
              src={oil}
              className="circle"
              width="33"
              height="33"
              alt=""/>
              </div>
</div>
<div className="carteCenter">
<div className="carteTitle">Total revenu</div>
  <div className="carteNumber">543 DT</div>
</div>
</div>
</div>
<div className="ListStoreDevice">
<div className="storedevice">
        <div className="listTitl">Stores <span>(20)</span></div>
        <a href="#">Voir tout</a>
        
        </div>
<ListStoreDevice/>
</div>
</div>
  </div>
  <div className="tabdevic">
  <TabDevices/>
  </div>
  </div>
  </div>
  </div>
  
  );
}
export default DeviceInfo
