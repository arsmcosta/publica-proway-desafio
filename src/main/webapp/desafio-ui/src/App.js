import React from 'react';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Partida from './components/Partida';
import PartidaList from './components/PartidaList';
import BoasVindas from './components/BoasVindas';
import Footer from './components/Footer';

function App() {

    const marginTop = {
        marginTop:"20px"
    }

  return (
    <Router>
        <NavigationBar/>
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                       <Route path="/" exact component={BoasVindas}/>
                       <Route path="/adicionar" exact component={Partida}/>
                       <Route path="/listar" exact component={PartidaList}/>
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;
