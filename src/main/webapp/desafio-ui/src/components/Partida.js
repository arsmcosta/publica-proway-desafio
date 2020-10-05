import React, {Component} from 'react';

import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Toasts from './Toasts';

export default class Partida extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.partidaSalva = this.partidaSalva.bind(this);
        this.submitPartida = this.submitPartida.bind(this);
    }

    initialState = {
        pontos:''
    }

    submitPartida = event => {
        event.preventDefault();

        const partida = {
            pontos: this.state.pontos
        };

        axios.post("http://localhost:8080/partidas", partida)
           .then(response => {
               if(response.data != null) {
                    this.setState({"show": true});
                    setTimeout(() => this.setState({"show": false}), 3000);
               }else{
                    this.setState({"show": false});
               }
           });

        this.setState(this.InitialState);
    }

    partidaSalva = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

        render(){
                return (
                    <div>
                        <div style={{"display":this.state.show ? "block" : "none"}}>
                            <Toasts children = {{show:this.state.show, message : "Partida salva com sucesso."}}/>
                        </div>
                             <Card className={"border border-dark bg-dark text-white"}>
                                                        <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Adicionar Partida</Card.Header>
                                                        <Form onSubmit={this.submitPartida} id="partidaFormId">
                                                            <Card.Body>
                                                                <Form.Row>
                                                                    <Form.Group as={Col} controlId="formGridPontos">
                                                                        <Form.Label>Pontos</Form.Label>
                                                                        <Form.Control  required autoComplete="off"
                                                                        type="test" name="pontos"
                                                                        value={this.state.pontos}
                                                                        onChange={this.partidaSalva}
                                                                        className={"bg-dark text-white"}
                                                                        placeholder="Digite a pontuação (entre 0 e 100)" />
                                                                    </Form.Group>
                                                                </Form.Row>
                                                            </Card.Body>
                                                            <Card.Footer style={{"tectAlign":"right"}}>
                                                                <Button size="sm" variant="success" type="submit">
                                                                    <FontAwesomeIcon icon={faSave} /> Registrar
                                                                </Button>
                                                            </Card.Footer>
                                                        </Form>
                             </Card>
                    </div>

                );
        }
}