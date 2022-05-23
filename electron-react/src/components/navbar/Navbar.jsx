import "./navbar.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";


const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          
         
        </div>
        <div className="items">
          
         
          
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          
          <div className="item">
            <span>Hamdi Ghassen</span>
          </div>
          <div className="item">
            <img
              src="%PUBLIC_URL%../../../photo.JPG"
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
