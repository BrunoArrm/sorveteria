import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (

    <header className="topo">
        <div className="logo">
            <Link to="/">
                <img src="../../assets/logo.png"></img>
            </Link>
        </div>
        <nav>
            <ul>
                <li><Link className="linkTopo" to='/'>Home</Link></li>
                <li><Link className="linkTopo" to='/Sabores'>Sabores</Link></li>
                <li><Link className="linkTopo" to='/Sobre'>Sobre</Link></li>
            </ul>
        </nav>
    </header>

  )
}

export default Header
