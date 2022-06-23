import "./stockVehicle.scss";
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
import { useNavigate,useParams } from "react-router-dom";
import PopupAddStock from "../../components/Popup/PopupAddStock";
import PopupEditstock from "../../components/Popup/PopupEditstock";
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

 function StockVehicle() {
const [rows,setRows] = useState([]);
const {id}=useParams();

  const getVans = async (id) => {
    await axios.get(`https://qlogisticsapp.herokuapp.com/VanAPI/vans?id=${id}`)
    .then(res => {
      setRows(res.data.existingPosts[0].stock)
      console.log(res.data.existingPosts[0].stock);
      
    })
    .catch(err => {
      console.log(err);
    }
    );
  }
  const Delete = (id,pr) => {
    console.log(id);
    console.log(pr);
    axios.delete(`https://qlogisticsapp.herokuapp.com/VanAPI/vans?id=${id}&pd=${pr}`)
    .then(res => {
      console.log(res);
      getVans(id);
    }
    )
    .catch(err => {
      console.log(err);
    }
    );
  }

  React.useEffect(() => {
    getVans(id);
  });

   const [van, setVan] = useState([]);

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
  
  const [addPopupstockvehicle, setAddPopupstockvehicle] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const[BtnConfirmer,setBtnConfirmer] = useState(false);
  const[BtneditConfirmer,setBtnEditConfirmer] = useState(false);
  return (

  <div className="stockvehiclemain">
    <div className="side"><Sidebar/></div>
    <div className="stockvehicle">
    <Navbar/>

<div className="headstockvehicle">
      
<div className="titlestockvehicle">Vehicle Inventory</div>

</div>
<div className="buttondemand">
<button onClick={() => navigate(-1)} className="back"><ArrowBackIcon className="iconback"/></button>
 <button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<div className="popdel">
<Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
<PopupEditstock trigger={BtneditConfirmer} setTrigger={setBtnEditConfirmer}/>
</div>
</div>

  <div className="tabstockvehicle">
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
            ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow className="row" key={row.name}>
              <StyledTableCell  width={"20%"} height={"5%"} component="th" scope="row"><input type="radio" name="fleet" className="radio"/>
              
              <label for="name">{row.products.productName}</label>
               
              </StyledTableCell>
              <StyledTableCell className="quantity" >{row.quantity}</StyledTableCell>
              <StyledTableCell align="right"  ><i className="material-icons" onClick={() => setBtnEditConfirmer(true)}>border_color</i>
              <DeleteIcon className="material-icons" onClick={() => Delete(id,row._id)}/>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
          
        </TableBody>
        <TableFooter >
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 5, 10, { label: 'All', value: -1 }]}
              colSpan={7}
              count={rows?.length}
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
  
  <button className="addprod" onClick={() => setAddPopupstockvehicle(true)}><AddIcon/></button>
  <div className="popinvet">
<PopupAddStock trigger={addPopupstockvehicle} setTrigger={setAddPopupstockvehicle} id={id}/>
</div>
 
  
  </div>
  </div>
  
  );
}
export default StockVehicle
