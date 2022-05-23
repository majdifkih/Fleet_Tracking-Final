import "./login.scss"
import {useState} from 'react'
import stock from './stock0.jpg'
import logo from './logo.png'
function Login () {
  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
<div class="container">
    <div class="spliit left">
        <img src={logo} alt="Avatar qlogist"></img>
        <h1>Keep track of your goods,inventory and fleet</h1>
        <h5>Login</h5>
        
          <div class="screen-1">
          <table cellspacing="44px" >
            <tr>
              <td><label for="email">Email address</label> </td>
              <td> <label for="password">Password</label></td>
            </tr>
            <tr>
              <td><div class="email">
                
                <div class="sec-2">
                  <ion-icon name="mail-outline"></ion-icon>
                  <input type="email" name="email" placeholder="Username@gmail.com"/>
                </div>
              </div></td>
              <td><div class="password">
                <div class="sec-2">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input class="pas" id ="myInput" type={isRevealPwd ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)} name="password" placeholder="············"/>
                  <ion-icon class="show-hide" name="eye-outline" onClick={() => setIsRevealPwd(prevState => !prevState)}></ion-icon>
                </div>
              </div></td>
            </tr>
          </table>
            <div class="footer"> 
              <div><button type="submit" class="login">Login </button></div>
              <div><span>Forgot Password?</span></div>
            </div>
          </div>
      </div>

    <div class="split right">
        <img id="im"  src={stock} alt="Avatar bg"></img>

      </div>

</div>  )
}

export default Login