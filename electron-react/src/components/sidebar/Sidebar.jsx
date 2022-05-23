import "./sidebar.css";
import { Link } from "react-router-dom";
import log from './qlog1.jpg'
import clock from './clock.jpg'
import watch from './watch.jpg'
import gps from './gps.jpg'
import user from './user.jpg'
import user1 from './user1.jpg'
import setting from './setting.jpg'
import logout from './logout.jpg'

const Sidebar = () => {
 
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
            <Link to="/" >
            <img
              src={clock}
              className="circle"
              width="20"
              height="20"
              alt=""/> Accueil
                </Link>
            </li>
            <li>
            <Link to="/devicelist" >
            <img
              src={watch}
              className="circle"
              width="20"
              height="20"
              alt=""/> Fleet and Devices
                </Link>
            </li>
            <li>
            <Link to="/fleet">
                   
            <img
              src={gps}
              className="circle"
              width="20"
              height="20"
              alt=""/> Fleet Tracking</Link>
               
            </li>
            <li>
            <Link to="/store" >
            <img
              src={user}
              className="circle"
              width="17"
              height="17"
              alt=""/> Stores
                </Link>
            </li>
            <li>
            <Link to="/storetable" >
            <img
              src={setting}
              className="circle"
              width="17"
              height="17"
              alt=""/> Inventory
                </Link>
            </li>
            <li>
              <Link to="/store" >
              <img
              src={user}
              className="circle"
              width="17"
              height="17"
              alt=""/> Clients
              </Link>
            </li>
            <li>
           
              <Link to="/deviceinfo" >
              <img
              src={user1}
              className="circle"
              width="17"
              height="17"
              alt=""/> Users
                </Link>
            </li>
           
            <li>
            <Link to="/logout" >
            <img
              src={logout}
              className="circle"
              width="20"
              height="20"
              alt=""/> Log out
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Sidebar;
