import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo_t.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <NavLink exact activeClassName="active-link" to="/" className="nav-link">
        Inicio
      </NavLink>
      <NavLink activeClassName="active-link" to="/main" className="nav-link">
        Página Principal
      </NavLink>
      <NavLink activeClassName="active-link" to="/team" className="nav-link">
        Equipo
      </NavLink>
      <NavLink activeClassName="active-link" to="/instructions" className="nav-link">
        Instrucciones
      </NavLink>
    </nav>
  );
};

export default Navbar;
