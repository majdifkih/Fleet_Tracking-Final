import "./Driver.scss";
import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import PopupDriver from "../../components/Popup/PopupAddDriver";
import FullTable from "../../components/table/FullTable";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import axios from "axios";
import { useEffect } from 'react';

 function DriverTable() {
  const [Drivers, setDrivers] = useState([]);
  const getDriver=()=>{
    axios.get("http://localhost:3001/DriverAPI/drivers").then(res=>{
      if(res.data.success){
        setDrivers( res.data.existingPosts);
        
        console.log(Drivers)
      }
    })
  } 
  useEffect(()=>{
    getDriver() 
  });  
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

 <FullTable ink={""} rows={Drivers} type="non" stat="status" title="Drivers name" pos={"non"} />
  </div>
  </div>
  
  );
}
export default DriverTable
