import React, {Component} from 'react';

import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare} from '@fortawesome/free-solid-svg-icons';

export default class Partida extends Component {

    constructor(props){
        super(props);
        this.state = {pontos:''};
        this.partidaSalva = this.partidaSalva.bind(this);
        this.submitPartida = this.submitPartida.bind(this);
    }

    submitPartida(event){
        alert(this.state.pontos);
        event.preventDefault();
    }

    partidaSalva(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

        render(){
                return (
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Adicionar Partida</Card.Header>
                        <Form onSubmit={this.submitPartida} id="partidaFormId">
                            <Card.Body>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridPontos">
                                        <Form.Label>Pontos</Form.Label>
                                        <Form.Control  required
                                        type="test" name="pontos"
                                        value={this.state.pontos}
                                        onChange={this.partidaSalva}
                                        className={"bg-dark text-white"}
                                        placeholder="Digite a pontuação da partida" />
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
                );
        }
}