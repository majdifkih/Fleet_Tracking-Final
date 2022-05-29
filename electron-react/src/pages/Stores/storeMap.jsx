import "./store.scss"
import store from './store.png'
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
import { useRef, useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableMap from "../../components/table/TableMap";
import SearchIcon from '@mui/icons-material/Search';

const center = { lat: 35.523916, lng: 11.030870 }

function Store() {

  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Baraka ",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "regular",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: " Hanout",
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
      customer: "Mahida shop",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "regular",
    },
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Hanout El homa",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "regular",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Magasin",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "NonREG",
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
    <div className="storemain">
      <div className="side"><Sidebar/></div>
    <div className="store">
    <Navbar/>
        <span className="titlemap">Stores</span>
        <div className="storecenter">
    <div className="storeleft">
        
    
      
          
     <Flex 
      direction='column'
      border={1}
      h='80vh'
      w='107%'

      p='10'
    >
      <div className="title">Map<br/><span>Stores</span></div>
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
          <Marker position={center} 
            icon ={
              {     
                   url:store,
                   scaledSize: new window.google.maps.Size(50,50)
                   
               }
               } 
        />
         
        </GoogleMap>
      </Box>
     
    </Flex>
    
    
    </div>
    <div className="liststore">
    <div className="storetabHead">
        <div className="storetab">
        <div className="listTitlestore">Stores <span>(20)</span></div>
        <a href="#">Voir tout</a>
        </div>
        <div className="input">        <div class="input-icone">
<input type="Search" placeholder="Search..."/>
<i><SearchIcon/></i>
</div></div>

        </div>
        <TableMap rows={rows}/>
        
        </div>
        </div>
     </div>
    </div>
   
  )
}

export default Store