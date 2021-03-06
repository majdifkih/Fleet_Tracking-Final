import "./Facture.scss";
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
import moment from "moment";
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
import { Link, useNavigate,useParams } from "react-router-dom";
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
function createData(name, date, status) {
  return { name, date, status};
}

const rows = [
  createData('E33','22/02/2022','Done','1.500'),
  createData('P99','22/02/2022','Incomplete','3.650'),
  createData('F11','22/02/2022','Done','7.500'),
  createData('K09','22/02/2022','Done'),
  createData('Y77','22/02/2022','Done'),

];
 function Facture() {
  const[searchTerm,setSearchTerm]=useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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
 const [rows, setRows] = useState([]);
  const [addPopupfacture, setAddPopupfacture] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const {id}=useParams()
const getFacture=()=>{
  axios.get(`https://qlogisticsapp.herokuapp.com/FactureAPI/factures?id=${id}&type=store`).then(res=>{
    if (res.data.success){
      console.log("ok")
      console.log(res.data.existingPosts)
      setRows(res.data.existingPosts)
    }})}
    React.useEffect
    (()=>{
      getFacture()
    }
    )
      const tofact = (id) => {
        navigate(`/infofacture/${id}`)
      }

      return (

  <div className="facturemain">
    <div className="side"><Sidebar/></div>
    <div className="facture">
    <Navbar/>

<div className="headfacture">
      <div className="titlefacture">
      Store
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech" onChange={(event)=>{
          setSearchTerm(event.target.value);
        }}/>
      <i><SearchIcon/></i></div>
</div>

</div>

<button onClick={() => navigate(-1)} className="back"><ArrowBackIcon className="iconback"/></button>



<div className="popinvete">
<PopupFacture trigger={addPopupfacture} setTrigger={setAddPopupfacture}/>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>


  <div className="tabfacture">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell ><label for="store">Total </label></StyledTableCell>
            <StyledTableCell  align="center" >Date</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
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
              <StyledTableCell  width={"20%"} height={"1%"} component="th" scope="row"><label for="name">{val.total}</label>
                
              </StyledTableCell>
              
              <StyledTableCell  align="center">{moment(val.date).format('YYYY/MM/DD')}</StyledTableCell>
              <StyledTableCell  align="center" className={`status ${val.status}`}>{val.status}</StyledTableCell>
              <StyledTableCell   align="right"><i class="material-icons" onClick={()=>tofact(val._id)}>info_outline</i></StyledTableCell>
              
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
  
  </div>
  </div>
  
  );
}
export default Facture
