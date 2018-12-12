import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ paths }) => {

  	return (
	    <ul className="main-nav">
	      <li><NavLink exact to={`/${paths[0]}`} >{paths[0].charAt(0).toUpperCase() + paths[0].slice(1)}</NavLink></li>
	      <li><NavLink exact to={`/${paths[1]}`} >{paths[1].charAt(0).toUpperCase() + paths[1].slice(1)}</NavLink></li>
	      <li><NavLink exact to={`/${paths[2]}`} >{paths[2].charAt(0).toUpperCase() + paths[2].slice(1)}</NavLink></li>
	    </ul>
	);  
};

export default Nav;