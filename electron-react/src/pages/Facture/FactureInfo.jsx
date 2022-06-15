import "./FactureInfo.scss";
import * as React from 'react';
import { useState } from 'react';
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
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableFooter from '@mui/material/TableFooter';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Popup from "../../components/Popup/Popup";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotesIcon from '@mui/icons-material/Notes';
import PopupFacture from "../../components/Popup/PopupAddFacture";
import { useNavigate } from "react-router-dom";
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
function createData(name, Quantity, Price, Total) {
  return { name, Quantity, Price, Total};
}

const rows = [
  createData('Chocotom','111','4.000DT','1.500'),
  createData('SAFIA eau','386','4.000DT','3.650'),
  createData('Saida biscuit','696','4.000DT','7.500'),
  createData('Maestro','672','4.000DT','4000'),
  createData('Saida','226','4.000DT','4.100'),
  
];
 function InfoFacture() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate=useNavigate()
  
  
  const [addPopupinfofacture, setAddPopupinfofacture] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  return (

  <div className="infofacturemain">
    <div className="side"><Sidebar/></div>
    <div className="infofacture">
    <Navbar/>

<div className="headinfofacture">
      <div className="titleinfofacture">
      Invoice
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>

</div>

<button onClick={() => navigate(-1)} className="back"><ArrowBackIcon className="iconback"/></button>



<div className="popinvet">
<PopupFacture trigger={addPopupinfofacture} setTrigger={setAddPopupinfofacture}/>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>


  <div className="tabinfofacture">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell   ><input type="radio" name="fleet"/><label for="store">Product</label></StyledTableCell>
            <StyledTableCell className="quantity" >Quantity</StyledTableCell>
            <StyledTableCell  className="total">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow className="row" key={row.name}>
              <StyledTableCell  width={"20%"} height={"5%"} component="th" scope="row"><input type="radio" name="fleet" className="radio"/><label for="name">{row.name}</label>
                
              </StyledTableCell>
              <StyledTableCell className="quantity" >{row.Quantity}</StyledTableCell>

              <StyledTableCell className="total" >{row.Total}</StyledTableCell>
              
            </StyledTableRow>
          ))}
          
        </TableBody>
       
      </Table>
    </TableContainer>
  </div>
  
  
  <div className="devis">
    <div className="deviscont">Sub Total:7.000 DT </div>
    <div className="deviscont">TVA:9% </div>
    <div className="deviscont">Total 7.630 DT</div>
  </div>

  </div>
  </div>
  
  );
}
export default InfoFacture
