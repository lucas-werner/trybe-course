import React from 'react';
import { Link } from 'react-router-dom';
import trybeLogo from './trybe-logo.png'
import './Header.css';

function Header() {
  return (
    <header className="trybe-header">
      <nav className="trybe-nav">
        <span><Link to="/"><img src={trybeLogo} alt="Logo da Trybe" /></Link></span>
        <span><Link to="/solutions">Gabaritos</Link></span>
        <span><Link to="/schedule">Agenda</Link></span>
        <span><Link to="/trybe-content">Conteúdo</Link></span>
        <span><Link to="/setup">Setup Inicial</Link></span>
      </nav>
    </header>
  )
}

export default Header;
