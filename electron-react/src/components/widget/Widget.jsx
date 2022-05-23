import "./widget.scss";
import AnnouncementIcon from '@mui/icons-material/Announcement';import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PhonelinkIcon from '@mui/icons-material/Phonelink';
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  
  switch (type) {
    case "demande":
      data = {
        title: "Demandes",
        isMoney: false,
        
        amount:60,
        
      };
      break;
    case "active":
      data = {
        title: "Chauffeurs Actives",
        isMoney: false,
        
        amount:16,
        
          
      };
      break;
    case "avertissement":
      data = {
        title: "Avertissements",
        isMoney: false,
       
        amount:4,
        
      };
      break;
    case "apareil":
      data = {
        title: "Apareils Connectes",
        isMoney: false,
      
        amount:16,
        
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
        {data.amount}
        </span>
        
      </div>
      <div className="right">
        
        {data.icon}
      </div>
      


    </div>
  );
};

export default Widget;
