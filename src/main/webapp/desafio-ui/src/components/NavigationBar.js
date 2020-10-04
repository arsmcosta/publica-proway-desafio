import React from 'react';

import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
    render(){
        return (
             <Navbar bg="dark" variant="dark">
                <Link to={""} className="navBar-brand">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/basketball-net.png"/>
                </Link>
               <Nav className="mr-auto">
                     <Link to={"adicionar"} className="nav-link">Adicionar Partida</Link>
                     <Link to={"listar"} className="nav-link">Listar Partidas</Link>
               </Nav>
             </Navbar>
        );
    }
}

export default NavigationBar;