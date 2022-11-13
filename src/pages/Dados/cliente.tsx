import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/header";
import './styles.css'

export class Clientes extends Component {
    render() {

        return (
            <><Header /><main>
                <h1>Clientes</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="Nome">Amanda</td>
                                <td data-label="Gênero">Feminino</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/editar_cliente/1">Editar</Link> <br/>
                                        <Link to="/clientes/1">Visualizar</Link> <br/>
                                        <Link to="/">Excluir</Link>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td data-label="Nome">Gabriel</td>
                                <td data-label="Gênero">Masculino</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/editar_cliente/2">Editar</Link> <br/>
                                        <Link to="/clientes/2">Visualizar</Link> <br/>
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