import React from 'react'
import { useState } from 'react';
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
import "./FullTable.scss";
import engine from './engine.png'
import tires from './tires.png'
import oil from './oil.png'
import DeleteIcon from '@mui/icons-material/Delete';
import PopupEditFleet from '../Popup/PopupEditFleet';
import PopupEditClient from '../Popup/PopupEditClient';
import PopupEditDriver from '../Popup/PopupEditDriver';
import PopupEditProvider from '../Popup/PopupEditProvider';
import PopupEditUser from '../Popup/PopupEditUser';
import PopupEditStore from '../Popup/PopupEditStores';
import { Link } from 'react-router-dom';
import PopupInfoFleet from '../Popup/PopupInfoFleet';
import Popup from '../Popup/Popup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
function FullTable(props) {
    const {rows,type,title,stat,icon,pos,ink}=props;
    const [editPopupfleet, setEditPopupfleet] = useState(false);
    const [deletePopup, setdeletePopup] = useState(false);

    const [editPopupstore, setEditPopupstore] = useState(false);
    const [editPopupclient, setEditPopupclient] = useState(false);
    const [editPopupdriver, setEditPopupdriver] = useState(false);
    const [editPopupprovider, setEditPopupprovider] = useState(false);
    const [editPopupuser, setEditPopupuser] = useState(false);
    const [isem, setIsem] = useState("");
    const [isemF, setIsemF] = useState("");
    const [isemC, setIsemC] = useState("");
    const [isemD, setIsemD] = useState("");
    const [isemP, setIsemP] = useState("");
    const [isemU, setIsemU] = useState("");
    const [IDe, setIDe] = useState("");
    const [IDF, setIDF] = useState("");
    const [IDC, setIDC] = useState("");
    const [IDD, setIDD] = useState("");
    const [IDP, setIDP] = useState("");
    const [IDU, setIDU] = useState("");
    const [DID, setDID] = useState("");
    const [Dname, setDname] = useState("");
   const [infoPopup, setInfoPopup] = useState(false);
const [API, setAPI] = useState("false");
const [APIs, setAPIs] = useState("false");
switch(type){
    case "Devices":
        setIsem(true);
        setIsemF(false);
        setIsemC(false);
break;
case "Stores name":
    setIsem(false);
    setIsemF(false);}
   const Delete = (name,ID) => {
        setDID(ID);
        setDname(name);
        switch (title) {
          case 'Devices': 
          setAPI("Vehicule")
          setAPIs("vehicules")
            break;
          case 'Stores name':
            setAPI("Store")
            setAPIs("stores")

            break;
            case 'Clients name':
              setAPI("Client")
              setAPIs("clients")
            break;
            case 'Drivers name':
              setAPI("Driver")
              setAPIs("drivers")
            break;
            case 'Provider name':
              setAPI("Supplier")
              setAPIs("suppliers")
            break;
            case 'Users name':
              setAPI("User")
              setAPIs("users")
            break;
  
          default:
            console.log(`Sorry, we are out of ${title}.`);
        }
        setdeletePopup(true);

    }
    
    const [ROW, setROW] = useState([]);
    const Display = (R) => {
      setROW(R);
      setInfoPopup(true);
    }
    const Edit = (name,ID) => {
  

      switch (title) {
        case 'Devices': 
          setEditPopupfleet(true) ;
          setIsemF(name);
          setIDF(ID);
    
          console.log(IDF)
          break;
        case 'Stores name':
          setEditPopupstore(true) ;
          setIsem(name);
          setIDe(ID);
          break;
          case 'Clients name':
            setEditPopupclient(true) ;
          setIsemC(name);
          setIDC(ID);
          break;
          case 'Drivers name':
            setEditPopupdriver(true) ;
          setIsemD(name);
          setIDD(ID);
          break;
          case 'Provider name':
            setEditPopupprovider(true) ;
          setIsemP(name);
          setIDP(ID);
          break;
          case 'Users name':
            setEditPopupuser(true) ;
          setIsemU(name);
          setIDU(ID);
          break;

        default:
          console.log(`Sorry, we are out of ${title}.`);
      }
    }
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
  return (
    <div className="tabdevice">
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow className="row" >
                
              <StyledTableCell  align="left" ><input type="radio" name="fleet"  className="radio"/><label for="store">{title}</label></StyledTableCell>
              <StyledTableCell  align="left" className={`circle ${type}`}>Alerts</StyledTableCell>
              <StyledTableCell  align="right">{stat}?</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <StyledTableRow className="row" key={row.name}>
                <StyledTableCell width={"20%"} height={"5%"} component="th" scope="row"><input type="radio" name="fleet"  className="radio" /><label for="name">{row.name}</label>
                  
                </StyledTableCell>
                <StyledTableCell className='alerts 'align="left"><img 
                src={tires}
                className={`circle ${type}`}
                width="20"
                height="20"
                alt=""/>           
                <img 
                src={engine}
                className={`circle ${type}`}
                width="27"
                height="27"
                alt=""/>
                  <img 
                src={oil}
                className={`circle ${type}`}
                width="27"
                height="27"
                alt=""/>
                
                </StyledTableCell>
                <StyledTableCell className="line"  >
                  <div className={`icons ${icon}`}>
                  
                  <AddShoppingCartIcon className="material-icons"/>
                  <div className={`lik ${pos}`}>
                  <Link to={ink}><i class={`material-icons `}>pin_drop</i></Link>
                  </div>
                    <DeleteIcon className="material-icons" sx={{ fontSize: 27 }} onClick={()=> Delete(row.name,row._id)}/>
                  <i className="material-icons" onClick={()=>Edit(row.name,row._id)} >border_color</i>
                  <div className="popeditfleet"> 
                  <Popup trigger={deletePopup} setTrigger={setdeletePopup} id={DID} name={Dname} API={API} APIs={APIs}/>
                  <PopupEditFleet trigger={editPopupfleet} setTrigger={setEditPopupfleet} id={IDF} name={isemF}/>
                  <PopupEditUser trigger={editPopupuser} setTrigger={setEditPopupuser} id={IDU} name={isemU}/>
                  <PopupEditStore trigger={editPopupstore} setTrigger={setEditPopupstore} id={IDe} name={isem}/>
                  <PopupEditProvider trigger={editPopupprovider} setTrigger={setEditPopupprovider} id={IDP} name={isemP}/>
                  <PopupEditDriver trigger={editPopupdriver} setTrigger={setEditPopupdriver} id={IDD} name={isemD}/>
                  <PopupEditClient trigger={editPopupclient} setTrigger={setEditPopupclient} id={IDC} name={isemC}/>

                  </div>
                  <i class="material-icons" onClick={() => Display(row)}>info_outline</i>
                  <div className="popeditfleet"> 
                  <PopupInfoFleet trigger={infoPopup} setTrigger={setInfoPopup} data={ROW}/>
                  </div>
                  
                  </div>
                <div className={`reguliere ${row.status}`}>{row.status}</div></StyledTableCell>
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
  )
}

export default FullTable