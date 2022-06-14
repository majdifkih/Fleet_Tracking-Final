import "./Deliveryliste.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableFooter from '@mui/material/TableFooter';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import { useTheme } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Link } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import AddTaskIcon from '@mui/icons-material/AddTask';
import PopupDelivery from "../../components/Popup/PopupDelivery";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    borderBottom: "none",

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
   
  },
}));
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name,position, date, status) {
  return { name,position, date, status };
}

const rows = [
  createData('Baraka','Mahdia','22/3/2022','Incomplete'),
  createData('Hanout','Rcharcha','22/3/2022','Done'),
  createData('Carrefour','Ksour Essef','22/3/2022','Done'),
  createData('Mahida shop','Maloulech','22/3/2022','Done'),
  createData('Aotriya','Souasi','22/3/2022','Incomplete'),
  createData('Hanout lhoma','Monastir','22/3/2022','Incomplete'),
  createData('Magasin','Sousse','22/3/2022','Done'),
  createData('Store','Sfax','22/3/2022','Done'),
  createData('Drugstore','Rajich','22/3/2022','Done'),
  createData('Magasin','Mahdia','22/3/2022','Incomplete'),
  createData('Mahida drugstore','Monastir','22/3/2022','Incomplete'),
  createData('Store','Rajich','22/3/2022','Done'),
  createData('Mahida shop','Sousse','22/3/2022','Done'),
  createData('Hanout','Mahdia','22/3/2022','Done'),
  createData('Aotriya','Mahdia','22/3/2022','Incomplete'),
];
 function DeliveryListe() {
   
  const[searchTerm,setSearchTerm]=useState("");


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
const [API, setAPI] = useState("Delivery");
const [APIs, setAPIs] = useState("deliverys");
const [buttonPopup, setButtonPopup] = useState(false);
const [addPopupdelivery, setAddPopupdelivery] = useState(false);
const [DID, setDID] = useState("");
const [deletePopup, setdeletePopup] = useState(false);
    const [Dname, setDname] = useState("");
const Delete = (name,ID) => {
  setDID(ID);
  setDname(name);
  setdeletePopup(true)
}
  return (

  <div className="deliverymain">
    <div className="side"><Sidebar/></div>
    <div className="delivery">
    <Navbar/>

<div className="headdelivery">
      <div className="titledelivery">
      deliverys
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech" onChange={(event)=>{
          setSearchTerm(event.target.value);
        }}/>
      <i><SearchIcon/></i></div>
</div>
<div className="buttondelivery">
<button className="adddelivery" onClick={() => setAddPopupdelivery(true)}><AddTaskIcon fontSize="small"/>Add</button>
<div className="popdelivery"> 
<PopupDelivery trigger={addPopupdelivery} setTrigger={setAddPopupdelivery}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
  

</div>
</div>

<div className="tabdelivery">
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow className="row" >
                
              <StyledTableCell  align="left" ><input type="radio" name="fleet" className="radio"/><label for="store">Stores</label></StyledTableCell>
              <StyledTableCell  className="circle" >Positions</StyledTableCell>
              <StyledTableCell  className="circle" align="center">Date</StyledTableCell>
              <StyledTableCell align="center"  className="stat">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).filter((val)=>{
            if (searchTerm =="")
            {
              return val
            }
            else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((val,key) => (
              <StyledTableRow className="row" key={key}>
                <StyledTableCell width={"20%"} height={"5%"} component="th" scope="row"><input type="radio" name="fleet"  className="radio" /><label for="name">{val.name}</label>
                  
                </StyledTableCell>
                <StyledTableCell className ="circle">{val.position} </StyledTableCell>
                <StyledTableCell className ="circle" align="center">{val.date} </StyledTableCell>
                <StyledTableCell className="line"  >
                 <div className={`reguliere ${val.status}`}>{val.status}</div>
                 <DeleteIcon className="material-icons" sx={{ fontSize: 27 }} onClick={()=> Delete(val.name,val._id)}/>
                 <Popup trigger={deletePopup} setTrigger={setdeletePopup} id={DID} name={Dname} API={API} APIs={APIs}/>
                 </StyledTableCell>
                 </StyledTableRow>
            ))}
            
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  </div>
  </div>
  
  );
}
export default DeliveryListe
