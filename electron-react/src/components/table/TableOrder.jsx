import "./tableOrder.scss";
import "react-circular-progressbar/dist/styles.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { useEffect ,useState} from "react";
import axios from "axios";
const TableOrder = (props) => {
  // const rows = [
  //   {
  //     id: 1143155,
  //     product: "Acer Nitro 5",
  //     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "Mohamed Abas",
  //     date: "1 March",
  //     amount: 785,
  //     method: "Cash on Delivery",
  //     status: "Approved",
  //   },
  //   {
  //     id: 2235235,
  //     product: "Playstation 5",
  //     img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "Hassen tray Mahdia",
  //     date: "1 March",
  //     amount: 900,
  //     method: "Online Payment",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2342353,
  //     product: "Redragon S101",
  //     img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "supperette Baraka Mahdia",
  //     date: "1 March",
  //     amount: 35,
  //     method: "Cash on Delivery",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2342353,
  //     product: "Redragon S101",
  //     img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "El Hanout Hammamet",
  //     date: "1 March",
  //     amount: 35,
  //     method: "Cash on Delivery",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2342353,
  //     product: "Redragon S101",
  //     img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "Carrefour",
  //     date: "1 March",
  //     amount: 35,
  //     method: "Cash on Delivery",
  //     status: "Pending",
  //   },
    
  // ];
  
  const [rows, setRows] = useState([]);
  const [Tt, setTt] = useState(0);
  const getOrder = () => {
axios.get("https://qlogisticsapp.herokuapp.com/OrderAPI/orders").then(res=>{
  if(res.data.success){
    console.log(res.data.existingPosts)
    setRows(res.data.existingPosts)
    props.setT(res.data.existingPosts.length)
    setTt(res.data.existingPosts.length)
  }
}
)}

  useEffect(() => {
    getOrder()
  }
  )
  return (
    <div className="featured">
      
      
      <div className="title">   
      <div className="titleDema">Demands
        <span className="tolal">Total:{Tt}</span>
        </div>
        <Link to="/demand">See All</Link>
        </div>

      <TableContainer  className="tab">
      <Table  aria-label="simple table">
      
        <TableBody>
        
        
        
          {rows.map((row) => (
            <TableRow key={row.id} className="orderTable">
              
              <TableCell className="tableCell">{row.name.name}</TableCell>
              
              <TableCell className="tableCell" align="right">
              <a href="#" className="trait">process</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
      
    </div>
  );
};

export default TableOrder;
