import "./DevicesInfo.scss";
import { useState } from 'react';
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

 function DeviceInfo() {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Baraka",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "regular",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Hanout",
      date: "1 March",
      amount: 900,
      method: "REG Payment",
      status: "NonREG",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Carrefour",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "NonREG",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Aotriya",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "regular",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Hamza shop",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "regular",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Nour",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "NonREG",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "regular",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Mahida shop",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "regular",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Store",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "NonREG",
    },
   
 
  ];
  function createData(name, status) {
    return { name, status };
  }
  const rowss = [
    createData('IVECO','Offline'),
    createData('TOYOTA','Online'),
    createData('VOLVO','Online'),
    createData('OM','Online'),
    createData('SCANIA','Offline'),
    createData('RENAULT','Offline'),
    createData('NISSAN','Online'),
    createData('MISUBISHI','Online'),
    createData('MERCEDES','Online'),
    createData('Gingerbread','Offline'),
    createData('Frozen yoghurt','Offline'),
    createData('Ice cream sandwich','Online'),
    createData('Eclair','Online'),
    createData('Cupcake','Online'),
    createData('Gingerbread','Offline'),
  ];
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
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
<i><SearchIcon/></i></div>
</div>
<div className="buttondevice">
<button className="adddevice" onClick={() => setAddPopupfleet(true)} ><img src={truck} width="20" height="20" className="iconfleet"/>Add</button>
<PopupFleet trigger={addPopupfleet} setTrigger={setAddPopupfleet}/>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>
<div className="info">
  
<div className="deviceinfo" >
<div className="titleinfo" align="center">IVECO</div>
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
        <div className="headlistStore">
        <div className="storedevice">
        <div className="listTitl">Stores <span>(20)</span></div>
        <a href="#">Voir tout</a>
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
  <FullTable rows={rowss} type="oui" title="Livreur" stat="Online" icon="non" />
  </div>
  </div>
  </div>
  </div>
  
  );
}
export default DeviceInfo
