import React, { useEffect } from 'react'
import { useState } from 'react';
import moment from 'moment';
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
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { SettingsRemoteOutlined, Visibility } from '@mui/icons-material';
import PopupInfoFleet from '../Popup/PopupInfoFleet';
import PopupInfoClient from '../Popup/PopupInfoClient';
import PopupInfoDriver from '../Popup/PopupInfoDriver';
import PopupInfoProvider from '../Popup/PopupInfoProvider';
import PopupInfoUser from '../Popup/PopupInfoUser';
import PopupInfoStore from '../Popup/PopupInfoStore';
import PopupInfoInventory from '../Popup/PopupInfoInventory';
import { position } from '@chakra-ui/react';
import axios from 'axios';
import PopupAlert from '../Popup/AlertVehicle/PopupAlert';
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
  const {Drivers} = props;
  const Position =(id,title) => {
    switch(title){
      case "Devices":
        axios.get(`https://qlogisticsapp.herokuapp.com/PositionAPI/positions?id=${id}`).then(res => {
          console.log(res.data)
          window.location.href = `#/fleet/${res.data.existingPositions.latitude}/${res.data.existingPositions.longitude}`
          
        }
        )
  break;
  case "Stores name":
    axios.get(`https://qlogisticsapp.herokuapp.com/StoreAPI/single?id=${id}`).then(res => {
      console.log(res.data)
      window.location.href = `#/store/${res.data.existingPositions.positionStore.latitude}/${res.data.existingPositions.positionStore.longitude}`

      
    })
  }}

  const today= new Date();
  const calcDate = (date1, date2)=>{
    if (title==="Devices"){
      /*
      * calcDate() : Calculates the difference between two dates
      * @date1 : "First Date in the format M-D-Y"
      * @date2 : "Second Date in the format M-D-Y"
      * return : Array
      */
      //Initiate date object
      const dt_date1 = new Date(date1);
      const dt_date2= new Date(date2);
      console.log(dt_date1,"dt_date1")
      console.log(dt_date2,"dt_date2")
      //Get the Timestamp
      var date1 =dt_date1.getTime();
      var date2 = dt_date2.getTime();
      
      var calc;
      //Check which timestamp is greater
      if (date1 > date2){
          calc = new Date(date1 - date2) ;
      }else{
          calc = new Date(date2 - date1) ;
      }
      //Retrieve the date, month and year
      var calcFormatTmp = calc.getDate() + '-' + (calc.getMonth()+1)+ '-'+calc.getFullYear();
      //Convert to an array and store
      var calcFormat = calcFormatTmp.split("-");
      //Subtract each member of our array from the default date
      var days_passed = parseInt(Math.abs(calcFormat[0]) - 1);
      var months_passed = parseInt(Math.abs(calcFormat[1]) - 1);
      var years_passed = parseInt(Math.abs(calcFormat[2] -   1970));
      
      //Set up custom text
      const yrsTxt =["year", "years"];
      const mnthsTxt = ["month", "months"];
      const daysTxt = ["day", "days"]; 
      
      //Convert to days and sum together
      var total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;
      
      //display result with custom text
      const result = ((years_passed == 1) ? years_passed+ ' '+ yrsTxt[0] + ' ' : (years_passed > 1 )  ? 
      years_passed+ ' ' + yrsTxt[1] + ' ' : '') + 
      ((months_passed == 1) ? months_passed+ ' ' + mnthsTxt[0] :  (months_passed > 1) ? 
       months_passed+ ' ' + mnthsTxt[1] + ' ' : '') +
      ((days_passed == 1) ? days_passed+ ' ' + daysTxt[0] : (days_passed > 1) ? 
      days_passed+ ' ' + daysTxt[1] : '' );
      
      //Build our return value
      const retval = {
          "total_days" : Math.round(total_days),
          "result" :  result
      }
      //return the result
      console.log(retval);
      if (retval.total_days > 90){
        return true}
        else{
          return false
        }}
      }
  
      useEffect(() => {
        console.log(rows)
      
      }, [])

    const {rows,type,title,stat,icon,pos,ink,add,search}=props;
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
const oilP="oil";
const tiers="tiers";
const maint="maint";
const [IDA, setIDA] = useState("");
const [ALERTF, setALERTF] = useState("");
const alertPop = (id,alert) => {
switch(alert){
  case oilP:
    setALERTF("OIL");
  break;
  case tiers:
    setALERTF("TIERS");
  break;
  case maint:
    setALERTF("MAINTENANCE");
  break;
}
setIDA(id);
  setalertbuttonPopup(true);
}


