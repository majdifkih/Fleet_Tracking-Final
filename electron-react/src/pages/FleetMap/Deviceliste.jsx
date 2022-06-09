import "./Deviceliste.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FullTable from "../../components/table/FullTable";
import truck from './truck1.png'
import Popup from "../../components/Popup/Popup";
import PopupFleet from "../../components/Popup/PopupAddFleet";



 function DeviceListe() {
   
  const [vehicule, setVehicule] = useState([]);
  const getVehicule=()=>{
    axios.get("http://localhost:3001/VehiculeAPI/vehicules").then(res=>{
      if(res.data.success){
        setVehicule( res.data.existingPosts);
        
        console.log(vehicule)
      }
    })
  } 
  useEffect(()=>{
    getVehicule() 
  });  

 const [buttonPopup, setButtonPopup] = useState(false);
 const [addPopupfleet, setAddPopupfleet] = useState(false);
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
<button className="addfleet" onClick={() => setAddPopupfleet(true)}><img src={truck} width="20" height="20" className="iconfleet"/>Add</button>
<div className="popfleet"> 
<PopupFleet trigger={addPopupfleet} setTrigger={setAddPopupfleet}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
  

</div>
</div>

 <FullTable ink={"/fleet"} rows={vehicule} type="oui" title="Devices" stat="Online" />
  </div>
  </div>
  
  );
}
export default DeviceListe
