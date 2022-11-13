import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import '../';

export class Listagens extends Component {
    render() {

        return (
            <><Header />
            <main>
                <h1>Clientes</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0 clientes que mais consumiram em quantidaded</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Todos clientes por gênero</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem geral de produtos e serviços mais consumidos</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>10 clientes que menos consumiram produtos ou serviços</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5 clientes que mais consumiram em valor</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            </>
        );
    }
}