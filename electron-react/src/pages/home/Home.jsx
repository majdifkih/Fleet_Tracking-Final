import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useState, useEffect } from 'react';
import Widget from "../../components/widget/Widget";
import TableOrder from "../../components/table/TableOrder";
import Chart from "../../components/chart/Chart";
import TableMap from "../../components/table/TableMap";
import AddBoxIcon from '@mui/icons-material/AddBox';
import PopupFleet from "../../components/Popup/PopupAddFleet";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const{item,setItem}=useState("");
  const[T,setT]=useState(0)
  const [Drivers, setDrivers] = useState([]);
const [num, setNum] = useState(0);
  const getDriver=()=>{
    axios.get("https://qlogisticsapp.herokuapp.com/DriverAPI/drivers").then(res=>{
      if(res.data.success){
        setDrivers( res.data.existingPosts);
     
        console.log(Drivers)
       
      }
    })
  } 


  const [vehicule, setVehicule] = useState([]);
  const getVehicule=()=>{
    axios.get("https://qlogisticsapp.herokuapp.com/VehiculeAPI/vehicules").then(res=>{
      if(res.data.success){
        setVehicule( res.data.existingPosts);
        
        console.log(vehicule)

      var result=  vehicule.filter(item => item.alertOIL).length

    //  var   result = vehicule.filter(obj => {
    //       return obj.alertOIL === true;
    //     })
        console.log(result)
        //  const AA=(vehicule.map(item =>{ return item.alertOIL === true || item.alertTIERS===true}));
        //  console.log(AA)
        // setItem(AA)
        // {  vehicule.map(element, => { 
        //   if (element[i].alertOIL==true || element[i].alertTIERS==true) {
        //     console.log(element.alertOIL)
        //     setNum(num+1);
            
        //   }

        //   i++
        // })}
        
       
       
      }
    })
  } 
  useEffect(()=>{
    getVehicule() 
    getDriver()
  } ) ;
  
  const [addPopupfleet, setAddPopupfleet] = useState(false);
  return (
    
    <div className="home">
      <div className="side"><Sidebar/>
</div>
      <div className="homeContainer">
        <Navbar avert={vehicule.filter(item => item.alertOIL).length}/>
        <span className="over">Overview</span>

        <div className="body">
          <div className="leftt">
        <div className="widgets">
          <Widget type="demande" count={T} />
          <Widget type="active" count={Drivers.length} />
          <Widget type="avertissement" count={vehicule.filter(item => item.alertOIL).length} />
          <Widget type="apareil" count={vehicule.length} />
        </div>
        <div className="charts">
       
         <div className="char"> <Chart  title="Revenues" /></div>
        
        </div>
          </div>
 <div className="rightt">

        <div className="listContainer">
        <div className="headTab" >
        <div className="listTitleApp">
          <div className="listTitle" >Devices <span>({vehicule.length})</span></div>
        <Link to="/devicelist">See All</Link>

        </div>
        <div className="tableCell"><p className="ajoutapp">Add Device</p>
        
       <div> <AddBoxIcon  fontSize="small" color="action" className="ajouticon" onClick={() => setAddPopupfleet(true)} /></div>
        <div className="popfleet"> 
        <PopupFleet trigger={addPopupfleet} setTrigger={setAddPopupfleet}/>
        </div>
        </div>
        </div>
        <TableMap rows={vehicule.slice(0,3)} />
      </div>
      
      <div className="listContainer2">
        
      <TableOrder setT={setT}/>
      </div>
      </div>
        </div>

    
      </div>
    </div>
  );
};

export default Home;