// const [URL, SetURL] = useState("h");
const url = (title,id) => {
  console.log(title);
  (title==="Stores name") ? navigate(`/facture/${id}`):window.location.reload();
  // if(r==="fleet"){
  //   setAPI("/api/fleet/");
  // }
  // else 
}
  // switch (r) {
  
  //   case "Store name":
  //     window.location.href = "/q/facture/";
  //     break;

  // }
switch(type){
    case "Devices":
        setIsem(true);
        setIsemF(false);
        setIsemC(false);
break;
case "Stores name":
    setIsem(false);
    setIsemF(false);
    
  }
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
            case 'Demands':
              setAPI("Order")
  
              setAPIs("orders")
            break;
  
          default:
            console.log(`Sorry, we are out of ${title}.`);
        }
        setdeletePopup(true);

    }
   ;
 
    const [InfoPopupFleet, setInfoPopupFleet] = useState(false);
    const [InfoPopupStore, setInfoPopupStore] = useState(false);
    const [InfoPopupClient, setInfoPopupClient] = useState(false);
    const [InfoPopupDriver, setInfoPopupDriver] = useState(false);
    const [InfoPopupProvider, setInfoPopupProvider] = useState(false);
    const [InfoPopupUser, setInfoPopupUser] = useState(false);
    const [alertbuttonPopup, setalertbuttonPopup] = useState(false);
   
  
    const [ROW, setROW] = useState([]);
    const Display = (R) => {
      setROW(R);
      switch (title) {
        case 'Devices': 
        setInfoPopupFleet(true) ;

          break;
        case 'Stores name':
          setInfoPopupStore(true) ;

          break;
          case 'Clients name':
            setInfoPopupClient(true) ;
          break;
          case 'Drivers name':
            setInfoPopupDriver(true) ;
          break;
          case 'Provider name':
            setInfoPopupProvider(true) ;
          break;
          case 'Users name':
            setInfoPopupUser(true) ;
          break;

        default:
          console.log(`Sorry, we are out of ${title}.`);
      }
    }
    let acc=0;
    const getINFO = (name,mileage,id,h,alertOIL,alertTIERS,alertMAINT) => {
      if (title==="Livreur") {
        props.setNameV(name)
      props.setKM(mileage)
      props.sethour(h)
props.alertO(alertOIL)
props.alertT(alertTIERS)
props.alertM(alertMAINT)
      axios.get(`https://qlogisticsapp.herokuapp.com/FactureAPI/factures?id=${id}&type=vehicule`).then(res => {
        console.log(res.data.existingPosts);
        props.setFact((res.data.existingPosts.reduce((a,v) =>  a = a + v.total , 0 )));
        
          
        // props.setFactures(res.data.existingPosts);
      });

        axios.get(`https://qlogisticsapp.herokuapp.com/PositionAPI/heures?id=${id}`).then(res => {
          console.log(res.data);
          props.setDriver(res.data);
        }
        )
      }}
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
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const navigate=useNavigate();
  
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
              ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            )?.filter((val)=>{
            if (search =="")
            {
              return val
            }
            else if(val.name.toLowerCase().includes(search.toLowerCase())){
              return val
            }
          }).map((val,key) => (
              <StyledTableRow className="row" key={key}>
                <StyledTableCell width={"20%"} height={"5%"} component="th" scope="row"><input type="radio" name="fleet" onChange={()=>getINFO(val.name,val.Mileage,val._id,val.hours  , val.alertOIL, val.alertTIRES,val.Maintenance)} className="radio" /><label for="name">{val.name}</label>
                  
                </StyledTableCell>
                <StyledTableCell className='alerts 'align="left"><img 
                src={tires}
                className={val.alertTIRES ? "circle oui":"circle non"}

                width="20"
                height="20"
                alt="" onClick={() => alertPop(val._id,tiers) }/>           
                <img 
                src={engine}
                className={calcDate(moment(val.Maintenance).format("MM-DD-YYYY"),moment(today).format("MM-DD-YYYY")) ?`circle oui`:`circle non`}
                width="27"
                height="27"
                alt="" onClick={() => alertPop(val._id,maint)}/>
                  <img 
                src={oil}
                className={val.alertOIL ? "circle oui":"circle non"}
                width="27"
                height="27"
                alt="" onClick={() => alertPop(val._id,oilP)}/>
                
                </StyledTableCell>
                <StyledTableCell className="line"  >
                  <div className={`icons ${icon}`}>
                  <div className={`shop ${add}`}>
                  <Link to={`/stockvehicle/${val._id}`}><AddShoppingCartIcon className="material-icons" /></Link>
                  </div>
                  <div className={`lik ${pos}`}>
                  <i onClick={()=>Position(val._id,title)} class={`material-icons `}>pin_drop</i>
                  </div>
                    <DeleteIcon className="material-icons" sx={{ fontSize: 27 }} onClick={()=> Delete(val.name,val._id)}/>
                  <i className="material-icons" onClick={()=>Edit(val.name,val._id)} >border_color</i>
                  <div className="popeditfleet"> 
                  <Popup trigger={deletePopup} setTrigger={setdeletePopup} id={DID} name={Dname} API={API} APIs={APIs}/>
                  <PopupEditFleet trigger={editPopupfleet} setTrigger={setEditPopupfleet} id={IDF} name={isemF} drivers={Drivers}/>
                  <PopupEditUser trigger={editPopupuser} setTrigger={setEditPopupuser} id={IDU} name={isemU}/>
                  <PopupEditStore trigger={editPopupstore} setTrigger={setEditPopupstore} id={IDe} name={isem}/>
                  <PopupEditProvider trigger={editPopupprovider} setTrigger={setEditPopupprovider} id={IDP} name={isemP}/>
                  <PopupEditDriver trigger={editPopupdriver} setTrigger={setEditPopupdriver} id={IDD} name={isemD}/>
                  <PopupEditClient trigger={editPopupclient} setTrigger={setEditPopupclient} id={IDC} name={isemC}/>

                  </div>
                  <i class="material-icons" onClick={() => Display(val)}>info_outline</i>
                  <div className="popeditfleet"> 
                  <PopupInfoFleet trigger={InfoPopupFleet} setTrigger={setInfoPopupFleet} data={ROW} id={val._id} drivers={Drivers}/>
                  <PopupInfoStore trigger={InfoPopupStore} setTrigger={setInfoPopupStore} data={ROW}/>
                  <PopupInfoClient trigger={InfoPopupClient} setTrigger={setInfoPopupClient} data={ROW}/>
                  <PopupInfoDriver trigger={InfoPopupDriver} setTrigger={setInfoPopupDriver} data={ROW}/>
                  <PopupInfoProvider trigger={InfoPopupProvider} setTrigger={setInfoPopupProvider} data={ROW}/>
                  <PopupInfoUser trigger={InfoPopupUser} setTrigger={setInfoPopupUser} data={ROW}/>
                  <PopupAlert trigger={alertbuttonPopup} setTrigger={setalertbuttonPopup} type={ALERTF} id={IDA} />

                  </div>
                  
                  </div>
                <div className={`reguliere ${val.status}`} onClick={()=>url(title,val._id)}>{(type==="Demands") ? ("processing") :val.status}</div></StyledTableCell>
              </StyledTableRow>
            ))}
            
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows?.length}
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