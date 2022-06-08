import "./StoreTable.scss";
import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import PopupStore from "../../components/Popup/PopupAddStore";
import FullTable from "../../components/table/FullTable";
import { useEffect } from 'react';
import axios from 'axios';

 function StoreTable() {

  const [store,setStore] = useState([]);

  const getStore=()=>{
    axios.get("http://localhost:3001/StoreAPI/stores").then(res=>{
      if(res.data.success){
        setStore( res.data.existingPosts);
        
        console.log(store)
      }
    })
  } 
  useEffect(()=>{
    getStore() 
  });   
  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupstore, setAddPopupstore] = useState(false);
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
<button className="add" onClick={() => setAddPopupstore(true)}><AddBusinessIcon fontSize="small"/>Add</button>
<div className="popstore">
<PopupStore trigger={addPopupstore} setTrigger={setAddPopupstore}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>

 <FullTable ink={"/store"} rows={store} type="non" stat="status" title="Stores name"  />

  </div>
  </div>
  
  );
}
export default StoreTable
