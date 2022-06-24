import "./login.scss"
import {useState , useContext} from 'react'
import stock from './stock0.jpg'
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios'
function Login () {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const[user,setUser]=useState('')
  const [token, setToken] = useState('');
  const[role,setRole]=useState('')
  const navigate = useNavigate();
  const Auth = async() => {
    try {
      await axios.post('http://localhost:3001/AuthAPI/login', {
            email: email,
            password: pwd
        }).then(res => {
            if (res.data.success) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.details.name);
                localStorage.setItem('role ', res.data.isAdmin);
                // alert('Login Successful');
                
                navigate('/home');
            } else {
                alert('Invalid email or password');
            }
        });

        
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        }
    }
}
  return (
<div className="container">
    <div className="splitleft">
      <div className="titlelogin">
        <img src={logo} alt="Avatar qlogist" className="logoimg"/>
        <div>
        <h1>Keep track of your goods,inventory and fleet</h1>
        <h5>Login</h5>
        </div>
        </div>
          <div className="screen-1">
          <div className="scecenter">
            <div >
            <label for="email">Email address</label>
            <div className="inputform">
           <EmailIcon fontSize="small" className="iconinput"/>
                  <input type="email" name="email" placeholder="Username@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
            </div>
            <div >
            <label for="password">Password</label>
            <div className="inputform">
            <LockIcon fontSize="small" className="iconinput"/>
                  <input className="pas" id ="myInput" type={isRevealPwd ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)} name="password" placeholder="············"/>
                  <VisibilityIcon className="iconinput" fontSize="small" />
                  </div>
            </div>
            </div>
            <div className="footer"> 
              <div><button type="submit" className="login" onClick={()=>Auth()}>Login </button></div>
             
            </div>
            
          </div>
      </div>

    <div className="splitright">
        <img id="im"  src={stock} alt="Avatar bg" className="imgstock"/>

      </div>

</div>  
)
}

export default Login