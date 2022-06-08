import "./tableMap.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";


const List = (props) => {
  const {rows} = props;

  return (
    <TableContainer  className="tableMap" >
      
      <Table  aria-label="simple table" >
      
        <TableBody >
        
        
        
        
          {rows.map((row) => (
            <TableRow key={row.id} className="flex">
              
              <TableCell className="tableCell"><input type="radio" className="radio" name="appareilles"/>{row.name}</TableCell>
              
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
