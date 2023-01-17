import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Header from "../../component/header";

export class AddServico extends Component {
    render() {

        return (
            <><Header /><main>

                <Button className="button" variant="outline-dark" href='/clientes'>Voltar</Button>

                <h1>Serviços adicionados ao Cliente</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="#">Barba</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h1>Serviços</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Serviço</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Ação</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                            <td data-label="Servico">Unhas</td>
                                <td data-label="Preço">35.00</td>
                                <td data-label="Ação">
                                    <div className='Column'>
                                        <Link to="#">Adicionar</Link>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td data-label="Servico">Barba</td>
                                <td data-label="Preço">10.00</td>
                                <td data-label="Ação">
                                    <div className='Column'>
                                        <Link to="#">Adicionar</Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main></>
        );
    }
}