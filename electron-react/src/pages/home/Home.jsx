import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useState } from 'react';
import Widget from "../../components/widget/Widget";
import TableOrder from "../../components/table/TableOrder";
import Chart from "../../components/chart/Chart";
import TableMap from "../../components/table/TableMap";
import AddBoxIcon from '@mui/icons-material/AddBox';
import PopupFleet from "../../components/Popup/PopupAddFleet";
import { Link } from "react-router-dom";
const Home = () => {
  const rows = [
    {
      id: 1143155,
      product: "IVECO",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "IVECO",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "TOYOTA",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Offline",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "VOLVO",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Offline",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "SCANIA",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "NISSAN",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "MERCEDES",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Offline",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "RENAULT",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Offline",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
    },
  ];
  const [addPopupfleet, setAddPopupfleet] = useState(false);
  return (
    <div className="home">
      <div className="side"><Sidebar/>
</div>
      <div className="homeContainer">
        <Navbar/>
        <span className="over">Overview</span>

        <div className="body">
          <div className="leftt">
        <div className="widgets">
          <Widget type="demande" />
          <Widget type="active" />
          <Widget type="avertissement" />
          <Widget type="apareil" />
        </div>
        <div className="charts">
       
         <div className="char"> <Chart  title="Revenues  " /></div>
        
        </div>
          </div>
 <div className="rightt">

        <div className="listContainer">
        <div className="headTab" >
        <div className="listTitleApp">
          <div className="listTitle" >Appareilles <span>(20)</span></div>
        <Link to="/devicelist">Voir tout</Link>

        </div>
        <div className="tableCell"><p className="ajoutapp">Ajout une appareille</p>
        
       <div> <AddBoxIcon  fontSize="small" color="action" className="ajouticon" onClick={() => setAddPopupfleet(true)} /></div>
        <div className="popfleet"> 
        <PopupFleet trigger={addPopupfleet} setTrigger={setAddPopupfleet}/>
        </div>
        </div>
        </div>
        <TableMap rows={rows.slice(0,3)} />
      </div>
      
      <div className="listContainer2">
        
      <TableOrder />
      </div>
      </div>
        </div>

    
      </div>
    </div>
  );
};

export default Home;
