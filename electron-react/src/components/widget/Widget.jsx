import "./widget.scss";
import AnnouncementIcon from '@mui/icons-material/Announcement';import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PhonelinkIcon from '@mui/icons-material/Phonelink';
const Widget = ({ type }) => {
  let data;

  //temporary
 const devices= 60;
 const orders=16;
 const alert=4;
  


  switch (type) {
    case "chauffer":
      data = {
        title: "Chauffeurs Actives",
        isMoney: false,
        link: "See all Chauffeurs Details",
        amount:devices,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "demande":
      data = {
        title: "Demandes",
        isMoney: false,
        link: "View all Demandes",
        amount:orders,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "Avertissements":
      data = {
        title: "Avertissements",
        isMoney: false,
        link: "View all Avertissements",
        amount:alert,
        icon: (
          <AnnouncementIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "apareil":
      data = {
        title: "Apareils Connectes",
        isMoney: false,
        link: "View all Devices details",
        amount:devices,
        icon: (
          <PhonelinkIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
