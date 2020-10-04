import React, {Component} from 'react';

import {Card, Table, ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class PartidaList extends Component {

    constructor(props){
        super(props);
        this.state = {
            partidas : []
        };
    }

    componentDidMount(){
        this.listarTodasPartidas();
    }

    listarTodasPartidas(){
        axios.get("http://localhost:8080/partidas")
            .then(response => response.data)
            .then((data) =>{
                this.setState({partidas: data});
            });
    }



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
                              <th>Deletar</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.partidas.length === 0 ?
                                <tr align="center">
                                  <td colSpan="6"> Partidas registradas</td>
                                </tr> :
                                this.state.partidas.map((partidas) =>(
                                <tr key={partidas.id}>
                                    <td>{partidas.codigo}</td>
                                    <td>{partidas.pontos}</td>
                                    <td>{partidas.min_temporada}</td>
                                    <td>{partidas.max_temporada}</td>
                                    <td>{partidas.quebra_min}</td>
                                    <td>{partidas.quebra_max}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button size="sm" variant="outline-danger" ><FontAwesomeIcon icon={faTrash}/></Button>{''}
                                        </ButtonGroup>
                                    </td>
                                </tr>

                                ))
                            }
                          </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }

}

