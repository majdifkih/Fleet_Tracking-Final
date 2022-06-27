import "./navbar.scss";

import img from "./photo.jpg"

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";



const Navbar = (props) => {
  

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          
         
        </div>
        <div className="items">
          
         
          
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">{props.avert}</div>
          </div>
          
          <div className="item">
            <span>{localStorage.getItem("user")}</span>
          </div>
          <div className="item">
            <img
              src={img}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
