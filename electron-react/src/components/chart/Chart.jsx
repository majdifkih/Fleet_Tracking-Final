import "./chart.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    Yesterday: 4000,
    Today: 2400,
    amt: 2400,
  },
  {
    name: '2',
    Yesterday: 3000,
    Today: 1398,
    amt: 2210,
  },
  {
    name: '3',
    Yesterday: 2000,
    Today: 9800,
    amt: 2290,
  },
  {
    name: '4',
    Yesterday: 2780,
    Today: 3908,
    amt: 2000,
  },
  {
    name: '5',
    Yesterday: 1890,
    Today: 4800,
    amt: 2181,
  },
  {
    name: '6',
    Yesterday: 2390,
    Today: 3800,
    amt: 2500,
  },
  {
    name: '7',
    Yesterday: 3490,
    Today: 4300,
    amt: 2100,
  },
];
const Chart = ({title }) => {
  return (
    <div className="chart">
     <div className="courbe">
      <div className="title">{title}<span>As of 31 May 2019,09:41PM</span></div> 
      
      <ResponsiveContainer height="80%">
       
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 1,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis dataKey="name" stroke="gray" />
          <YAxis  stroke="gray"/>
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="Today" stroke="blue" activeDot={{ r: 8 }} />
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
};

export default Chart;

