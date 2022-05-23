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
    TODAY: 4000,
    YESTERDAY: 2400,
    amt: 2400,
  },
  {
    name: '2',
    TODAY: 3000,
    YESTERDAY: 1398,
    amt: 2210,
  },
  {
    name: '3',
    TODAY: 2000,
    YESTERDAY: 9800,
    amt: 2290,
  },
  {
    name: '4',
    TODAY: 2780,
    YESTERDAY: 3908,
    amt: 2000,
  },
  {
    name: '5',
    TODAY: 1890,
    YESTERDAY: 4800,
    amt: 2181,
  },
  {
    name: '6',
    TODAY: 2390,
    YESTERDAY: 3800,
    amt: 2500,
  },
  {
    name: '7',
    TODAY: 3490,
    YESTERDAY: 4300,
    amt: 2100,
  },
  {
    name: '8',
    TODAY: 4000,
    YESTERDAY: 2400,
    amt: 2400,
  },
  {
    name: '9',
    TODAY: 3000,
    YESTERDAY: 1398,
    amt: 2210,
  },
  {
    name: '10',
    TODAY: 2000,
    YESTERDAY: 9800,
    amt: 2290,
  },
  {
    name: '11',
    TODAY: 2780,
    YESTERDAY: 3908,
    amt: 2000,
  },
  {
    name: '12',
    TODAY: 1890,
    YESTERDAY: 4800,
    amt: 2181,
  },
  {
    name: '13',
    TODAY: 2390,
    YESTERDAY: 3800,
    amt: 2500,
  },
  {
    name: '14',
    TODAY: 3490,
    YESTERDAY: 4300,
    amt: 2100,
  },
  {
    name: '15',
    TODAY: 4000,
    YESTERDAY: 2400,
    amt: 2400,
  },
  {
    name: '16',
    TODAY: 3000,
    YESTERDAY: 1398,
    amt: 2210,
  },
  {
    name: '17',
    TODAY: 2000,
    YESTERDAY: 9800,
    amt: 2290,
  },
  {
    name: '18',
    TODAY: 2780,
    YESTERDAY: 3908,
    amt: 2000,
  },
  {
    name: '19',
    TODAY: 1890,
    YESTERDAY: 4800,
    amt: 2181,
  },
  {
    name: '20',
    TODAY: 2390,
    YESTERDAY: 3800,
    amt: 2500,
  },
  {
    name: '21',
    TODAY: 3490,
    YESTERDAY: 4300,
    amt: 2100,
  },
  {
    name: '22',
    TODAY: 4000,
    YESTERDAY: 2400,
    amt: 2400,
  },
  {
    name: '23',
    TODAY: 3000,
    YESTERDAY: 1398,
    amt: 2210,
  },
  {
    name: '24',
    TODAY: 2000,
    YESTERDAY: 9800,
    amt: 2290,
  },
  {
    name: '25',
    TODAY: 2780,
    YESTERDAY: 3908,
    amt: 2000,
  },
  {
    name: '26',
    TODAY: 1890,
    YESTERDAY: 4800,
    amt: 2181,
  },
  {
    name: '27',
    TODAY: 2390,
    YESTERDAY: 3800,
    amt: 2500,
  },
  {
    name: '28',
    TODAY: 3490,
    YESTERDAY: 4300,
    amt: 2100,
  },
];
const Chart = ({title }) => {
  return (
    <div className="chart">
     <div className="courbe">
      <div className="title">{title}<br/><span>As of 31 May 2019,09:41PM</span></div> 
      
      <ResponsiveContainer width="100%" height="80%">
       
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis dataKey="name" stroke="gray" />
          <YAxis  stroke="gray"/>
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="TODAY" stroke="blue" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="YESTERDAY" stroke="gray" />
        </LineChart>
      </ResponsiveContainer>
      </div> 
      <TableContainer  className="table">
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
     
              <TableCell className="tableCell"><span className="span1">Max en DT</span> <br/><span><span className="span2">31180</span></span>
              </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
            <TableCell className="tableCell"><span className="span1">Min en DT</span><br/><br/><span className="span2">3087</span></TableCell>
              
            </TableRow>
          
        </TableBody>
        <TableBody>
          
            <TableRow >
            <TableCell className="tableCell"><span className="span1">Moyenne en DT</span><br/><br/><span className="span2">23780</span></TableCell>
              
            </TableRow>
        </TableBody>
        <TableBody>
            <TableRow >
            <TableCell className="tableCell"><span className="span1">--</span><br/><br/><span><span className="span2">__</span></span></TableCell>
            </TableRow>
        </TableBody>
        <TableBody className="tableBody">
            <TableRow >
            <TableCell className="tableCell"><span className="span1">--</span><br/><br/><span className="span2">__</span></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Chart;

