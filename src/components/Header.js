import React from 'react'
import logo from '../images/puneeth-logo.png'
const Header=()=> {
  return (
    <div className='header-div'> 
       <img src={logo} width={130} height={90} />
       <ul className='header-menu'>
          <li><a href="#"></a>Home </li>
          <li><a href="#"></a>About </li>
          <li><a href="#"></a>Contact </li>
          <li><a href="#"></a>Login </li>

      </ul>
    </div>
  )
}

export default Header 