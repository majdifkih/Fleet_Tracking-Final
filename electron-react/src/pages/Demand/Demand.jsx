import "./Demand.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import FullTable from "../../components/table/FullTable";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";
import PopupAddDemand from "../../components/Popup/PopupAddDemand";
 function DemandTable() {
   const[API,setAPI]=useState('Supplier');
   const [APIs, setAPIs] = useState('suppliers');
  const [Providers, setProviders] = useState([]);
  const getProvider=()=>{
    axios.get("http://localhost:3001/SupplierAPI/suppliers").then(res=>{
      if(res.data.success){
        setProviders( res.data.existingPosts);
        
        console.log(Providers)
      }
    })
  } 
  useEffect(()=>{
    getProvider() 
  });  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupdemand, setAddPopupDemand] = useState(false);
  return (

  <div className="Tabdemandmain">
    <div className="side"><Sidebar/></div>
    <div className="Tabdemand">
    <Navbar/>

<div className="headTabdemand">
      <div className="titleTabdemand">
      Demands
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<div className="butt">
<button className="add" onClick={() => setAddPopupDemand(true)}><AddCircleOutlineIcon fontSize="small"/>Add</button>
<div className="popdemand">
<PopupAddDemand trigger={addPopupdemand} setTrigger={setAddPopupDemand}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup} API={API} APIs={APIs}/>
</div>
</div>

 <FullTable ink={""} pos={"non"} rows={Providers} type="non" stat="status" title="Demands"/>
  </div>
  </div>
  
  );
}
export default DemandTable
