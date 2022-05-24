import "./StoreTable.scss";
import * as React from 'react';
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
import FullTable from "../../components/table/FullTable";

function createData(name, status) {
  return { name, status };
}

const rows = [
  createData('Frozen yoghurt','NonReg'),
  createData('Ice cream sandwich','Reg'),
  createData('Eclair','Reg'),
  createData('Cupcake','Reg'),
  createData('Gingerbread','NonReg'),
  createData('Frozen yoghurt','NonReg'),
  createData('Ice cream sandwich','Reg'),
  createData('Eclair','Reg'),
  createData('Cupcake','Reg'),
  createData('Gingerbread','NonReg'),
  createData('Frozen yoghurt','NonReg'),
  createData('Ice cream sandwich','Reg'),
  createData('Eclair','Reg'),
  createData('Cupcake','Reg'),
  createData('Gingerbread','NonReg'),
];
 function StoreTable() {
  

  return (

  <div className="devicemain">
    <div className="side"><Sidebar/></div>
    <div className="device">
    <Navbar/>

<div className="headdevice">
      <div className="titledevice">
      Stores
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<button className="del" ><DeleteIcon fontSize="small"/>Delete</button>

</div>

 <FullTable rows={rows} type="non" stat="Reguliere" title="nom de store"/>
  </div>
  </div>
  
  );
}
export default StoreTable
