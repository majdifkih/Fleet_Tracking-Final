import "./DevicesInfo.scss";
import { useState,useEffect } from 'react';
import axios from "axios";
import engine from './engine.png'
import tires from './tires.png'
import oil from './oil.png'
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FullTable from "../../components/table/FullTable";
import TableMap from "../../components/table/TableMap";
import truck from './truck1.png'
import Popup from "../../components/Popup/Popup";
import PopupFleet from "../../components/Popup/PopupAddFleet";
import { Link } from "react-router-dom";
import { Visibility } from "@mui/icons-material";

 function DeviceInfo() {
  const [rowss, setRowss] = useState([])

  const getVehicule=()=>{
    axios.get("https://qlogisticsapp.herokuapp.com/VehiculeAPI/vehicules").then(res=>{
      if(res.data.success){
        setRowss( res.data.existingPosts);
        
        console.log(rowss)
      }
    })
  } 
  useEffect(()=>{
    getVehicule() 
  },[]);
  const [KM, setMileageV] = useState("0");
  const [NameV,setNameV] = useState("Vehicle Name");
  const [Hour,setHour] = useState("0");
  const [rows,setRows] = useState([]);
  const [Total,setTotal] = useState("0");
const [alertO,setAlertO] = useState(false);
const [alertT,setAlertT] = useState(false);
const [alertM,setAlertM] = useState(false);
  const getStore=()=>{
    axios.get("https://qlogisticsapp.herokuapp.com/StoreAPI/stores").then(res=>{
      if(res.data.success){
        setRows( res.data.existingPosts);
        
        console.log(rows)
      }
    })
  } 
  useEffect(()=>{
    getStore() 
  },[]);   
 
 
const [searchTerm,setSearchTerm]=useState("");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupfleet, setAddPopupfleet] = useState(false);
  return (

  <div className="deviceinfomain">
    <div className="side"><Sidebar/></div>
    <div className="devicecenter">
      <Navbar/>
<div className="headfleet">
      <div className="titledeviceinfo">
      Fleet
      <div class="input-icone"><input  onChange={(event)=>{
          setSearchTerm(event.target.value);
        }} type="Search" placeholder="Search..." className="rech"/>
<i><SearchIcon/></i></div>
</div>
<div className="buttondevice">
<button className="adddevice" onClick={() => setAddPopupfleet(true)} ><img src={truck} width="20" height="20" className="iconfleet"/>Add</button>
<div className="popfleetinfo">
<PopupFleet trigger={addPopupfleet} setTrigger={setAddPopupfleet}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>
<div className="info">
  
<div className="deviceinfo" >
<div className="titleinfo" align="center">{NameV}</div>
<div className="infocenter">
<div className="carte" >
  <div className="cartetop" >
<div className="carteCenter" >
  <div className="carteTitle">Distance total</div>
  <div className="carteNumber">{KM} Km</div>
  </div>
<div className="carteCenter">
<div className="carteTitle">Heures actif</div>
  <div className="carteNumber">{(Hour /60).toFixed(2)} H</div>
</div>
</div>
<div div className="cartebottom">
<div className="carteCenter">
<div className="carteTitle">Averstissements</div>
  <div className="carteNumber"><img 
  
  
              src={tires}
              className={`circle ${alertT}`}
              width="28"
              height="28"
              alt=""/>           
              <img 
              src={engine}
              className={`circle ${alertM}`}
              width="33"
              height="33"
              alt=""/>
                <img 
              src={oil}

              className={`circle ${alertO}`}
              width="33"
              height="33"
              alt=""/>
              </div>
</div>
<div className="carteCenter">
<div className="carteTitle">Total revenu</div>
  <div className="carteNumber">{Total} DT</div>
</div>
</div>
</div>
<div className="ListStoreDevice">
        <div className="headlistStore">
        <div className="storedevice">
        <div className="listTitl">Stores <span>(20)</span></div>
        <Link to="/storetable">See All</Link>
        </div>
        <div className="input">        <div class="input-icone">
<input type="Search" placeholder="Search..."/>
<i><SearchIcon/></i>
</div></div>

        </div>
<TableMap rows={rows.slice(0,3)} />
</div>
</div>
  </div>
  <div className="tabdevic">
  <FullTable search={searchTerm} ink={""} rows={rowss} type="oui" title="Livreur" stat="Online" icon="non" setNameV={setNameV} setKM={setMileageV} sethour={setHour} setFact={setTotal} setAlertM={setAlertM} setAlertO={setAlertO} setAlertT={setAlertT}/>
  </div>
  </div>
  </div>
  </div>
  
  );
}
export default DeviceInfo
