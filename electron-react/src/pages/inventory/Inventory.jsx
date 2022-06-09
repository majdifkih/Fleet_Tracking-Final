import "./Inventory.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
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
import Addinvetory from './add.png';
import Popup from "../../components/Popup/Popup";
import PopupInventory from "../../components/Popup/PopupAddInventory";
import PopupEditInventory from "../../components/Popup/PopupEditInventory";
import axios from "axios";

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

 function InventoryListe() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setrows] = useState([]);
  const [DID, setDID] = useState("");
    const [Dname, setDname] = useState("");
  const getProduct=()=>{
    axios.get("http://localhost:3001/ProductAPI/products").then(res=>{
      if(res.data.success){
        setrows( res.data.existingPosts);
        
        console.log(rows)
      }
    })
  } 
  useEffect(()=>{
    getProduct() 
  });  
const[NameI,setNameI]=useState("");
const [IDI,setIDI]=useState("");
  const Edit = (name,ID) => {
    setEditPopupinventory(true);
    setNameI(name);
    setIDI(ID);}
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

  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupinventory, setAddPopupinventory] = useState(false);
  const [editPopupinventory, setEditPopupinventory] = useState(false);
  const [API, setAPI] = useState("Product");
  const [APIs, setAPIs] = useState("products");
  const [deletePopup, setdeletePopup] = useState(false);
  const Delete = (name,ID) => {
    setDID(ID);
    setDname(name);
    setdeletePopup(true)}
  return (

  <div className="inventorymain">
    <div className="side"><Sidebar/></div>
    <div className="inventory">
    <Navbar/>

<div className="headinventory">
      <div className="titleinventory">
      Inventory
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<div className="buttoninvetory">
<button className="addinvetory" onClick={() => setAddPopupinventory(true)}><img src={Addinvetory} width="20" height="20"/>Add</button>
<div className="popinvet">
<PopupInventory trigger={addPopupinventory} setTrigger={setAddPopupinventory}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>

  <div className="tabinventory">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell   ><input type="radio" name="fleet" className="radio"/><label for="store">Inventory name</label></StyledTableCell>
            <StyledTableCell  >Barcode</StyledTableCell>
            <StyledTableCell  >Quantity</StyledTableCell>
            <StyledTableCell >Price</StyledTableCell>
            <StyledTableCell >Category</StyledTableCell>
            <StyledTableCell  className="stathead">Status?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow className="row" key={row.productName}>
              <StyledTableCell width={"15%"} height={"5%"} component="th" scope="row"><input type="radio" name="fleet" className="radio"/><label for="name">{row.productName}</label>
                
              </StyledTableCell>
              <StyledTableCell className="barcode" >{row.barCode}</StyledTableCell>
              <StyledTableCell className="quantity" >{row.productQuantity}</StyledTableCell>
              <StyledTableCell className="price" >{row.productPrice}</StyledTableCell>
              <StyledTableCell className="category">{row.category}</StyledTableCell>
              
              <StyledTableCell  className="tabEnd" >
                <div className="icons">
                <DeleteIcon className="material-icons" sx={{ fontSize: 27 }} onClick={()=> Delete(row.name,row._id)}/>
                <i className="material-icons"  onClick={()=>Edit(row.name,row._id)}>border_color</i>
                <div className="popeditfleet"> 
                <Popup trigger={deletePopup} setTrigger={setdeletePopup} id={DID} name={Dname} API={API} APIs={APIs}/>
                  <PopupEditInventory trigger={editPopupinventory} setTrigger={setEditPopupinventory} id={IDI} name={NameI}/>
                  </div>
                <i class="material-icons">info_outline</i>
                </div>
                </StyledTableCell>
                <StyledTableCell className="stat"  >
              <div className={`statuss ${row.status}`}>{row.status}</div>
              </StyledTableCell >
            </StyledTableRow>
          ))}
          
        </TableBody>
        <TableFooter >
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
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
  </div>
  </div>
  
  );

 }
export default InventoryListe
