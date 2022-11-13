import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/header";
import './styles.css';

export class Produtos extends Component {
    render() {

        return (
            <><Header /><main>
                <h1>Produtos</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Produto</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="Produto">Shampoo Match</td>
                                <td data-label="Preço">40.00</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/editar_produto/1">Editar</Link> <br/>
                                        <Link to="/produtos/1">Visualizar</Link> <br/>
                                        <Link to="/">Excluir</Link>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td data-label="Produto">Condicionador Match</td>
                                <td data-label="Preço">35.00</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="/editar_produto/2">Editar</Link> <br/>
                                        <Link to="/produtos/2">Visualizar</Link> <br/>
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