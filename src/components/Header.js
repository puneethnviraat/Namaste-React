import React from 'react'
import logo from '../images/puneeth-logo.png'
import { useState } from 'react';
const Header=()=> {
  const [login, setLogin] = useState("Login");
  return (
    <div className='header-div'> 
       <img src={logo} width={130} height={90} />
       <ul className='header-menu'>
          <li><a href="#"></a>Home </li>
          <li><a href="#"></a>About </li>
          <li><a href="#"></a>Contact </li>
          <li onClick={()=>{
            return login=="Login"?setLogin("Logout"):setLogin("Login")
          }
          }><a href="#">{login} </a></li>

      </ul>
    </div>
  )
}

export default Header 