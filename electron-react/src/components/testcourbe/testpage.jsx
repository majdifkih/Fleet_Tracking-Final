import React from "react"
import { useState,useEffect } from 'react';
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

   
  const CourbeTest = ({title }) => {
    
    const [Courbe, setCourbe] = useState([]);
    const getProvider=()=>{
      axios.get("http://127.0.0.1:3001/CourbeAPI/courbe").then(res=>{
        if(res.data.success){
          setCourbe( res.data.existingPosts);
          
          console.log(Courbe)
        }
      })
    } 
    useEffect(()=>{
      getProvider() 
    },[]);  
    console.log(Courbe)
    return (
      <div className="chart">
       <div className="courbe">
        <div className="title">{title}<span>As of 31 May 2019,09:41PM</span></div> 
        
        <ResponsiveContainer height="80%">
         
          <LineChart
            width={500}
            height={300}
            data={Courbe}
            margin={{
              top: 20,
              right: 0,
              left: 1,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            
            <XAxis dataKey="date" stroke="gray" />
            <YAxis dataKey="total" stroke="gray"/>
            <Tooltip />
            <Legend />
            
            <Line type="monotone" dataKey="total" stroke="blue" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Yesterday" stroke="gray" />
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
  }
  export default CourbeTest
  