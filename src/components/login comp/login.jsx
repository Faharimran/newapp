import React from 'react'
import './login.css'


import user_icone from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icone from '../Assets/password.png'

const login = () => {
    const[action,setAction]=useState("Sign UP")
  return (<>
    <div className='container'>
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icone} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icone} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-pass">Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-cont">
            <div className={action==="Login"?"submit gray":"submit"} onClick={setAction("Sign Up")}>
                Sign Up
            </div>
            <div className={action==="Sign UP"?"submit gray":"submit"} onClick={setAction("Login")}>
                Login
            </div>
        </div>
    </div>
    </>
  )
}
export default login;
