import "./Demand.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import FullTable from "../../components/table/FullTable";
import PopupProvider from "../../components/Popup/PopupAddProvider";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";
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
  const [addPopupprovider, setAddPopupprovider] = useState(false);
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
<button className="add" onClick={() => setAddPopupprovider(true)}><AddCircleOutlineIcon fontSize="small"/>Add</button>
<div className="popdemand">
<PopupProvider trigger={addPopupprovider} setTrigger={setAddPopupprovider}/>
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
