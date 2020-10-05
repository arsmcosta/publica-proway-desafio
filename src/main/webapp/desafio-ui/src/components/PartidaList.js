import React, {Component} from 'react';

import './Style.css';
import {Card, Table, ButtonGroup, Button, InputGroup, FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faStepBackward, faFastBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class PartidaList extends Component {

    constructor(props){
        super(props);
        this.state = {
            partidas : [],
            PaginaAtual : 1,
            partidasPorPagina : 10
        };
    }

    componentDidMount(){
        this.listarTodasPartidas(this.state.paginaAtual);
    }

    listarTodasPartidas(paginaAtual){
        paginaAtual -= 1;
        axios.get("http://localhost:8080/partidas?page="+paginaAtual+"&size="+this.state.partidasPorPagina)
            .then(response => response.data)
            .then((data) =>{
                this.setState({
                    partidas: data.content,
                    paginasTotais: data.totalPages,
                    elementosTotais: data.totalElements,
                    paginaAtual: data.number + 1
                });
            });
    }

    changePage = event => {
        let targetPage = parseInt(event.target.value);
        this.listarTodasPartidas(targetPage);
        this.setState({
            [event.target.name]: targetPage
        });
    };

    firstPage = () => {
            let firstPage = 1;
            if(this.state.paginaAtual > firstPage){
                this.listarTodasPartidas(firstPage);
            }
        };

        prevPage = () => {
            let prevPage = 1;
            if(this.state.paginaAtual > prevPage){
                this.listarTodasPartidas(this.state.paginaAtual - prevPage);
            }
        };

        lastPage = () => {
            let condition = Math.ceil(this.state.elementosTotais / this.state.partidasPorPagina);
            if(this.state.paginaAtual < condition){
                this.listarTodasPartidas(condition);
            }
        };

        nextPage = () => {
            if(this.state.paginaAtual < Math.ceil(this.state.elementosTotais / this.state.partidasPorPagina)){
                this.listarTodasPartidas(this.state.paginaAtual + 1);
            }
        };

        render(){
            return(
                <div>Hello User</div>
            );
        }



    render(){
        const{partidas, paginaAtual, paginasTotais} = this.state;

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
                            {
                                partidas.length === 0 ?
                                <tr align="center">
                                  <td colSpan="6"> Sem partidas registradas</td>
                                </tr> :
                                partidas.map((partidas) =>(
                                <tr key={partidas.id}>
                                    <td>{partidas.codigo}</td>
                                    <td>{partidas.pontos}</td>
                                    <td>{partidas.min_temporada}</td>
                                    <td>{partidas.max_temporada}</td>
                                    <td>{partidas.quebra_min}</td>
                                    <td>{partidas.quebra_max}</td>
                                </tr>

                                ))
                            }
                          </tbody>
                    </Table>
                </Card.Body>
                {
                    partidas.length > 0 ?
                    <Card.Footer>
                        <div style={{"float":"left"}}>
                            Página {paginaAtual} de {paginasTotais}
                        </div>
                        <div style={{"float":"right"}}>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                    <Button type="button" variant="outline-info" disabled={paginaAtual === 1 ? true : false}
                                        onClick={this.firstPage}>
                                        <FontAwesomeIcon icon={faFastBackward} />First
                                    </Button>
                                    <Button type="button" variant="outline-info" disabled={paginaAtual === 1 ? true : false}
                                        onClick={this.prevPage}>
                                        <FontAwesomeIcon icon={faStepBackward} />Prev
                                    </Button>
                                </InputGroup.Prepend>
                                <FormControl className={"page-num bg-dark"} name="paginaAtual" value={paginaAtual}
                                    onChange={this.changePage}/>
                                <InputGroup.Append>
                                     <Button type="button" variant="outline-info" disabled={paginaAtual === paginasTotais ? true : false}
                                        onClick={this.nextPage}>
                                        <FontAwesomeIcon icon={faStepForward} />Next
                                     </Button>
                                     <Button type="button" variant="outline-info" disabled={paginaAtual === paginasTotais ? true : false}
                                        onClick={this.lastPage}>
                                        <FontAwesomeIcon icon={faFastForward} />Last
                                     </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </Card.Footer> : null
                }
            </Card>
        );
    }

}

