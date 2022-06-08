import "./widget.scss";
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  
  switch (type) {
    case "demande":
      data = {
        title: "Demands",
        isMoney: false,
        
        amount:60,
        
      };
      break;
    case "active":
      data = {
        title: "Active Drivers",
        isMoney: false,
        
        amount:16,
        
          
      };
      break;
    case "avertissement":
      data = {
        title: "Warnings",
        isMoney: false,
       
        amount:4,
        
      };
      break;
    case "apareil":
      data = {
        title: "Connected Devices",
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
