import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/puneeth-logo.png';
import { useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const status=useOnlineStatus();
  const [login, setLogin] = useState('Login');
  return (
    <div className="header-div">
      <img src={logo} width={130} height={90} />
      <ul className="header-menu">
      <li>
        <p>Statu:{status? "✅" : "❌ "}</p>
        </li>
        <li>
          <Link to="/">Home</Link>{' '}
        </li>
        <li>
          <Link to="/about">About</Link>{' '}
        </li>
        <li>
          <Link to="/grocerry">Grocerry</Link>{' '}
        </li>
        <li>
          <Link to="/contact">Contact</Link>{' '}
        </li>
        
        <li
          onClick={() => {
            return login == 'Login' ? setLogin('Logout') : setLogin('Login');
          }}
        >
          <a href="#">{login} </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
