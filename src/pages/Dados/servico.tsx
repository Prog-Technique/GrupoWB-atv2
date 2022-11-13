import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/header";
import './styles.css';

export class Servicos extends Component {
    render() {

        return (
            <><Header /><main>
                <h1>Serviços</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Servico</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="Servico">Unhas</td>
                                <td data-label="Preço">35.00</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/editar_servico/1">Editar</Link> <br/>
                                        <Link to="/servicos/1">Visualizar</Link> <br/>
                                        <Link to="/">Excluir</Link>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td data-label="Servico">Barba</td>
                                <td data-label="Preço">10.00</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/editar_servicos/2">Editar</Link> <br/>
                                        <Link to="/servicos/2">Visualizar</Link> <br/>
                                        <Link to="/">Excluir</Link>
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