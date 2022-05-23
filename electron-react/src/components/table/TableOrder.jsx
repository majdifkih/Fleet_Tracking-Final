import "./tableOrder.scss";
import "react-circular-progressbar/dist/styles.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
const TableOrder = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    
  ];
  return (
    <div className="featured">
      <div className="top">
        
        
        
      </div>
      <div className="bottom">

      <div className="title">   
    <div className="listTitle">Demandes
    </div>
    <div className="voir">
     <a href="#">Voir tout</a>
  
    </div>
    </div>
    <span className="tolal">Total:60</span>

      <TableContainer  className="table1">
      <Table  aria-label="simple table">
      
        <TableBody>
        
        
        
          {rows.map((row) => (
            <TableRow key={row.id} className="orderTable">
              
              <TableCell className="tableCell">{row.customer}</TableCell>
              
              <TableCell className="tableCell" align="right">
                <span className="trait"><a href="#">Traiter</a></span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
      </div>
    </div>
  );
};

export default TableOrder;
