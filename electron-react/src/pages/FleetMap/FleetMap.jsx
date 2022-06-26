import "./FleetMap.scss"
import TableMap from "../../components/table/TableMap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState,useEffect } from 'react';
import axios from "axios";
import {
  Box,
  Flex,
  SkeletonText,
} from '@chakra-ui/react'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  
} from '@react-google-maps/api'
import { useRef } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddBoxIcon from '@mui/icons-material/AddBox';
import PopupFleet from "../../components/Popup/PopupAddFleet";
import { Link, useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";


function FleetMap() {
  
  const {lat,lon}=useParams();
  const [lati,setLati] = useState(lat);
  const [lngi,setLngi] = useState(lon);

  const [addPopupMapfleet, setAddPopupMapfleet] = useState(false);
  const [rows, setRows] = useState([])
  const getVehicule=()=>{
    axios.get("https://qlogisticsapp.herokuapp.com/VehiculeAPI/vehicules").then(res=>{
      if(res.data.success){
        setRows( res.data.existingPosts);
        
        console.log(rows)
      }
    })
  } 
  const center = {
    lat: parseFloat(lati),
    lng: parseFloat(lngi)
  }
  useEffect(()=>{
    getVehicule() 
    const center = {lat:lati,lng:lngi};

    console.log(lati,lngi)
  },[]);
  let navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:"AIzaSyBetB4HIZtbvPihf1OFkUkZhRdtw9-5U8s",
    libraries: ['places'],
  })




  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }



  return (
    <div className="fleetmain">
      <div className="side"><Sidebar/></div>

      
    <div className="fleet">
    <Navbar/>
    <span className="titlefleet">Fleet and Devices</span>
   <button onClick={() => navigate(-1)} className="back"><ArrowBackIcon className="iconback"/></button>
  
    <div className="fleetcenter">
    
        
    <div className="fleetleft">
        
    
      
          
    
      <div className="title">Map<br/><span>Drivers and Shops/Clients</span></div>
      <Box   h='90%' w='90%' p={10}>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={8}
          mapContainerStyle={{ width: '110%', height: '102%' }}
          options={{
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
          }}
        >
          <Marker position={center} />
         
        </GoogleMap>
      </Box>
     
   
    </div>
    
    
    <div className="listapp">
    <div className="headTab" >
        <div className="listTitleApp">
          <div className="listTitle" > Devices<span>(20)</span></div>
        <Link to="/devicelist">See All</Link>
  
        </div>
        <div className="tableCell"><p className="ajoutapp">Add Device</p>
        
        <div><AddBoxIcon  fontSize="small" color="action" className="ajouticon" onClick={() => setAddPopupMapfleet(true)} /></div>
        <div className="popfleet"> 
        <PopupFleet trigger={addPopupMapfleet} setTrigger={setAddPopupMapfleet}/>
        </div>
        </div>
        </div>
        
        <TableMap rows={rows} setlat={setLati} setlon={setLngi} type={'fleet'}/>
        
        </div>
     </div>
     </div>
    </div>
  )
}

export default FleetMap