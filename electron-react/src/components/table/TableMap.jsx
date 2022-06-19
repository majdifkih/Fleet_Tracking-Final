import "./tableMap.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import axios from "axios";


const List = (props) => {
  const {rows,setlat,setlon} = props;
const getMap = (id) => {
  axios.get('http://localhost:3001/PositionAPI/positions?id=' + id).then(res => {
    if (res.data.success) {
      console.log(res.data.existingPositions);
      
    setlat(res.data.existingPositions.latitude);
    setlon(res.data.existingPositions.longitude);
    }
  },
  console.log(props.center) 
  )
}

  return (
    <TableContainer  className="tableMap" >
      
      <Table  aria-label="simple table" >
      
        <TableBody >
        
        
        
        
          {rows.map((row) => (
            <TableRow key={row._id} className="flex">
              
              <TableCell className="tableCell"><input type="radio" value={row._id} className="radio" name="appareilles" onChange={()=>getMap(row._id)}/>{row.name}</TableCell>
              
              <TableCell className="tableCell" align="right">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
