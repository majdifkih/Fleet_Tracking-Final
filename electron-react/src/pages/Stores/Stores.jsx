import "./Stores.scss"
import store from './store.png'
import ListStore from "../../pages/Stores/ListStore";
import {
  Box,
  Flex,
  SkeletonText,
} from '@chakra-ui/react'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const center = { lat: 35.523916, lng: 11.030870 }

function Store() {
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
                   url:{store},
                   scaledSize: new window.google.maps.Size(50,50)
                   
               }
               } 
        />
         
        </GoogleMap>
      </Box>
     
    </Flex>
    
    
    </div>
    <div className="liststore">
        <div className="storetab">
        <div className="listTitlestore">Stores <span>(20)</span></div>
        <a href="#">Voir tout</a>
        
        </div>
        <ListStore/>
        
        </div>
        </div>
     </div>
    </div>
   
  )
}

export default Store