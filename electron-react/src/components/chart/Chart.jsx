import "./chart.scss";
import { useState,useEffect } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import moment from "moment";
const Chart = ({title }) => {
  const [Facture, setFacture] = useState([]);
 
    const getTotal=()=>{
      axios.get('https://qlogisticsapp.herokuapp.com/FactureAPI/factures').then(res=>{
        if(res.data.success){
          setFacture( res.data.existingPosts);
          console.log(Facture)
        }
      })
    } 
    useEffect(()=>{
      getTotal() 
    },[]);  
    console.log(Facture)
    function formatXAxis(tickItem) {
      
      return moment(tickItem).format(' DD ')
      }
  return (
    <div className="chart">
     <div className="courbe">
      <div className="title">{title}<span>Of {moment(Date.now()).format("MMM YYYY")}</span></div> 
      <ResponsiveContainer height="80%">
        <LineChart
          width={500}
          height={300}
          data={Facture}
          margin={{
            top: 20,
            right: 0,
            left: 13,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={formatXAxis} stroke="gray" />
          <YAxis  stroke="gray"/>
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="total" stroke="blue" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="Yesterday" stroke="gray" /> */}
        </LineChart>
      </ResponsiveContainer>
      </div> 
      <TableContainer  className="table1">
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell className="tableCell"><span className="span1">Max en DT</span><span className="span2">31180</span>
              </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
            <TableCell className="tableCell"><span className="span1">Min en DT</span><span className="span2">3087</span></TableCell>
              
            </TableRow>
          
        </TableBody>
        <TableBody>
          
            <TableRow >
            <TableCell className="tableCell"><span className="span1">Moyenne en DT</span><span className="span2">23780</span></TableCell>
              
            </TableRow>
        </TableBody>
        <TableBody>
            <TableRow >
            <TableCell className="tableCell"><span className="span1">--</span><span className="span2">__</span></TableCell>
            </TableRow>
        </TableBody>
        
      </Table>
    </TableContainer>
    </div>
  );
};

export default Chart;

