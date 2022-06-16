import "./InfoDemand.scss";
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
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import PopupConfirmer from "../../components/Popup/PopupConfirmeDemand";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PopupAddDemand from "../../components/Popup/PopupAddDemand";
import PopupEditDemand from "../../components/Popup/PopupEditDemand";
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
function createData(name, quantity) {
  return { name, quantity};
}

const rows = [
  createData('Chocotom','111','4.000DT','1.500'),
  createData('SAFIA eau','386','4.000DT','3.650'),
  createData('Saida biscuit','696','4.000DT','7.500'),
  createData('Maestro','672','4.000DT','4000'),
  createData('Saida','226','4.000DT','4.100'),
  createData('Crostina','172','4.000DT','2.700'),
  createData('Ice cream','147','4.000DT','1.800'),

];
 function InfoDemand() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate=useNavigate()
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const [addPopupinfodemand, setAddPopupinfodemand] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const[BtnConfirmer,setBtnConfirmer] = useState(false);
  const[BtneditConfirmer,setBtnEditConfirmer] = useState(false);
  const [productclient, setclient] = useState("");
  return (

  <div className="infodemandmain">
    <div className="side"><Sidebar/></div>
    <div className="infodemand">
    <Navbar/>

<div className="headinfodemand">
      
<div className="titleinfodemand">Demand Informations</div>

</div>
<button onClick={() => navigate(-1)} className="back"><ArrowBackIcon className="iconback"/></button>

<div className="form">
  <div className="selectinput">
            <label for="namea"/>Client
            <div className="formicon">
            <PersonOutlineIcon className="iconselect" fontSize="small"/><div className="formselect"><select id="select" className="select" onChange={(event)=> {setclient(event.target.value);}} >
                <option disabled selected>Choose Client</option>
                <option value="Online" className="optionclient">Online</option>
                
                </select>
                </div>
            </div>
            </div>
            <div className="buttondemand">

 <button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<div className="popdel">
<Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
<PopupEditDemand trigger={BtneditConfirmer} setTrigger={setBtnEditConfirmer}/>
</div>
</div>
            </div>
            
  <div className="tabinfodemand">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell   ><input type="radio" name="fleet" className="radio"/><label for="store">Product</label></StyledTableCell>
            <StyledTableCell className="quantity" align="center">Quantity</StyledTableCell>
            
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
              <StyledTableCell className="quantity" >{row.quantity}</StyledTableCell>
              <StyledTableCell align="right"  ><i className="material-icons" onClick={() => setBtnEditConfirmer(true)}>border_color</i>
              <DeleteIcon className="material-icons" onClick={() => setButtonPopup(true)}/>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
          
        </TableBody>
        <TableFooter >
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 5, 10, { label: 'All', value: -1 }]}
              colSpan={7}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows',
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
  
  <button className="addprod" onClick={() => setAddPopupinfodemand(true)}><AddIcon/></button>
  <div className="popinvet">
<PopupAddDemand trigger={addPopupinfodemand} setTrigger={setAddPopupinfodemand}/>
</div>
 
  <button className="confirmerPord" onClick={()=> setBtnConfirmer(true)}>Confirmer</button>
  <PopupConfirmer trigger={BtnConfirmer} setTrigger={setBtnConfirmer}/>
  </div>
  </div>
  
  );
}
export default InfoDemand
