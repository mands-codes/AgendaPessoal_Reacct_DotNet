import React from 'react';
import { FcCalendar, FcContacts, FcHome } from "react-icons/fc";
import './styles.css';
import { Link } from 'react-router-dom';
function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand logo" href="#" >nero agenda</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
                <Link to="/Home" className='nav-link'>
                    <FcHome size={30} style={{marginRight:"5px"}}/>
                    Home
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/adicionarCompromissos" className="nav-link">
                  <FcCalendar size={30} style={{marginRight:"5px"}}/>
                 Adicionar Compromissos
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/contatos" className="nav-link">
                    <FcContacts size={30} style={{marginRight:"5px"}}/>
                     Contatos
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Menu;