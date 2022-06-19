import "./sidebar.scss";
import { Link } from "react-router-dom";
import log from './qlog1.jpg';
import logout from "../../service/auth.service";
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import PopupLogout from "../Popup/PopupLogout";
import { useState } from "react";
const Sidebar = () => {
 const [buttonlogout ,setbuttonlogout]=useState(false);
  return (
    <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
        
          <ul className="sidebar-nav">
            <br />
            <br />
            &nbsp; &nbsp; &nbsp;
            <img
              src={log}
              className="circle"
              width="200"
              height="40"
              alt=""
            />
            <br />
            <br />
            <li>
            <Link to="/home" >
            <HomeIcon className="iconlist" fontSize="small"/> Accueil
                </Link>
            </li>
            <li>
            <Link to="/deviceinfo" >
           <LocalShippingIcon className="iconlist" fontSize="small"/> Fleet and Devices
                </Link>
            </li>
            <li>
            <Link to="/devicelist">
                   
            <GpsFixedIcon className="iconlist" fontSize="small"/> Fleet Tracking</Link>
               
            </li>
            <li>
            <Link to="/storetable" >
            <StoreIcon className="iconlist" fontSize="small"/> Stores
                </Link>
            </li>
            <li>
            <Link to="/inventory" >
            <InventoryIcon className="iconlist" fontSize="small"/> Inventory
                </Link>
            </li>
            <li>
           
           <Link to="/demand" >
           <SpatialAudioOffIcon className="iconlist" fontSize="small"/> Demands
             </Link>
         </li>
            <li>
           
           <Link to="/providerlist" >
           <PersonOutlineIcon className="iconlist" fontSize="small"/> Providers
             </Link>
         </li>
            <li>
              <Link to="/clients" >
              <GroupIcon className="iconlist" fontSize="small"/> Clients
              </Link>
            </li>
            <li>
           
              <Link to="/drivers" >
              <AirlineSeatReclineNormalIcon className="iconlist" fontSize="small"/> Drivers
                </Link>
            </li>
            <li>
           
              <Link to="/users" >
              <AccountCircleIcon className="iconlist" fontSize="small"/> Users
                </Link>
            </li>
            <li>
            <Link to="/delivery" >
            <CoPresentIcon className="iconlist" fontSize="small"/> Delivery
              </Link>
            </li>
            <li >
            <Link to="/logout" >
            <LogoutIcon className="iconlist" fontSize="small" /> Log out
              </Link>
            </li>
          

          </ul>
        </div>
    </div>
  );
};

export default Sidebar;
