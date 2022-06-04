import "./FleetMap.scss"
import TableMap from "../../components/table/TableMap";
import { useState } from 'react';
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
const center = { lat: 35.523916, lng: 11.030870 }

function FleetMap() {
  const [addPopupMapfleet, setAddPopupMapfleet] = useState(false);
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
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
      customer: "OM",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Offline",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "NISSAN",
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
      customer: "IVECO",
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
      customer: "TOYOTA",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Online",
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
   
  ];

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
    <div className="fleetcenter">
    
        
    <div className="fleetleft">
        
    
      
          
     <Flex 
      direction='column'
      border={1}
      h='80vh'
      w='107%'

      p='10'
    >
      <div className="title">Map<br/><span>Drivers and Shops/Clients</span></div>
      <Box   h='90%' w='90%' p={4}>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={8}
          mapContainerStyle={{ width: '100%', height: '100%' }}
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
     
    </Flex>
    </div>
    
    
    <div className="listapp">
    <div className="headTab" >
        <div className="listTitleApp">
          <div className="listTitle" >Appareilles <span>(20)</span></div>
        <a href="zz">Voir tout</a>
  
        </div>
        <div className="tableCell"><p className="ajoutapp">Ajout une appareille</p>
        
        <div><AddBoxIcon  fontSize="small" color="action" className="ajouticon" onClick={() => setAddPopupMapfleet(true)} /></div>
        <div className="popfleet"> 
        <PopupFleet trigger={addPopupMapfleet} setTrigger={setAddPopupMapfleet}/>
        </div>
        </div>
        </div>
        
        <TableMap rows={rows}/>
        
        </div>
     </div>
     </div>
    </div>
  )
}

export default FleetMap