import React, {Component} from 'react';

import {Card, Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';

export default class PartidaList extends Component {
    render(){
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> Lista de partidas</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                         <thead>
                            <tr>
                              <th>Jogo</th>
                              <th>Placar</th>
                              <th>Mínimo da temporada</th>
                              <th>Máximo da temporada</th>
                              <th>Quebra recorde min.</th>
                              <th>Quebra recorde max.</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr align="center">
                              <td colSpan="6">Sem partidas registradas</td>
                            </tr>
                          </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }

}

